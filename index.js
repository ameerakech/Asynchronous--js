//QUESTION ONE 

// Input =  email
// Output = message
// 1.Define a function sendReminder 
// 2.Inside the function, set a timeout for 5 seconds
// 3.After five seconds print the message
// 4.Call the function thrice with the email addresses.

async function sendReminder(email) {
    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log(`Reminder sent to ${email}`);
}

sendReminder("chris@gmail.com")
sendReminder("Riha@gmail.com")
sendReminder("James@gmail.com")


//QUESTION TWO

// Input = no input
// Output = message
//1.Define a function that returns a promise
//2.Initialize conter attempt to zero
//3.Increment the attempt
//4.Wait one second using the the setTimeout and pass conditions for each attempt
//5.call tryLogin 
async function tryLogin() {
    let attempt = 0;
    while (attempt < 3) {
        attempt++
        try {
            const result = await new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (attempt === 3) {
                        resolve("Successful login")
                    } else {
                        reject("login failed")
                    }
                }, 1000);
            });
            console.log(result);
            return
        } catch (error) {
            console.log(`Attempt ${attempt}: ${error}`)
        }

    }
    console.log("Login failed")
}

tryLogin()

//QUESTION THREE

//input no input
//output log numbers 5 to 0 and a message "Time's up"
//1.Create a function
//2.set a variable count to zero
//3.Decrement the count by one
//4.If the count becomes less than zero clear the interval using clearInterval()
//5.log "Time's up"
function countdown() {
    count = 5
    const interval = setInterval(() => {
        console.log(count)
        count--
        if (count < 0) {
            clearInterval(interval)
            console.log("TIme's up!")
        }
    }, 1000)
}

countdown()

//QUESTION FOUR

//Input = none
//Output = log messages at different stages
//1.Define an async function loadPage
//2.inside loadPage
//3. create a promise that resolves after one second and logs loading header
//4. create another promise that resolves after 2 seconds and logs loading content
//5. create another promise that resolves after 1 seconds and logs loading footer
//6. call load page

async function loadPage() {
    await new Promise((resolve) => {
        setTimeout(() => {
            console.log("Loading header...")
            resolve()
        }, 1000)
    })

    await new Promise((resolve) => {
        setTimeout(() => {
            console.log("Loading content...")
            resolve()
        }, 2000)
    })

    await new Promise((resolve) => {
        setTimeout(() => {
            console.log("Loading footer...")
            resolve()
        }, 1000)
    })

    console.log("Page fully loaded")
}
loadPage()

//QUESTION FIVE
//input: Stock symbols("AAPL,GOOG")
//output: price for symbol retrieved after delay
//1. define a function fetchPrice that returns a promise that resolves after two seconds
//2. define an async function fetchAllPrices()
//3. Await fetchPrice ("AAPL"), store result and log it.
//4. Await fetchPrice("GOOG"), then store it and log it.
//5. Call fetchPrice

function fetchPrice(symbol) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Price for ${symbol} retrieved`)
        }, 2000)
    })
}
async function fetchStocks() {
    const aaplPrice = await await fetchPrice("AAPL")
    console.log(aaplPrice)
    const googPrice = await fetchPrice("GOOG")
    console.log(googPrice)
}
fetchStocks()