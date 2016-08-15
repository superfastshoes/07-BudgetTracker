(function() {
    'use strict';

    angular
        .module('app')
        .controller('BudgetController', BudgetController);
    
    //BudgetController.$inject = ['calculations'];

    function BudgetController() {
        var vm = this;
        
        vm.title = 'BudgetController'; //look into this
        vm.addIncome = addIncome; 
        vm.addExpense = addExpense;
        
        //Declare the obeject that will hold the desc. and amount, and the -
        //array that will hold all the objects (so we can display them). Do this for expense as well
        vm.incomeList = [];
        vm.income = {};
        vm.expenseList = [];
        vm.expense ={};
        vm.totalIncome = 0;
        vm.totalExpense = 0;
        vm.amountLeft =0;;

        function addIncome(){
           
            if(vm.income.amount <= 0 || vm.income.amount === NaN){
                alert("Please type a valid number!");
                console.log("if works, income");
            }else{
                vm.incomeList.push(angular.copy(vm.income));

                //Add up the total amount of income after every input
                vm.totalIncome += vm.income.amount;
                vm.amountLeft += vm.income.amount;

                vm.income.name = "";
                vm.income.amount = ""; 
            }
        } 

        function addExpense(){
            
            if(vm.expense.amount <= 0 || vm.expense.amount === NaN){
                alert("Please type a valid number!");
                console.log("if works, expense");
            }else{
                vm.expenseList.push(angular.copy(vm.expense));

            //Add up the total amount of expense after every input
            vm.totalExpense += vm.expense.amount;
            vm.amountLeft -= vm.expense.amount;

            vm.expense.name = "";
            vm.expense.amount = "";
            }
        }
    }
})();
