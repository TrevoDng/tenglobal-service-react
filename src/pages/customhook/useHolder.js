import PageNotFound from "../pagenotfound/PageNotFound";
import HomeContent from "../HomeContent";
import SendProofCollectData from "../service/proofofpayment/SendProofCollectData";
import Statement from "../service/statement/Statement";
import History from "../service/history/History";
import CurrentBalance from "../service/CurrentBalance";
import AccountDetails from "../service/accountDetails/AccountDetails";

const useHolder =(number, textOut)=> {
   
   let browserWidth = window.innerWidth;
   let browserBoolean = false;
   
        if(browserWidth === 362) {
           browserBoolean = false;
        } else {
           browserBoolean = true;
        }
      
    switch(number) {
        case 0:
            textOut = browserBoolean ? <SendProofCollectData /> : <HomeContent /> ;
      break;
      case 1:
        textOut = <SendProofCollectData />;
      break;
      case 2:
        textOut = <Statement />;
      break;
      case 3:
        textOut = <History />;
      break;
      case 4:
        textOut = <CurrentBalance />;
          break;
      case 5:
        textOut = <AccountDetails />;
          break;
          
          default:
            textOut = <PageNotFound />;
          break; 
    }
   
    

    return [textOut];
}

export default useHolder;