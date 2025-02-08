async function sendMessage() {
        const userInput = document.getElementById("userInput").value;
        if (!userInput) return;
        
        const messagesDiv = document.getElementById("messages");
        messagesDiv.innerHTML += `<div><strong>You:</strong> ${userInput}</div>`;
        document.getElementById("userInput").value = "";
        
        const response = await fetch("https://api.example.com/chat", { 
            method: "POST", 
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: userInput })
        });
        const data = await response.json();
        
        messagesDiv.innerHTML += `<div><strong>Bot:</strong> ${data.reply}</div>`;
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }
    
    function clearMessages() {
        document.getElementById("messages").innerHTML = "";
    }
    
    