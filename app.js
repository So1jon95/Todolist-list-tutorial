window.addEventListener("load", function (e) {
  const title = document.querySelector("#title");
  author = document.querySelector("#author");
  year = document.querySelector("#year");
  btn = document.querySelector(".btn");
  bookList = document.querySelector("#book-list");
  uppload = document.querySelector('.uppload');

  btn.addEventListener('click', (event)=>{
    event.preventDefault()
    // Basic validation
    if(title.value == '' && author.value == '' && year.value == '' ){
        this.alert('Please input your information')
    }else{
        const newRow = this.document.createElement('tr')
        // creating new title

        const newTitle = this.document.createElement('th')
        newTitle.innerHTML = title.value
        newRow.appendChild(newTitle)

        // creating new author
        const newAuthor = this.document.createElement('th')
        newAuthor.innerHTML = author.value
        newRow.appendChild(newAuthor)

        // creating new year

        const dataYear = this.document.createElement('th')
        dataYear.innerHTML = year.value
        newRow.appendChild(dataYear)

        // Displaying in UI

        bookList.appendChild(newRow)

        title.value = ''
        author.value = ''
        year.value =''
    }
  })
  
});
