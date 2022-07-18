const complimentBtn = document.getElementById("complimentButton")
// const form = document.querySelector('form')

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)


//Add get compliment Btn 

const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

fortuneBtn.addEventListener('click', getFortune)

//Add get motivation Btn 

const motivationBtn = document.getElementById("motivationButton")

const getMotivation = () => {
    axios.get("http://localhost:4000/api/motivation/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

motivationBtn.addEventListener('click', getMotivation)

//Add get 211 Button 
const getHelpBtn = document.getElementById("helpButton")

const getHelp = () => {
    axios.get("http://localhost:4000/api/gethelp/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

getHelpBtn.addEventListener('click', getHelp)

//add get Coding bttn
const getCodingBtn = document.getElementById("codingButton")

const getCoding = () => {
    axios.get("http://localhost:4000/api/getcoding/")
        .then(res => {
            const data = res.data;
             alert(data);
           
    });
};

getCodingBtn.addEventListener('click', getCoding)

function codingDropdown() {
    document.getElementById("myDropDown").classList.toggle("show");

    window.onclick = codingDropdown(evt); {
    if (!evt.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
}
}



//Add reason button

const reasonsContainer = document.querySelector('#reasonsContainer')
const form = document.querySelector("form")

const reasonsCallback = ({data: reasons}) => displayReasons(reasons)
 const errReasonback = err => console.log(err.response.data)



const getAllReasons = () => axios.get("http://localhost:4000/api/reasons/")
                            .then(reasonsCallback).catch(errReasonback)
const addReason = body => {
   axios.post("http://localhost:4000/api/reasons/", body) 
   .then(reasonsCallback).catch(errReasonback)
} ;
 const updateReason = (id, type) => {
    axios.put("http://localhost:4000/api/reasons/:id",{type})
    .then(reasonsCallback).catch(errReasonback)
} ;
  const deleteReason = id => {
    axios.delete("http://localhost:4000/api/reasons/:id")
    .then(reasonsCallback).catch(errReasonback)
};

// const inputField = document.querySelector("input")

function listReason(evt) {
     evt.preventDefault()
     // const addReason = document.getElementById("reason")
     //const reason = document.createElement("li")
     const reasonNamed = document.createElement('span')
      let reason = document.querySelector('#reason')
    //  reasonNamed.textContent = inputField.value
    let bodyObj ={ reason: reason.value}
    // reason.appendChild(reasonNamed)
    // const deleteBtn = document.createElement('button')
    // deleteBtn.textContent = 'x'
    // deleteBtn.addEventListener('click', deleteReason )
    // reason.appendChild(deleteBtn)
    // ul.appendChild(reason)
    // inputField.value = ""
     addReason(bodyObj) 
     reason.value = ''

}

function createReasonsDisplay(reason) {
    const reasonCard = document.createElement("ul")
    reasonCard.classList.add('reason-card')
    reasonCard.innerHTML = `
    <p class="reason">${reason.text}</p>
    <button onclick="updateMovie(${reason.id})">update</button>
    <button onclick="deleteReason(${reason.id})">delete</button>`

    reasonsContainer.appendChild(reasonCard)
}
// function displayReasons(arr){reasonsContainer}

function displayReasons(arr) {
    reasonsContainer.innerHTML =  ``
    for (let i = 0; i < arr.length; i++) {
        createReasonsDisplay(arr[i])
    }
}

form.addEventListener('submit', listReason)

getAllReasons()