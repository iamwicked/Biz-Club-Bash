import React from 'react'
import Bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import styles from '../styles/openPositions.module.css'

const Positions = () => {
return (
  <>  
  <div className = {styles.relative}> 
  <h2 className = {styles.textO}> Open Positions </h2>
 
  <div className = {styles.header}>
  <div className="card-header">
  <div className="d-flex flex-row-reverse">
  <div className=" p-2 order-last text-muted col-6 ">Name</div>
        <div className="p-2 text-muted col-1">P&L</div>
        <div className="p-2 text-muted col-">LTP</div>
        <div className="p-2 text-muted col-1">Avg Price</div>
        <div className="p-2 text-muted col-1">Qty/Lot</div>
        <div className="p-2 text-muted col-1">Segment</div>
        <div className="p-2 text-muted col-1">Product</div>
</div>
</div>
</div>
      <div className ={styles.body}>
      <div className=" border-light p-3 shadow-sm mb-5 bg-body container-sm top-0">
      <div className="row g-0">
      <div className="col-md-3">
      <img src="..." class="img-fluid rounded-start" alt="..."/>
      </div>
    <div className="col-md-8">
      <div className="card-body col-md-8">
        <h5 className="card-text text-muted">No Open Positions</h5>
        <p className="text-muted">When you place orders on exchange, corresponding open position appear here.</p>
        <a href="#" className="btn btn-success">+ Place Order From Watchlist</a>
      </div>
      </div>
      </div>
      </div>
    </div>
  </div>


    {/* <div className = {styles.relative}> 
    <h2 className = {styles.textC}> Closed Positions </h2>
  <div className="card border-light shadow-sm p-3 mb-5 bg-body rounded container-sm top-50 ">
  <div className= {styles.color}>
 <div className="card-header">
  <div className="d-flex flex-row-reverse">
  <div className=" p-2 order-last text-muted col-6 ">Name</div>
        <div className="p-2 text-muted col-1">P&L</div>
        <div className="p-2 text-muted col-1">LTP</div>
        <div className="p-2 text-muted col-1">Avg Price</div>
        <div className="p-2 text-muted col-1">Qty/Lot</div>
        <div className="p-2 text-muted col-1">Segment</div>
        <div className="p-2 text-muted col-1">Product</div>
</div>
</div>
</div>
      <div className="row g-0">
      <div className="col-md-3">
      <img src="..." class="img-fluid rounded-start" alt="..."/>
      </div>
    <div className="col-md-8">
      <div className="card-body col-md-8">
        <h5 className="card-text text-muted">No Closed Positions</h5>
        <p className="text-muted">When you exit  your open trade position on exchange, they appear here.</p>
        <a href="#" className="btn btn-success">+ Place Order From Watchlist</a>
      </div>
      </div>
      </div>
    </div>
    </div> */}
    </>
)
}

export default Positions;
