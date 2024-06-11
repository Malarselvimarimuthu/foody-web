import React, { useState, useEffect } from 'react';
import { Button, Container, Table, Alert } from 'react-bootstrap';

const CartPage: React.FC = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const userId = localStorage.getItem('usid');
      console.log(userId);
      console.log(userId);
      const response = await fetch(`http://localhost:8082/api/orders/fetchOrders/${userId}`);
      const data = await response.json();
      console.log(data);
      setOrders(data.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteItem = async (orderId: string, itemName: string) => {
    try {
      const userId = localStorage.getItem('usid');
      const response = await fetch(`http://localhost:8082/api/orders/${userId}/${orderId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // Update the state to remove the deleted item
        setOrders((prevOrders) =>
          prevOrders
            .map((order) =>
              order.orderId === orderId
                ? {
                    ...order,
                    items: order.items.filter((item: any) => item.name !== itemName),
                  }
                : order
            )
            .filter((order) => order.items.length > 0) // Remove orders with no items left
        );
      } else {
        console.error('Failed to delete item');
      }
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <Container>
      <h1 className="my-4">Your Cart</h1>
      {loading ? (
        <p>Loading...</p>
      ) : orders.length === 0 ? (
        <Alert variant="info">No items ordered</Alert>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Serial No.</th>
              <th>Items</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order.orderId}>
                <td>{index + 1}</td>
                <td>
                  <ul>
                    {order.items.map((item: any, itemIndex: number) => (
                      <li key={itemIndex}>
                        {item.name}: {item.count}
                      </li>
                    ))}
                  </ul>
                </td>
                <td>
                  {order.items.map((item: any, itemIndex: number) => (
                    <li key={itemIndex}>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => deleteItem(order.orderId, item.name)}
                        style={{ marginBottom: '5px' }}
                      >
                        Delete
                      </Button>
                    </li>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default CartPage;
