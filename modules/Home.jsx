import React from 'react'

export default React.createClass({
  render() {
    return (
    	<div>
    		<h1>Grid</h1>
    		<div className='container-960'>
	    		<div className='grid-twelve'>
		    		<div className='row'>
			    		<div className='one'>one</div> <div className='eleven'>eleven</div>
		    		</div>
		    		<div className='row'>
						<div className='two'>two</div><div className='ten'>ten</div>
		    		</div>
		    		<div className='row'>
						<div className='three'>three</div><div className='nine'>nine</div>
		    		</div>
		    		<div className='row'>
						<div className='four'>four</div><div className='eight'>eight</div>
		    		</div>
		    		<div className='row'>
						<div className='five'>five</div><div className='seven'>seven</div>
		    		</div>
		    		<div className='row'>
						<div className='six'>six</div><div className='six'>six</div>
		    		</div>
		    		<div className='row'>
						<div className='seven'>seven</div><div className='five'>five</div>
		    		</div>
		    		<div className='row'>
						<div className='eight'>eight</div><div className='four'>four</div>
		    		</div>
		    		<div className='row'>
						<div className='nine'>nine</div><div className='three'>three</div>
		    		</div>
		    		<div className='row'>
						<div className='ten'>ten</div><div className='two'>two</div>
		    		</div>
		    		<div className='row'>
						<div className='eleven'>eleven</div><div className='one'>one</div>
					</div>
		    		<div className='row'>
						<div className='twelve'>twelve</div>
					</div>
				</div>
			</div>
    	</div>    	
	)
  }
})
