function conversionEnLettre(saisie)
    {
        if (isNaN(saisie) || saisie < 0 || saisie > 999)
            {
                return 'Entrez un nombre entre 0 et 999';
            }
        
        var unites, unitesConverties, dizaines, dizainesConverties, centaines, centaineConverties, dizainesConvertiesEnLettres, unitesConvertiesEnLettres;
        
        unites = saisie % 10;
        dizaines = (saisie % 100 - unites)/10;
        centaines = (saisie % 1000 - saisie % 100)/100;
        
        unitesConvertiesEnLettres = ['', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf'];
        
        dizainesConvertiesEnLettres = ['', 'dix','vingt','trente','quarante','cinquante','soixante','soixante','quatre-vingt','quatre-vingt'];
        
        if(unites === 0)
            {
                return 'zéro'
            }
        else
            {
                unitesConverties = (unites === 1 && dizaines > 0 && dizaines !== 8 ? 'et-' : '') + unitesConvertiesEnLettres[unites];
                if(dizaines === 1 && unites > 0)
                    {
                        dizainesConverties = unitesConvertiesEnLettres[unites + 10];
                        unitesConverties = '';
                    }
                else if(dizaines === 7 || dizaines === 9)
                    {
                        dizainesConverties = dizainesConvertiesEnLettres[dizaines] + '-' + (dizaines === 7 && unites === 1 ? 'et-' : '' ) + unitesConvertiesEnLettres[unites + 10];
                        unitesConverties = '';
                    }
                else
                    {
                        dizainesConverties = dizainesConvertiesEnLettres[dizaines];
                    }
                dizainesConverties += (unites === 0 && dizaines === 8 ? 's' : '');
                
                centaineConverties = (centaines > 1 ? unitesConvertiesEnLettres[centaines] + '-' : '') + (centaines > 0 ? 'cent' : '') + (centaines > 1 && dizaines === 0 && unites === 0 ? 's' :'');       
                
                return centaineConverties + (centaineConverties && dizainesConverties ? '-' : '') + dizainesConverties + (centaineConverties && unitesConverties || dizainesConverties && unitesConverties ? '-' :'') + unitesConverties;
            }
    }

var saisie;
while (saisie = prompt("Entrez un nombre entre 0 et 999"))
    {
                alert("le nombre entrez est le " + conversionEnLettre(parseInt(saisie, 10)));
    }