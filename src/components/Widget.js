import React from 'react'
import './widget.css'
import { useSelector } from 'react-redux'
function Widget() {
  const analysedStock = useSelector((state) => state.analysedStock)
  const items = [{
    key: 'total',
    value: 'Total Products'
  },
  {key: 'value',
    value: 'Total Store Value'
  },
  {key: 'outOfStock',
    value: 'Out Of Stock'
  },
  {key: 'category',
    value: 'No of Category'
  }
];
    return (
     <>
    
<div className="widget-container grid-container">
  {
    items.map(item => 
      (<div key={item.key} className="item1">
    <div>
    {item.value}
    </div>
    <div>
{analysedStock[item.key]}
    </div>
  </div>)
    )
  }
  

</div>
     </>   
    )
}

export default Widget
