
let storage = window.localStorage;
let refrence="";

// grabbing add contact form
const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const email = document.querySelector(".email");
const phoneNumber = document.querySelector(".phoneNumber");

//grabbing contact detail span

const fName = document.querySelector(".fName");
const lName = document.querySelector(".lName");
const mail = document.querySelector(".mail");
const pNumber = document.querySelector(".pNumber");

// grabbing all divs
const contactviewDIV = document.querySelector(".contactView");
const mainViewDIV = document.querySelector(".mainView");
const addContactDIV = document.querySelector(".addContact");
const contactDetailsDIV= document.querySelector(".contactDetail");
const editContactDIV = document.querySelector(".editContact");

// grabbing value for edit contacts
const editFirstName = document.querySelector(".firstNameDetail");
const editLastName = document.querySelector(".lastNameDetail");
const editEmail = document.querySelector(".emailDetail");
const editPhoneNumber = document.querySelector(".phoneNumberDetail");
const deleteContact = document.querySelector(".deleteContact");

//grabbing contacted updated succesfully message

const successMessage = document.querySelector(".updated");

//grabbing delete contact button
const deleteAllContactsButton = document.querySelector(".deleteAllContact");
const mainArticle = document.querySelector("article");

/*
	1) Grab values from various input values.
	2) Save values in a single string sperated by spaces in local Storage.
	3) loop through all local storage keys, creating paragraph tags, inserting key values into them and appending it to contact div.
*/ 

addContactDIV.addEventListener("click", (event)=>{
	
	if (event.target.tagName === "BUTTON"){
		//saving values to localstorage
		storage[firstName.value + " " + lastName.value] = firstName.value + " " + lastName.value + " " + email.value + " " + phoneNumber.value;	
		location.reload();//reloading page to run script and effect change
		}
});

//loaading contacts
for (let i=0; i < storage.length; i++){
		let contact = document.createElement("p");
		contact.textContent = storage.key(i);
		contactviewDIV.appendChild(contact);
		
}

//contact details
contactviewDIV.addEventListener("click", (event)=>{
	if (event.target.tagName === "P"){
		contactDetailsDIV.style.display = "block";
		if(refrence === ""){
			refrence = event.target.textContent;
		}else{
			refrence = "";
			refrence = event.target.textContent;
		}
		
		let data = storage[event.target.textContent];
		let dataArray = data.split(" ");
		fName.textContent = " " + dataArray[0];
		lName.textContent = " " + dataArray[1];
		mail.textContent = " " + dataArray[2];
		pNumber.textContent = " " + dataArray[3];
		}
})

//updating contact
contactDetailsDIV.addEventListener("click", (event)=>{
	if (event.target.className === "edit"){
		/*if(editContactDIV.style.display === "none"){
			 editContactDIV.style.display="block";
		   }else{
			   editContactDIV.style.display="none";
		   }*/
		editContactDIV.style.display="block";
	}
});

editContactDIV.addEventListener("click", (event)=>{
	if(event.target.className === "updateContact"){
		//remove contact from local storage
		storage.removeItem(refrence);
		//add new contact with new values
		storage[editFirstName.value + " " + editLastName.value] = editFirstName.value + " " + editLastName.value + " " + editEmail.value + " " + editPhoneNumber.value;
		console.log(storage[editFirstName.value + " " + editLastName.value]);
		let newContact = document.createElement("p");
		newContact.textContent = editFirstName.value + " " + editLastName.value;
		contactviewDIV.appendChild(newContact);
		contactDetailsDIV.style.display = "none";
		
		/*
			*Display sucess message 
			*Wait four secounds 
			*Reload the page 
		*/
		//display success message
		successMessage.style.display = "block";
		//wait three secounds
		setTimeout(()=>{
			successMessage.style.display = "none";
			location.reload();
		},3000);
		
	}
});

//deleting contact

deleteContact.addEventListener("click", (event)=>{
	if (event.target.className === "deleteContact"){
		storage.removeItem(refrence);
		location.reload();
		contactDetailsDIV.style.display = "none";
	}
});

//deleting all contacts
mainArticle.addEventListener("click",(event)=>{
	if(event.target.className === "deleteAllContact"){
		storage.clear();
		location.reload();
	}
})

