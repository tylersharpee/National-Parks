const store = {
  states: [
    {full:'Alabama', abr:'AL'},
    {full:'Alaska', abr:'AK'},
    {full:'Arizona', abr:'AZ'},
    {full:'Arkansas', abr:'AR'},
    {full:'California', abr:'CA'},
    {full:'Colorado', abr:'CO'},
    {full:'Connecticut', abr:'CT'},
    {full:'Delaware', abr:'DE'},
    {full:'Florida', abr:'FL'},
    {full:'Georgia', abr:'GA'},
    {full:'Hawaii', abr:'HI'},
    {full:'Idaho', abr:'ID'},
    {full:'Illinois', abr:'IL'},
    {full:'Indiana', abr:'IN'},
    {full:'Iowa', abr:'IA'},
    {full:'Kansas', abr:'KS'},
    {full:'Kentucky', abr:'KY'},
    {full:'Louisiana', abr:'LA'},
    {full:'Maine', abr:'ME'},
    {full:'Maryland', abr:'MD'},
    {full:'Massachusetts', abr:'MA'},
    {full:'Michigan', abr:'MI'},
    {full:'Minnesota', abr:'MN'},
    {full:'Mississippi', abr:'MS'},
    {full:'Missouri', abr:'MO'},
    {full:'Montana', abr:'MT'},
    {full:'Nebraska', abr:'NE'},
    {full:'Nevada', abr:'NV'},
    {full:'New Hampshire', abr:'NH'},
    {full:'New Jersey', abr:'NJ'},
    {full:'New Mexico', abr:'NM'},
    {full:'New York', abr:'NY'},
    {full:'North Carolina', abr:'NC'},
    {full:'North Dakota', abr:'ND'},
    {full:'Ohio', abr:'OH'},
    {full:'Oklahoma', abr:'OK'},
    {full:'Oregon', abr:'OR'},
    {full:'Pennsylvania', abr:'PA'},
    {full:'Rhode Island', abr:'RI'},
    {full:'South Carolina', abr:'SC'},
    {full:'South Dakota', abr:'SD'},
    {full:'Tennessee', abr:'TN'},
    {full:'Texas', abr:'TX'},
    {full:'Utah', abr:'UT'},
    {full:'Vermont', abr:'VT'},
    {full:'Virginia', abr:'VA'},
    {full:'Washington', abr:'WA'},
    {full:'West Virginia', abr:'WV'},
    {full:'Wisconsin', abr:'WI'},
    {full:'Wyoming', abr:'WY'}
  ],
  limits: [
    '1',
    '5',
    '10',
    '15',
    '20',
    '25',
    '50'
  ],
  state: null,
  results: [],
  limit: 10,
  total: null,
  index: 0
};
function generateOptions() {
  const stateOptions = store.states.map(state => {return `<option name='${state.abr}' value='${state.abr}'>${state.full}</option>`;});
  const limitOptions = store.limits.map(limit => {
    if (limit != 10) {
      return `<option name='${limit}' value='${limit}'>${limit}</option>`
    }
    else {
      return `<option name='${limit}' value='${limit}' selected>${limit}</option>`
    }
  });
  $('#state-input').html(stateOptions);
  $('#limit-input').html(limitOptions);
}
function Card(obj) {
  const address = obj.addresses[0];
  function addressTemplate() {
    if (address) {
      return `
      <h3 class='address-title'>Address</h3>
      <p class='address'>${address.line1} ${address.city} ${address.stateCode} ${address.postalCode}</p>
      `
    }
    else return '';
  }
  return `
    <li class='card' id='${obj.id}'>
      <h2 class='card-title'>${obj.fullName}</h2>
        <h3 class='url-title'>Website URL</h3>
        <p><a href='${obj.url}' target='_blank'>${obj.url}</a></p>
        ${addressTemplate()}
        <h3 class='description-title'>Description</h3>
        <p class='description'>${obj.description}</p>
    </li>
  `;
}