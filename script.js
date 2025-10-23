
 function getNumbers() {
            const num1 = parseFloat(document.getElementById("num1").value);
            const num2 = parseFloat(document.getElementById("num2").value);           

            return { num1, num2 };
        }
        
        function displayResult(value) {
            document.getElementById("result").value = value;
        }
        
        function addNumbers() {
            const nums = getNumbers();
            if (nums) displayResult(nums.num1 + nums.num2);
        }
        
        function subtractNumbers() {
            const nums = getNumbers();
            if (nums) displayResult(nums.num1 - nums.num2);
        }
        
        function multiplyNumbers() {
            const nums = getNumbers();
            if (nums) displayResult(nums.num1 * nums.num2);
        }
        
        function divideNumbers() {
            const nums = getNumbers();
            if (!nums) return;
            
           
            
            displayResult(nums.num1 / nums.num2);
        }