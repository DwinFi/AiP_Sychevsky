        document.getElementById('styleButton').addEventListener('click', function() {
            const div = document.getElementById('styledDiv');
            div.style.width = '300px';
            div.style.height = '150px';
            div.style.border = '2px solid #4CAF50';});
document.getElementById('styleButton').addEventListener('click', function() {
            const div = document.getElementById('styledDiv');
            
            div.style.fontSize = '20px';
            div.style.borderTop = '3px solid blue';
            div.style.backgroundColor = 'lightyellow';
            div.style.padding = '15px';
        });

        document.getElementById('floatButton').addEventListener('click', function() {
            const listItems = document.querySelectorAll('#floatList li');
            
            listItems.forEach(item => {
                item.style.cssFloat = 'left';
                item.style.marginRight = '10px';
            });
        });

      
        const textElem = document.getElementById('textElem');
        
        document.getElementById('underlineBtn').addEventListener('click', function() {
            textElem.style.textDecoration = 'underline';
        });
        
        document.getElementById('boldBtn').addEventListener('click', function() {
            textElem.style.fontWeight = 'bold';
        });
        
        document.getElementById('redBtn').addEventListener('click', function() {
            textElem.style.color = 'red';
        });

   
        const toggleText = document.getElementById('toggleText');
        
        document.getElementById('toggleUnderlineBtn').addEventListener('click', function() {
            if (toggleText.style.textDecoration === 'underline') {
                toggleText.style.textDecoration = 'none';
            } else {
                toggleText.style.textDecoration = 'underline';
            }
        });
        
        document.getElementById('toggleBoldBtn').addEventListener('click', function() {
            if (toggleText.style.fontWeight === 'bold') {
                toggleText.style.fontWeight = 'normal';
            } else {
                toggleText.style.fontWeight = 'bold';
            }
        });
        
        document.getElementById('toggleRedBtn').addEventListener('click', function() {
            if (toggleText.style.color === 'red') {
                toggleText.style.color = 'black';
            } else {
                toggleText.style.color = 'red';
            }
        });