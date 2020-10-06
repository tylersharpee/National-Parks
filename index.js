

function handleSubmission() {
  $('form').on('click', '#state-button', event => {
    event.preventDefault();
    store.state = $('#state-input option:selected').val();
    store.limit = $('#limit-input option:selected').val();
    getParks(store.state);

  });
}
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
function main() {
  generateOptions();
  handleSubmission();
}

$(main);