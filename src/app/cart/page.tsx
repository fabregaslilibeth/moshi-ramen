'use client';

import { useCartContext } from '@/context/CartContext';
import { CartIcon } from '@/components/CartIcon';

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCartContext();

  const formatPrice = (price: number) => {
    return `$${price.toFixed(2)}`;
  };

  const handleQuantityChange = (sku: string, newQuantity: number) => {
    updateQuantity(sku, newQuantity);
  };

  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-gray-800">
        {/* Header */}
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-orange-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex justify-between items-center mb-4">
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                🍜 Moshi Ramen
              </div>
              <CartIcon />
            </div>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-rocknroll">
                Your Cart
              </h1>
            </div>
          </div>
        </div>

        {/* Empty Cart */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="text-8xl mb-6">🛒</div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Your cart is empty
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Add some delicious ramen to get started!
            </p>
            <a
              href="/menu"
              className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Browse Menu
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-orange-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center mb-4">
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
              🍜 Moshi Ramen
            </div>
            <CartIcon />
          </div>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-rocknroll">
              Your Cart
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {cart.totalItems} item{cart.totalItems !== 1 ? 's' : ''} • Total: {formatPrice(cart.totalPrice)}
            </p>
          </div>
        </div>
      </div>

      {/* Cart Items */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          {cart.items.map((item) => (
            <div
              key={item.product.sku}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{item.product.image}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {item.product.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {item.product.category} • SKU: {item.product.sku}
                    </p>
                    <p className="text-lg font-bold text-orange-600 dark:text-orange-400">
                      {formatPrice(item.product.price)} each
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleQuantityChange(item.product.sku, item.quantity - 1)}
                      className="w-8 h-8 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    >
                      −
                    </button>
                    <span className="w-8 text-center font-semibold text-gray-900 dark:text-white">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(item.product.sku, item.quantity + 1)}
                      className="w-8 h-8 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    >
                      +
                    </button>
                  </div>

                  {/* Item Total */}
                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-900 dark:text-white">
                      {formatPrice(item.product.price * item.quantity)}
                    </p>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.product.sku)}
                    className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Order Summary
            </h2>
            <button
              onClick={clearCart}
              className="text-sm text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors"
            >
              Clear Cart
            </button>
          </div>
          
          <div className="space-y-2 mb-6">
            <div className="flex justify-between text-gray-600 dark:text-gray-300">
              <span>Items ({cart.totalItems})</span>
              <span>{formatPrice(cart.totalPrice)}</span>
            </div>
            <div className="flex justify-between text-gray-600 dark:text-gray-300">
              <span>Tax</span>
              <span>{formatPrice(cart.totalPrice * 0.08)}</span>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 pt-2">
              <div className="flex justify-between text-lg font-bold text-gray-900 dark:text-white">
                <span>Total</span>
                <span>{formatPrice(cart.totalPrice * 1.08)}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
              Proceed to Checkout
            </button>
            <a
              href="/menu"
              className="flex-1 border-2 border-orange-600 text-orange-600 dark:text-orange-400 hover:bg-orange-600 hover:text-white font-bold py-3 px-6 rounded-lg transition-colors text-center"
            >
              Continue Shopping
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
