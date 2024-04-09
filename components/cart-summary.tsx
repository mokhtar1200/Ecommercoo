"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart"

import { Button } from "@/components/ui/button"

export function CartSummary() {
  const { formattedTotalPrice, totalPrice, cartDetails, cartCount } = useShoppingCart();
  const shippingAmount = cartCount > 0 ? 500 : 0;
  const totalAmount = totalPrice + shippingAmount;

  return (
    <form
      className="max-w-md mx-auto mt-8 space-y-4 bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200"
      style={{ marginTop: '-90px' }}
      action="https://formspree.io/f/xkndpgpe"
      method="POST"
    >
      <div className="flex flex-col space-y-2">
        <label htmlFor="nom">Nom</label>
        <input type="text" id="nom" placeholder="Votre nom" className="border border-gray-300 p-2 rounded-md w-full lg:w-96" name="nom" />
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="prenom">Prénom</label>
        <input type="text" id="prenom" placeholder="Votre prénom" className="border border-gray-300 p-2 rounded-md w-full lg:w-96"  name="prénom"/>
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="wilaya" >Wilaya</label>
        <input type="text" id="wilaya" placeholder="Votre wilaya" className="border border-gray-300 p-2 rounded-md w-full lg:w-96"  name="Wilaya"/>
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="telephone">Numéro de Téléphone</label>
        <input type="text" id="telephone" placeholder="Votre numéro de téléphone" className="border border-gray-300 p-2 rounded-md w-full lg:w-96" name="Numéro De Téléphone" />
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="produits">Les Produits</label>
        <input type="text" id="produits" placeholder="Les produits" className="border border-gray-300 p-2 rounded-md w-full lg:w-96" name="Les Produits"/>
      </div>
     
      <input type="hidden" name="totalPrice" value={totalAmount} />
      <section
        aria-labelledby="summary-heading"
        className="rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-6 shadow-md"
      >
        <h2 id="summary-heading" className="text-lg font-medium">
          Order summary
        </h2>

        <dl className="mt-6 space-y-4">
          <div className="flex items-center justify-between">
            <dt className="text-sm">Subtotal</dt>
            <dd className="text-sm font-medium">{formattedTotalPrice}</dd>
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-600">
            <dt className="flex items-center text-sm">
              <span>Shipping estimate</span>
            </dt>
            <dd className="text-sm font-medium">
              {formatCurrencyString({ value: shippingAmount, currency: 'DZD' })}
            </dd>
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-600">
            <dt className="text-base font-medium">Order total</dt>
            <dd className="text-base font-medium">
              {formatCurrencyString({ value: totalAmount, currency: 'DZD' })}
            </dd>
          </div>
        </dl>

        <div className="mt-6">
          <Button type="submit" className="w-full">
            Loading...
          </Button>
        </div>
      </section>
    </form>
  );
}
