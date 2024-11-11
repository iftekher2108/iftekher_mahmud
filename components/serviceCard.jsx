

function ServiceCard(props) {
return(
    <>
    <div className="card border-2 border-primary">
        <div className="card-header bg-primary p-3 pt-4">
            <h5 className="text-center text-white text-uppercase">{props.title}</h5>
        </div>
        <div className="card-body">
            <ul>
             {props.list.map((list,index) => (
              <li key={index}>{list}</li>   
             ))}   
            </ul>
            
        </div>
        
    </div>
    </>
)
}

export default ServiceCard