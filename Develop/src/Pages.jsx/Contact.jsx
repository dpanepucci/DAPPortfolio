import '../styles/PagesStyle.css';

export default function Contact() {
    return (
      <div>
        <h1 className="h1">Contact Page</h1>
        <p className="main-para">
        Let’s connect to discuss how we can shape the future of technology and healthcare together!
        </p>
        <form id='form'>
          <input type='input' placeholder='Name'/>
          <input type='input' placeholder='Email'/>
          <input className='message' type='input' placeholder='Message'/>
          <button className='submit'>Submit</button>
        </form>
      </div>
    );
  }
  