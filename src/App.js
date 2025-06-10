import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'
import CSVUploader from "./CSVUploader.js";

function App() {
    return(
      <><Header />
      <div> 
        <Card name="SAKSHAM" description="I am a Software Engineer" age= "30"/>
        <Card name="KUMAR" description="I am a Frontend Engineer" age= "20"/>
        <Card name="MISHRA" description="I am a Backend Engineer"/>
        <Card name="DON" description="I am a Full Stack Engineer"/>
        <Card name="AMAN" description="I am a Full Stack Engineer"/>
        <Card name="SANJAY" description="I am a Full Stack Engineer"/>
        <Card name="SANJAY" description="I am a Full Stack Engineer"/>
        <Card />

      </div>
      <CSVUploader />
      <Footer />
      </>
    );
}

export default App;
