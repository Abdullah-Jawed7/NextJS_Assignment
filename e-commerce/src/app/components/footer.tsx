import Link from 'next/link'
import { Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-100 pt-16 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-600">We are a modern e-commerce platform offering a wide range of products.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link href="/category/electronics" className="text-gray-600 hover:text-gray-800">Electronics</Link></li>
              <li><Link href="/category/clothing" className="text-gray-600 hover:text-gray-800">Clothing</Link></li>
              <li><Link href="/category/home" className="text-gray-600 hover:text-gray-800">Home & Living</Link></li>
              <li><Link href="/category/books" className="text-gray-600 hover:text-gray-800">Books</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-gray-600 hover:text-gray-800">Contact Us</Link></li>
              <li><Link href="/faq" className="text-gray-600 hover:text-gray-800">FAQ</Link></li>
              <li><Link href="/shipping" className="text-gray-600 hover:text-gray-800">Shipping</Link></li>
              <li><Link href="/returns" className="text-gray-600 hover:text-gray-800">Returns</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-800"><Facebook size={24} /></a>
              <a href="#" className="text-gray-600 hover:text-gray-800"><Twitter size={24} /></a>
              <a href="#" className="text-gray-600 hover:text-gray-800"><Instagram size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-center text-gray-500">&copy; 2023 E-Commerce Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

