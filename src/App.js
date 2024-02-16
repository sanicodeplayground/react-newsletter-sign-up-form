// import "./index.css";

export default function App() {
  return (
    <main className="wrapper">
      <div className="card-container">
        <div className="image-container">
          <img
            src="https://images.unsplash.com/photo-1575527820586-5f350ab37c6f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="text-container">
          <h1>Subscribe</h1>
          <p>
            Start receiving recepies, discounts and fresh products from organic
            market directly to your door.
          </p>
          <ul>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p>Hi-quality products</p>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p>Support local farmers in your area</p>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p>Organic only products</p>
            </li>
          </ul>
          <Form />
        </div>
      </div>
    </main>
  );
}

function Form() {
  return (
    <form action="#" novalidate>
      <p className="success hidden">Thank you for subscribing!</p>
      <p className="error hidden">Valid email required</p>
      <label for="email">
        Email address
        <span className="error hidden" aria-live="polite">
          Valid email required
        </span>
      </label>
      <input
        id="email"
        type="email"
        placeholder="email@company.com"
        name="email"
        required
      />
      <button type="submit">Join the community</button>
    </form>
  );
}
