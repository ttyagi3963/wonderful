import { NextResponse } from 'next/server';
import { MOCK_PRODUCTS } from '@/data/mocks';

/**
 * GET /api/products handler to return a list of products.
 * @returns {NextResponse} JSON response containing the list of products.
 */
export async function GET() {
  // SIMULATE NETWORK DELAY (1 second)
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return NextResponse.json(MOCK_PRODUCTS);
}
