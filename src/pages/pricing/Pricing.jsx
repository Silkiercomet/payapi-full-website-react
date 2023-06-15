import React from 'react'
import PricingCard from '../../components/PricingCard'

const Pricing = () => {
  const plans = [
    {plan:"Free Plan",
  details:"Build and test using our core set of products with up to 100 API requests",
price:0,
perksAmount:3
},
    {plan:"Basic Plan",
  details:"Launch your project with unlimited requests and no contractual minimums",
price:249,
perksAmount:5
},
    {plan:"Premium Plan",
  details:"Get tailored solutions, volume pricing, and dedicated support for your team",
price:499,
perksAmount:7
}
  ]
  return (
    <section className='price'>
      <h1>Pricing</h1>
      <main className='pricing'>
        {plans.map((e,i) => <PricingCard plan={e.plan} details={e.details} price={e.price} perksAmount={e.perksAmount} />)}
      </main>
    </section>
  )
}

export default Pricing