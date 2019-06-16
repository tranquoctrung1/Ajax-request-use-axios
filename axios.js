const todoList = document.getElementById('todoList');

axios.get('http://localhost:3001/todo').then((res) => {
    let data =  res.data.map((item) => 
        {
        return `<li>${item.content}</li>`;
        });
    todoList.innerHTML = data.join('');
}).catch((err) => {
    console.log(err)
});

const submitted  = document.getElementById('submitted');

submitted.addEventListener('click', CheckSubmit);

function CheckSubmit ()
{

    // write keys and value or overwrite keys and value is available
    axios.post('http://localhost:3001/check',
    {
        firstName: document.getElementById('firstname').value,
        lastName: document.getElementById('lastname').value
  }).then((res) => 
  {
      if(res.data.firstName === "tran" && res.data.lastName === "trung")
      {
        document.getElementById('h1').innerHTML = "Success"
      }
      else
      {
          document.getElementById('h1').innerHTML = "Fail"
      }
  }).catch((err) =>
  {
      console.log(err)
  })
}