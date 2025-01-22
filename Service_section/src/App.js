import './App.css';
import ServiceComponent from './ServiceComponent/ServiceComponent';

function App() {
  const listOfServices = [
    {
      id: '01',
      title: "Consultation",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt"
    },
    {
      id: '02',
      title: "Research and Strategy Development",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt"
    },
    {
      id: '03',
      title: "Implementation",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt"
    },
    {
      id: '04',
      title: "Monitoring and Optimization",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt"
    },
    {
      id: '05',
      title: "Reporting and Communication",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt"
    },
    {
      id: '06',
      title: "Continual Improvement",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt"
    }
  ];

  const listItems = listOfServices.map(services => 
    <ServiceComponent 
      key={services.id}  // Ensure each item has a unique key
      id={services.id}
      title={services.title}
      body={services.body}
    />
  );

  return (
    <section className="our-working-process">
      <div className="header">
        <div className="header-content">
          <h3 className="header-title">Our Working</h3>
          <h3 className="header-title">Process</h3>
        </div>
        <p className="sub-header-title">Step-by-step Guide to Achieving Your Business Goals</p>
      </div>
      
      {listItems} {/* Render the list of ServiceComponents here */}
    </section>
  );
}

export default App;
