$(document).ready( function(){
    let options = [('rock'), ('paper'), ('scissors')]
    let random = options[Math.floor(Math.random() * options.length)]
    let comp_choice = random 
     let rock = $('#rock').on('click', function() {
        var user_choice = this.id
        $('#player').text(user_choice)
        let random = options[Math.floor(Math.random() * options.length)]
        let comp_choice = random 
        $('#comp').text(comp_choice)
        let outcome = $('#winorlose').text(function() {
            
            if (comp_choice === 'paper') {
                $('#winorlose').text('You Lose!')
            }
            else if (comp_choice === 'scissors') {
                $('#winorlose').text('You Win!')
            }

            else {
                $('#winorlose').text('Tie Game.')
            }
        })
    }) 
    
    let paper = $('#paper').on('click', function() {
        var user_choice = this.id
        $('#player').text(user_choice)
        let random = options[Math.floor(Math.random() * options.length)]
        let comp_choice = random 
        $('#comp').text(comp_choice)
        let outcome = $('#winorlose').text(function() {
            
            if (comp_choice === 'paper') {
                $('#winorlose').text('Tie Game.')
            }
            else if (comp_choice === 'scissors') {
                $('#winorlose').text('You Lose!')
            }

            else {
                $('#winorlose').text('You Win!')
            }
        })
    }) 
    
    let scissors = $('#scissors').on('click', function() {
        var user_choice = this.id
        $('#player').text(user_choice)
        let random = options[Math.floor(Math.random() * options.length)]
        let comp_choice = random 
        $('#comp').text(comp_choice)
        let outcome = $('#winorlose').text(function() {
            
            if (comp_choice === 'paper') {
                $('#winorlose').text('You Win!')
            }
            else if (comp_choice === 'scissors') {
                $('#winorlose').text('Tie Game.')
            }

            else {
                $('#winorlose').text('You Lose!')
            }
        })
        
    }) 
    
    
   
    
    











});