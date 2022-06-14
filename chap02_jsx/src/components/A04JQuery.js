// A04JQuery.js
import $ from 'jquery'

$(document).ready(function(){
  $('#btn').click(function(){
    const qty = $('#qty').val();
    const cost = $('#cost').val();

    $('#result').html(qty * cost);
  })
});

function A04JQuery() {

  const getTotal = () => {
    const qty = $('#qty').val();
    const cost = $('#cost').val();

    console.log(qty, cost)
  }
  return (
    <div>
      <h5>A04 JQuery</h5>

      Qty: <input type="text" className="form-control" id="qty" />
      Cost: <input type="text" className="form-control" id="cost" />
      <button id="btn">Click</button>
      <button onClick={getTotal}>Total</button>
      <br />
      <br />
      <div id="result"></div>
    </div>
  )
}
export default A04JQuery;
