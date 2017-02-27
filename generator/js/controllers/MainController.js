app.controller('MainController', ['$scope', function($scope) {
  
	function getRandomInt(min, max) {
  		min = Math.ceil(min);
  		max = Math.floor(max);
  		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	$scope.letter = "";

	$scope.salutations1 = ["BELOVED", "DARLING", "DEAR", "DEAREST", "FANCIFUL", "HONEY"];
	$scope.salutations2 = ["CHICKPEA", "DEAR", "DUCK", "JEWEL", "LOVE","MOPPET", "SWEETHEART"];
	$scope.adjectives = ["AFFECTIONATE", "AMOROUS", "ANXIOUS", "AVID", "BEAUTIFUL", "BREATHLESS", "BURNING", "COVETOUS", "CRAVING", "CURIOUS", "EAGER", "FERVENT", "FONDEST", "LOVEABLE", "LOVESICK", "LOVING", "PASSIONATE", "PRECIOUS", "SEDUCTIVE", "SWEET", "SYMPATHETIC", "TENDER", "UNSATISFIED", "WINNING", "WISTFUL"];
	$scope.adverbs = ["AFFECTIONATELY","ARDENTLY","ANXIOUSLY","BEAUTIFULLY","BURNINGLY","COVETOUSLY","CURIOUSLY","EAGERLY","FERVENTLY","FONDLY","IMPATIENTLY","KEENLY","LOVINGLY","PASSIONATELY","SEDUCTIVELY","TENDERLY","WISTFULLY"];
	$scope.nouns = ["ADORATION","AFFECTION","AMBITION","APPETITE","ARDOUR","BEING","BURNING","CHARM","CRAVING","DESIRE","DEVOTION","EAGERNESS","ENCHANTMENT","ENTHUSIASM","FANCY","FELLOW FEELING","FERVOUR","FONDNESS","HEART","HUNGER","INFATUATION","LITTLE LIKING","LONGING","LOVE","LUST","PASSION","RAPTURE","SYMPATHY","THIRST","WISH","YEARNING"];
	$scope.verbs = ["ADORES","ATTRACTS","CLINGS TO","HOLDS DEAR","HOPES FOR","HUNGERS FOR","LIKES","LONGS FOR","LOVES","LUSTS AFTER","PANTS FOR","PINES FOR","SIGHS FOR","TEMPTS","THIRSTS FOR","TREASURES","YEARNS FOR","WOOS"];



	$scope.generate = function(){
		$scope.letter = "";

		//salutation
		$scope.letter += ("MY "+$scope.salutations1[getRandomInt(0,($scope.salutations1.length)-1)] +" "+$scope.salutations2[getRandomInt(0,($scope.salutations2.length)-1)]+",\n");

		//body

		for (var i=0; i<5; i++){

  			if (Math.random() > 0.5){
    			$scope.letter += ("YOU ARE MY " + $scope.adjectives[getRandomInt(0, $scope.adjectives.length-1)]+" "+ $scope.nouns[getRandomInt(0, $scope.nouns.length-1)]+". ");
  			}
  			else{
    			var adj1="";
    			if (Math.random() < 0.5)
      				adj1=$scope.adjectives[getRandomInt(0, $scope.adjectives.length-1)]; //optional
      
    			var subst1=$scope.nouns[getRandomInt(0, $scope.nouns.length-1)];
    
    			var adv1="";
    			if (Math.random() < 0.5)
      				adv1=$scope.adverbs[getRandomInt(0, $scope.adverbs.length-1)]; //optional
      
    			var vb1=$scope.verbs[getRandomInt(0, $scope.verbs.length-1)];
    
    			var adj2="";
    			if (Math.random() < 0.5)
      				adj2=$scope.adjectives[getRandomInt(0, $scope.adjectives.length-1)]; //optional 
      
    			var subst2=$scope.nouns[getRandomInt(0, $scope.nouns.length-1)];
    
    			$scope.letter += ("MY "+ adj1+" "+ subst1+" "+ adv1+" "+ vb1+ " YOUR " +adj2+" "+ subst2+". ");
  			}
		}    

		//signature 
		$scope.letter += ("\r\nYOURS "+$scope.adverbs[getRandomInt(0, $scope.adverbs.length-1)]+", ");
		$scope.letter += ("\r\nM.U.C.");

	}

	$scope.rename = function(idx){
		var currentName = "SALUTATIONS 1"; //$scope.groups[idx-1].title;

		var id = '#'+idx;
	  $(id).show();
      $(id).focus();
      $(id).val(currentName);

      $(id).keyup(function(event){
        var count = $(this).val().length;
        if (event.keyCode == 13) { $(this).focusout(); }
        if(count > 30){ $(this).css("border-color", "red"); } 
        else { $(this).css("border-color", "grey"); }
      });

      $(id).focusout(function(){
        $(id).hide();
      });
	}

}]);