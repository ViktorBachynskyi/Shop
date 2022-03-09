const API_URL = 'https://my-json-server.typicode.com/ViktorBachynskyi/json-server/products';

export async function getProduct(): Promise<Product[]> {
  const response = await fetch(API_URL);

  return response.json();
}

export async function addProduct(newProduct: Product | null): Promise<Product[]> {
  const response = await fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(newProduct),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  return response.json();
}

export async function deleteProduct(id: number) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });

  return response.json();
}
