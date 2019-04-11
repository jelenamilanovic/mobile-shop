import React from 'react';
import './AppHeader.css';

export default function AppHeader({inCart}) {
  return (
    <div className="app-header">
      <section className="header-left">
        <label>mobile/apple</label>
      </section>

      <section className="header-right">
        <label>Items in cart ({inCart}) | Checkout</label>
      </section>
    </div>
  )
}
