
'use strict';
var ht = function() {}
ht.code = 'ht';
ht.data = {

HELP_2a_Title               : 'How do I save/backup my wallet? ',

/* New Generics */
x_CancelReplaceTx           : 'Cancel or Replace Transaction',
x_CancelTx                  : 'Cancel Transaction',
x_PasswordDesc              : 'This password * encrypts * your private key. This does not act as a seed to generate your keys. **You will need this password + your private key to unlock your wallet.**',
x_ReadMore                  : 'Read More',
x_ReplaceTx                 : 'Replace Transaction',
x_TransHash                 : 'Transaction Hash',
x_TXFee                     : 'TX Fee',
x_TxHash                    : 'TX Hash',

/* Check TX Status */
NAV_CheckTxStatus           : 'Check TX Status',
NAV_TxStatus                : 'TX Status',
tx_Details                  : 'Transaction Details',
tx_Summary                  : 'During times of high volume (like during ICOs) transactions can be pending for hours, if not days. This tool aims to give you the ability to find and "cancel" / replace these TXs. ** This is not typically something you can do. It should not be relied upon & will only work when the TX Pools are full. [Please, read about this tool here.](https://myetherwallet.groovehq.com/knowledge_base/topics/how-can-i-check-on-the-status-of-my-transaction-can-i-cancel-override-overwrite-replace-or-do-anything-once-a-transaction-has-been-sent)**',
tx_notFound                 : 'Transaction Not Found',
tx_notFound_1               : 'This TX cannot be found in the TX Pool of the node you are connected to.',
tx_notFound_2               : 'If you just sent the transaction, please wait 15 seconds and press the "Check TX Status" button again. ',
tx_notFound_3               : 'It could still be in the TX Pool of a different node, waiting to be mined.',
tx_notFound_4               : 'Please use the dropdown in the top-right & select a different ETH node (e.g. `ETH (Etherscan.io)` or `ETH (Infura.io)` or `ETH (MyEtherWallet)`) and check again.',
tx_foundInPending           : 'Pending Transaction Found',
tx_foundInPending_1         : 'Your transaction was located in the TX Pool of the node you are connected to. ',
tx_foundInPending_2         : 'It is currently pending (waiting to be mined). ',
tx_foundInPending_3         : 'There is a chance you can "cancel" or replace this transaction. Unlock your wallet below.',
tx_FoundOnChain             : 'Transaction Found',
tx_FoundOnChain_1           : 'Your transaction was successfully mined and is on the blockchain.',
tx_FoundOnChain_2           : '**If you see a red `( ! )`, a `BAD INSTRUCTION` or `OUT OF GAS` error message**, it means that the transaction was not successfully *sent*. You cannot cancel or replace this transaction. Instead, send a new transaction. If you received an "Out of Gas" error, you should double the gas limit you specified originally.',
tx_FoundOnChain_3           : '**If you do not see any errors, your transaction was successfully sent.** Your ETH or Tokens are where you sent them. If you cannot see this ETH or Tokens credited in your other wallet / exchange account, and it has been 24+ hours since you sent, please [contact that service](https://myetherwallet.groovehq.com/knowledge_base/topics/i-have-a-question-but-its-not-about-myetherwallet-dot-com-what-do-i-do). Send them the *link* to your transaction and ask them, nicely, to look into your situation.',

/* Gen Wallet Updates */
GEN_Help_1                  : 'Use your',
GEN_Help_2                  : 'to access your account.',
GEN_Help_3                  : 'Your device * is * your wallet.',
GEN_Help_4                  : 'Guides & FAQ',
GEN_Help_5                  : 'How to Create a Wallet',
GEN_Help_6                  : 'Getting Started',
GEN_Help_7                  : 'Keep it safe · Make a backup · Don\'t share it with anyone · Don\'t lose it · It cannot be recovered if you lose it.',
GEN_Help_8                  : 'Not Downloading a File? ',
GEN_Help_9                  : 'Try using Google Chrome ',
GEN_Help_10                 : 'Right click & save file as. Filename: ',
GEN_Help_11                 : 'Don\'t open this file on your computer ',
GEN_Help_12                 : 'Use it to unlock your wallet via MyEtherWallet (or Mist, Geth, Parity and other wallet clients.) ',
GEN_Help_13                 : 'How to Back Up Your Keystore File ',
GEN_Help_14                 : 'What are these Different Formats? ',
GEN_Help_15                 : 'Preventing loss &amp; theft of your funds.',
GEN_Help_16                 : 'What are these Different Formats?',
GEN_Help_17                 : 'Why Should I?',
GEN_Help_18                 : 'To have a secondary backup.',
GEN_Help_19                 : 'In case you ever forget your password.',
GEN_Help_20                 : 'Cold Storage',
GET_ConfButton              : 'I understand. Continue.',
GEN_Label_5                 : 'Save Your `Private Key`. ',
GEN_Unlock                  : 'Unlock your wallet to see your address',
GAS_PRICE_Desc              : 'Gas Price is the amount you pay per unit of gas. `TX fee = gas price * gas limit` & is paid to miners for including your TX in a block. Higher the gas price = faster transaction, but more expensive. Default is `21 GWEI`.',
GAS_LIMIT_Desc              : 'Gas limit is the amount of gas to send with your TX. `TX fee` = gas price * gas limit & is paid to miners for including your TX in a block. Increasing this number will not get your TX mined faster. Sending ETH = `21000`. Sending Tokens = ~`200000`.',
NONCE_Desc                  : 'The nonce is the number of transactions sent from a given address. It ensures transactions are sent in order & not more than once.',
TXFEE_Desc                  : 'The TX Fee is paid to miners for including your TX in a block. Is is the `gas limit` * `gas price`. [You can convert GWEI -> ETH here](https://www.myetherwallet.com/helpers.html)',



/* Navigation*/
NAV_AddWallet               : 'METE YON BOUS ',  

NAV_BulkGenerate            : 'KREYE BOUS YO PA LO ',					
NAV_Contact                 : 'KONTAK ', 

NAV_Contracts               : 'KONTRA YO ',						
NAV_DeployContract          : 'OUVRI YON KONTRA ', 

NAV_ENS                     : 'ENS ',  							
NAV_GenerateWallet          : 'KREYE YON BOUS ', 

NAV_Help                    : 'EDE ',									
NAV_InteractContract        : 'PALE AVÈK KONTRA A ', 

NAV_Multisig                : 'PLIZYÈ SIY ',

NAV_MyWallets               : 'BOUS MWEN YO ',						
NAV_Offline                 : 'VOYE SAN SIYAL ',						
NAV_SendEther               : 'VOYE  ETHER ',						
NAV_SendTokens              : 'VOYE TOKENS YO ',					
NAV_SignMsg                 : 'SIYEN YON MESAJ ',						
NAV_Swap                    : 'CHANJE ',							
NAV_ViewWallet              : 'GADE ANNDAN YON BOUS ',														
NAV_YourWallets             : 'BOUS OU YO ', 


/* General */                       /*TOUT BAGAY*/
x_Access                    : 'ANTRE ', 								
x_AddessDesc                : 'LI RELE ANKÒ‘’NIMEWO KONT’’ OSWA ‘’ KLE PIBLIK’’ SE SA W’ KA VOYE BAY TOUT MOUN POU YO KA VOYE ETHER YO BA W’. PYON SA SE YON FASON SENP POU KONNEN ADRÈS OU ', 					
x_Address                   : 'ADRÈS OU ',							
x_Cancel                    : 'RETIRE ',							
x_CSV                       : 'PAJ  CSV SAN KÒD ',						
x_Download                  : 'PRAN L ',										
x_Json                      : 'PAJ JSON (SAN-KÒD) ',						
x_JsonDesc                  : 'SE YON LÒT VÈSYON SAN KÒD SOU FÒM JSON POU KLE SEKRÈ W’LA. SA VLE DI KE W’ PA BEZWEN KÒD SEKRÈ W’ POU W’ SÈVI AK LI MEN NENPÒT MOUN KI JWENN JSON AN KAPAB ANTRE NAN BOUS OU A AK ETHER W’ YO SAN KÒD SEKRÈ ',						
x_Keystore                  : 'PAJ KEYSTORE (UTC/ JSON DWE GEN KÒD) ',						
x_Keystore2                 : 'PAJ KEYSTORE (UTC / JSON) ',												
x_KeystoreDesc              : 'PAJ KEYSTORE SA SÈVI AK MENM  FÒM  MIST LA SÈVI A TOU, OU KAPAB PRAN L’ FASILMAN  PITA NAN LOGISYÈL YO. SE PAJ SA NOU MANDE W’ POU W’ PRAN AK KENBE L ',								
x_Ledger                    : 'ACHIV ',								
x_Mnemonic                  : 'LÈT FRAZ KACHE.',							
x_ParityPhrase              : 'FRAZ KI SANBLE ',									
x_Password                  : 'KÒD SEKRÈ ',							
x_Print                     : 'FÈ SÒTI YON BOUS SOU PAPYE	 ',										
x_PrintDesc                 : 'LÒT MWAYEN: PEZE SOU SÒTI PAJ LA  AK KENBE  BOUS PAPYE A TANKOU YON PDF, MENM  KE W’ PA GEN APARÈY POU SÒTI PAJ LA ! ',										
x_PrintShort                : 'SÒTI PAJ LA ',									
x_PrivKey                   : 'KLE SEKRÈ ( SAN KÒD) ',					
x_PrivKey2                  : 'KLE SEKRÈ ',						
x_PrivKeyDesc               : 'SE YON LÒT VÈSYON KLE SEKRÈ W’ LA  EKRI  SAN KÒD, SA VLE DI OKENN KÒD SEKRÈ PA NESESÈ POU SÈVI AK LI. SI NENPÒT MOUN TA VIN JWENN KLE SEKRÈ SA, L’AP KAPAB ANTRE NAN BOUS OU A SAN KÒD SEKRÈ. POU REZON SA, NOU MANDE LÒT FASON AN KI GEN KÒD POU KLE SEKRÈ W’ LA ',										
x_Save                      : 'KENBE L’ ',								
x_TXT                       : 'PAJ  TXT (SAN-KÒD) ',						
x_Wallet                    : 'BOUS ',

/* Header */                             /*TÈT*/
MEW_Warning_1               : 'TOUJOU BYEN VERIFYE L’URL ANVAN W’ ANTRE NAN BOUS OU A OSWA POU KREYE YON LÒT BOUS. ATANSYON AK FO SIT YO ',													
CX_Warning_1                : 'VEYE  POU W’ KA GEN** YON LÒT KOTE POU KENBE DEYÒ** AK TOUT BOUS W’AP JERE LA. GEN ANPIL BAGAY KI KAPAB FÈ W’ PÈDI DONE NIVO CHROME SA,  AK ANKÒ  RETIRE ENSTALASYON AN AK NAN ENSTALE NIVO A. NIVO SA SE YON FASON POU W’ ANTRE FASILMAN NAN BOUS OU YO, **SE PA** YON FASON POU W’ KENBE YO ',										
MEW_Tagline                 : 'BOUS d\'Ether Open Source JavaScript POU KLIYAN AN ',												
CX_Tagline                  : 'EKSTANSYON CHROME BOUS d\'Ether Open Source JavaScript POU KLIYAN  AN ',										
/* Footer */                     /* PYE PAJ LA */							
FOOTER_1                    : 'YON ZOUTI OPEN SOURCE NAN JAVASCRIPT LI FÈT POU KLIYAN KREYE BOUS  ETHEREUM YO EPI FÈ ANPIL TRANSFÈ ',						
FOOTER_1b                   : 'MOUN KI FÈ L’ LA SE	 ',					
FOOTER_2                    : 'DON YO APRESYE ANPIL ',  											
FOOTER_3                    : 'KREYASYON  BOUS POU KLIYAN AK ',									
FOOTER_4                    : 'AVÈTISMAN ',					

/* Sidebar */                /*BA LATERAL*/

sidebar_AccountInfo         : 'ENFÒMASYON YO SOU KONT LA ',

sidebar_AccountAddr         : 'ADRÈS KONT LA ',

sidebar_AccountBal          : 'KOBYEN  KÒB KONT LA GENYEN ',

sidebar_TokenBal            : 'KONBYEN TOKENS KONT LA GENYEN ',

sidebar_Equiv               : 'LÒT VALÈ KI MENM JAN ',

sidebar_TransHistory        : 'LIS TRANSFÈ YO ',

sidebar_donation            : 'MYETHERWALLET  SE YON SÈVIS GRATIS EPI YON OPEN SOURCE KI RESPEKTE VI SEKRÈ W’ AK SEKIRITE W’. PLIS N’AP JWENN ANPIL DON, PLIS N’AP PASE ANPIL TAN POU N’ DEVLOPE LÒT FONKSYON YO, N’AP TANDE SA W’ MANDE  AK BA W’ SA W’ BEZWEN . NOU SE KÈK MOUN K’AP ESEYE CHANJE MOND LA. EDE NOU! ',

sidebar_donate              : 'FÈ YON DON ',

sidebar_thanks              : 'MÈSI !!!  ',


/* Decrypt Panel */                       /* PANO DECHIFRE */							
decrypt_Access              : 'KÒMAN W’ VLE ANTRE NAN BOUS OU A ? ',						
decrypt_Title               : 'CHWAZI FÒM OU VLE METE KLE SEKRÈ W’ LA ',							
decrypt_Select              : 'CHWAZI YON BOUS ',
  
/* Add Wallet */             /* METE YON BOUS */					
ADD_Label_1                 : 'KISA W’ VLE FÈ ?  ',						
ADD_Radio_1                 : 'KREYE YON LÒT BOUS ',												
ADD_Radio_2                 : 'CHWAZI PAJ BOUS OU A (KEYSTORE/JSON) ',					
ADD_Radio_2_alt             : 'CHWAZI PAJ BOUS OU A ',

ADD_Radio_3                 : 'KOLE/PRAN KLE SEKRÈ W’ LA ',										
ADD_Radio_4                 : 'METE YON KONT ',						
ADD_Radio_5                 : 'KOLE/ANTRE LÈT POU FRAZ KACHE W’ LA ',									
ADD_Radio_5_Path            : 'CHWAZI HD POU LÒT WOUT ',												
ADD_Radio_5_PathCustom      : 'KLIYAN ', 						
ADD_Label_2                 : 'BAY KONT OU A YON NON ',			 	
ADD_Label_3                 : 'PAJ OU A GEN KÒD,  TANPRI METE KÒD SEKRÈ W’ ',												
ADD_Label_4                 : 'METE YON KONT KI KA PARÈT ',
								
ADD_Warning_1               : 'OU KAPAB METE NENPÒT KI KONT POU W’ FÈ L’ PARÈT NAN TI BWAT « BOUS YO » SAN W’ PA PRAN YON KLE SEKRÈ. SA **PA** VLE DI KE W’AP KA ANTRE NAN BOUS SA, NI POU W’ TA FÈ TRANSFÈ ETHER YO SÒTI NAN BOUS SA ',						
ADD_Label_5                 : 'ANTRE  ADRÈS LA ',						
ADD_Label_6                 : 'OUVRI BOUS OU A ',						
ADD_Label_6_short           : 'OUVRI ',								
ADD_Label_7                 : 'METE YON KONT ',						
/* Generate Wallets */                  /* KREYE BOUS YO*/
GEN_desc                    : 'SI W’ VLE KREYE PLIZYÈ LÒT BOUS, OU KAPAB FÈL LA ',

GEN_Label_1                 : 'METE YON GWO KÒD SEKRÈ (POU PI PITI 9 KARAKTÈ ',											
GEN_Placeholder_1           : 'PA BLIYE KENBE  SA ',											
GEN_SuccessMsg              : 'SIKSÈ ! BOUS OU A KREYE ',										
GEN_Label_2                 : 'KENBE PAJ KEYSTORE W ‘ LA  OSWA KLE SEKRÈ W ‘ LA. PA BLIYE KÒD SEKRÈ W’ LA KI ANLÈ A ',				
GEN_Label_3                 : 'KENBE BOUS OU A ',					
GEN_Label_4                 : 'OPSYON : FÈ SÒTI BOUS OU A SOU PAPYE OSWA SERE version QR code ',   


/* Bulk Generate Wallets */          /* KREYE BOUS YO PA PAKE*/
BULK_Label_1                : 'KANTITE BOUS KI KA KREYE ',											
BULK_Label_2                : 'KREYE BOUS YO ',							
BULK_SuccessMsg             : 'SIKSÈ ! BOUS OU YO KREYE ',									
/* Sending Ether and Tokens */   /*VOYE ETHER AK TOKENS*/
SEND_addr                   : 'ADRÈS KOTE W’AP VOYE L’ ',											
SEND_amount                 : 'KANTITE W’AP VOYE A ',									
SEND_amount_short           : 'KANTITE ',															
SEND_custom                 : 'TOKENS ESPESYAL ',
					
SEND_gas                    : 'GAZ ',								
SEND_TransferTotal          : 'VOYE TOUT KANTITE A ;// RENOUVLLE L’ POU PI PI VIT ',											
SEND_generate               : 'KREYE TRANFÈ A ',						
SEND_raw                    : 'TRASFÈ SAN ANALIZ ',						
SEND_signed                 : 'TRANSFÈ SIYEN ',							
SEND_trans                  : 'VOYE TRANSFÈ A ',						
SENDModal_Title             : 'ATANSYON!  ',										
/* full sentence reads "You are about to send "10 ETH" to address "0x1234". Are you sure you want to do this? " */                                                                                                  /*PLEN FRAZ POU LI ‘’ OU PRAL VOYE L’ ‘’10ETH’’ NAN ADRÈS ‘’0X1234’’ ESKE W’ KONFYAN OU VLE FÈ SA ?’’*/									
SENDModal_Content_1         : 'OU PRAL VOYE L ',											
SENDModal_Content_2         : 'NAN ADRÈS ',															
SENDModal_Content_3         : 'ESKE W KONFYAN ?  ',					
SENDModal_Content_4         : 'NÒT :SI JWENN AK YON ERÈ, OU TA GEN POU METE ETHER YO NAN KONT OU A POU W’ KOUVRI KÒB GAZ POU VOYE TOKENS YO. GAZ LA PEYE AK ETHER ',						
SENDModal_No                : 'NON, MWEN VLE SÒTI LA ',												
SENDModal_Yes               : 'WI, MWEN KONFYAN ! FÈ TRANSFÈ A ',


/* Tokens */                         /*TOKENS YO*/
TOKEN_Addr                  : 'ADRÈS ',							
TOKEN_Symbol                : 'SENBÒL TOKEN NAN ',					
TOKEN_Dec                   : 'KONTE AN DIS (10) ',						
TOKEN_show                  : 'MONTRE TOKENS YO ',					
TOKEN_hide                  : 'KACHE TOKENS YO ',


/* Send Transaction */                 /*VOYE TRANSFÈ A*/
TRANS_desc                  : 'SI W’ VLE VOYE TOKENS YO, ALE PITO NAN PAJ « VOYE TOKENS » ',										
TRANS_warning               : 'METE FONKSYON ‘’ETH’’ YO SÈLMAN  AK ‘’ETC SÈLMAN’’ OU FÈ W’ PASE NAN YON KONTRA. KÈK NAN SÈVIS SA YO KONN GEN PWOBLÈM  AK TRANSFÈ SA YO. POU W’  KONN PLIS ',		
TRANS_advanced              : '+AVANSE : METE GAZ ',								
TRANS_data                  : 'DONE ',													
TRANS_sendInfo              : 'YON TRANSFÈ NÒMAL SÈVI  AK 21000 GAZ KI KOUTE 0.000441  ETH. PRI GAZ LA 0.000000021 ETH  KE NOU TE CHWAZI A ON TI JAN PI WO KE  PI PITI A ASIRE W’ POU W’ YON KONFIMASYON RAPID. NOU PA PRAN FRÈ POU TRANSFÈ A.  ',					
TRANS_gas                   : 'LIMIT AN GAZ ;// CHANJE AN ENG POU LIMIT GAZ LA ',					
/* Send Transaction Modals */  /* MÒD TRANSFÈ YO*/					
TRANSModal_Title            : 'TRANSFÈ ‘’ETH YO SÈLMAN’’ AK ‘’ETC YO SÈLMAN’’',
TRANSModal_Content_0        : 'NÒT SOU TRANSFÈ YO AK LÒT SÈVIS YO ',							
TRANSModal_Content_1        : '**ETH ( TRANSFÈ NÒMAL) :** KREYE YON TRANSFÈ SAN DIFIKILTE SÒTI DIRÈKTEMAN NAN YON ADRÈS ALE NAN YON LÒT. GAZ LA SAN DIFIKILTE SE 21000. LI PWOBAB KE TOUT TRANSFÈ  D’ETH VOYE NAN FASON SA AP EGZEKITE ANKÒ SOU CHÈNN ETC A	',								
TRANSModal_Content_2        : '**ETH**. ,** SÈLMAN ETH: ** VOYE L’ NAN [KONTRA KI KONT EGZEKISYON  ANKÒ AN POU TIMON RAPP ( VB KI MANDE SA)] )](https://blog.ethereum.org/2016/07/26/onward_from_the_hard_fork/) POU W ‘ KA  PA VOYE KE SOU CHÈNN LAN ',						
TRANSModal_Content_3        : '**ETC**. , ** SÈLMAN ETC** VOYE L’ NAN[ KONTRA KI KONT EGZEKISYON ANKÒ AN POU TIMON RAPP (VB KI MANDE SA) ](https://blog.ethereum.org/2016/07/26/onward_from_the_hard_fork/)', 

TRANSModal_Content_4        : '**COINBASE& SHAPESHHIFT : ** VOYE PA TRANSFÈ NÒMAL SÈLMAN. SI W’ SÈVI AK KONTRA VOYE YO SOU YON SÈL CHENN. OU DWE JWENN EKIP KI LA POU SIPÒTE W’ LA POU YO KA METE YO MENM KANTITE KÒB LA OSWA REMÈT OU LI. [OU KAPAB ESEYE TOU AK ZOUTI ‘’SPLIT’’ NAN SHAPESHIFT.]( https://split.shapeshift.io/) ',

TRANSModal_Content_5        : '**KRAKEN & POLONIEX : ** PA GEN PWOBLÈM. SÈVI AK SA W’ VLE ',

TRANSModal_Yes              : 'WEYY !!!, MWEN KONPRANN ',

TRANSModal_Yes              : 'WEYY !!!, MWEN KONPRAN ',

TRANSModal_No               : 'AY,  M’ PA FIN KONPRANN DITOU EDE M ’ TANPRI ',

/* Offline Transaction */   /*TRANSFÈ SAN SIYAL*/
OFFLINE_Title               : 'KREYE EPI VOYE YON TRANFÈ SAN SIYAL ',						
OFFLINE_Desc                : 'KREYASYON YON TRANSFÈ SAN SIYAL FÈT NAN TWA ETAP. ETAP 1 AK 3 YO FÈT NAN YON KOMPITÈ KI GEN SIYAL AK ETAP 2 A NAN YON KOMPITÈ KI PA KONEKTE AK REZO A. SA PÈMÈT OU IZOLE NÈT  KLE SEKRÈ W’ LA POU TOUT MACHIN KI KONEKTE AK INTÈNÈT ',									
OFFLLINE_Step1_Title        : 'ETAP 1 : KREYASYON ENFÒMASYON AN (KOMPITÈ AK SIYAL) ',									
OFFLINE_Step1_Button        : 'KREYE ENFÒMASYON AN ',												
OFFLINE_Step1_Label_1       : 'ADRÈS KOTE L’ SÒTI ',								
OFFLINE_Step1_Label_2       : 'NÒT : SE NAN ADRÈS KOTE L’ SÒTI A, SE PA ADRÈS KOTE L’AP RIVE A.NONCE LA KREYE AK KONT MOUN K’AP VOYE A. SI NOU SÈVI AK YON MACHIN KI PA KONEKTE AK REZO A, ADRÈS SA AP ADRÈS  KONT LA TANKOU _COLDSTORAGE ',							
OFFLINE_Step2_Title         : 'ETAP 2: KREYASYON TRANSFÈ A(KOMPITÈ SAN SIYAL) ',										
OFFLINE_Step2_Label_1       : 'ADRÈS KOTE L’ PRALE ',					
OFFLINE_Step2_Label_2       : 'VALÈ/KANTITE W’AP VOYE ',											
OFFLINE_Step2_Label_3       : 'PRI GAZ LA ',						
OFFLINE_Step2_Label_3b      : 'KANTITE SA TE PARÈT NAN ETAP 1 AN LÈ KOMPITÈ W’ LA KI TE GEN SIYAL ',									
OFFLINE_Step2_Label_4       : 'LIMIT GAZ ',						
OFFLINE_Step2_Label_4b      : '21000 SE LIMIT NÒMAL LA. NA KA W’AP VOYE POU  KONTRA YO OSWA AVÈK DONE ANPLIS YO, VALÈ SA KAPAB DIFERAN. TOUT GAZ KI PA SÈVI YO  Y’AP VOYE YO BA W’ ',			
OFFLINE_Step2_Label_5       : 'NONCE ',							
OFFLINE_Step2_Label_5b      : 'SA TE PARÈT NAN PREMYE ETAP NAN KOMPITÈ W’ LA  KI GEN SIYAL.',									
OFFLINE_Step2_Label_6       : 'DONE YO	',							
OFFLINE_Step2_Label_6b      : 'SA SE YON ZÒN OPSYON, DONE YO TOUJOU SÈVI  LÈ Y’AP FÈ TRANSFÈ POU KONTRA YO ',								
OFFLINE_Step2_Label_7       : 'ANTRE/ CHWAZI KLE SEKRÈ W’ LA / JSON ',					
OFFLINE_Step3_Title         : 'ETAP 3 : VOYE/ FÈ WÈ TRANSFÈ A ( KOMPITÈ AK SIYAL) ',												
OFFLINE_Step3_Label_1       : 'KOPYE TRANSFÈ A LA SIYEN NAN ETAP 2 A AK PEZE SOU BOUTON  ”VOYE TRANSFÈ A ',				

/* Sign Message */                    /*SIYEN YON MESAJ*/

MSG_message                 : 'MESAJ ',										
MSG_date                    : 'DAT ',						 							
MSG_signature               : 'SIYATI.',								
MSG_verify                  : 'VERIFYE YON MESAJ ',							
MSG_info1                   : 'METE DAT JOU A POU SIYATI A PA SÈVI ANKÒ NAN YON LÒT MOMAN ',	
							
MSG_info2                   : 'METE TI NON W’ NAN KOTE W’ KONN SÈVI AK LI A POU YON LÒT MOUN PA SÈVI AK LI ',		
			
MSG_info3                   : 'METE YON SÈL BON REZON POU MESAJ LA  POU L’ PA SÈVI ANKÒ POU YON LÒT  REZON ',			

/* My Wallet */                               /*BOUS MWEN*/

MYWAL_Nick                  : 'NON BOUS LA ',												
MYWAL_Address               : 'ADRÈS BOUS LA ',														
MYWAL_Bal                   : 'KANTITE  KÒB ',											
MYWAL_Edit                  : 'KORIJE ',										
MYWAL_View                  : 'GADE ',															
MYWAL_Remove                : 'EFASE ',												
MYWAL_RemoveWal             : 'EFASE BOUS LA ',											
MYWAL_WatchOnly             : 'KONT OU YO KI PARÈT SELMAN ',									
MYWAL_Viewing               : 'FÈ PARÈT BOUS YO ',		
MYWAL_Hide                  : 'KACHE ENFÒMASYON YO SOU BOUS LA ',							
MYWAL_Edit_2                : 'KORIJE BOUS LA ',		
MYWAL_Name                  : 'NON BOUS LA ',					
MYWAL_Content_1             : 'ANTANSYON ! OU PRAL EFASE BOUS OU A ',				
MYWAL_Content_2             : 'BYEN VEYE  KE W’ **KENBE KLE SEKRÈ W’ LA/PAJ JSON AK KÒD SEKRÈ A**KI ASOSYE AK BOUS LA ANVAN W’ EFASE L’ ',												
MYWAL_Content_3             : 'SI W’ VLE SÈVI AK BOUS SA  AVÈK MyEtherWallet CX NAN LÒT JOU YO, OU DWE METE L’ ANKÒ  SÈVI AK KLE SEKRÈ A /PAJ JSON AK KÒD SEKRÈ A ',							
/* View Wallet Details */            /*GADE DETAY YO KI NAN BOUS MWEN AN.*/										
VIEWWALLET_Subtitle         : 'SA PÈMÈT OU POU W’ PRAN PLIZYÈ VÈZSYON KLE SEKRÈ  YO EPI AK SÒTI BOUS OU A ANKÒ SOU PAPYE. OU DWE FÈ L’ POU [ PRAN KONT OU A NAN GETH/MIST] (http://ethereum.stackexchange.com/questions/465/how-to-import-a-plain-private-key-into-geth/). SI W’ VLE  WÈ VALÈ KÒB OU A, NOU MANDE W’ POU SÈVI AK YON EKSPLORATÈ POU BLOCKCHAIN TANKOU[etherscan.io](http://etherscan.io/).',   						
VIEWWALLET_Subtitle_Short   : 'SA PÈMÈT OU POU W’ PRAN PLIZYÈ VÈZSYON KLE SEKRÈ  YO EPI POU SÒTI BOUS OU A ANKÒ SOU PAPYE ',									
VIEWWALLET_SuccessMsg       : 'SIKSÈ ! MEN DETAY YO POU BOUS OU A ',

						
/* Mnemonic */              /* FRAZ LÈT KACHE*/							
MNEM_1                      : 'CHWAZI ADRÈS OU VLE PALE A ',							
MNEM_2                      : 'SÈL FRAZ LÈT KACHE HD W’ YO KAPAB ANTRE NAN KÈK ADRÈS BOUS OU YO. CHWAZI ADRÈS OU VLE PALE A KOUNYE A ',														
MNEM_more                   : 'LÒT ADRÈS ',								
MNEM_prev                   : 'ADRÈS ANVAN YO ',	
		

/* Hardware wallets */      /*MATERYÈL BOUS YO*/

ADD_Ledger_1                : 'KONEKTE ACHIV OU A ',												
ADD_Ledger_2                : 'OUVRI APLIKASYON ETHEREUM ( OSWA YON APLIKASYON KONTRA) ',								
ADD_Ledger_2                : 'OUVRI APLIKASYON ETHEREUM  LAN ( OSWA YON APLIKASYON KONTRA) ',									
ADD_Ledger_3                : 'VERIFYE KE OPSYON BROWSER SUPPORT LA AKTIVE NAN SETTINGS ',											
ADD_Ledger_scan             : 'KONEKTE NAN ACHIV LA ',											
ADD_Ledger_4                : 'SI OPSYON BROWSER SUPPORT PA NAN SETTINGS NAN VERIFYE KE W’ GENYEN l [Firmware >1.2](https://www.ledgerwallet.com/apps/manager) ',					
ADD_Ledger_0a               : 'OUVRI MYETHERWALLET ANKÒ NAN YON KONEKSYON KI GEN SEKIRITE (SSL) ',										
ADD_Ledger_0b               : 'OUVRI MYETHERWALLET ANKÒ AK [Chrome](https://www.google.com/chrome/browser/desktop/) OSWA [Opera](https://www.opera.com/) ',								
x_Trezor                    : 'TREZÒ ',							
ADD_Trezor_scan             : 'KONEKTE NAN TREZÒ A ',						
ADD_Trezor_select           : 'SA SE YON _SEMANS_ TREZÒ ', 										


/* Chrome Extension */  /* CHROME EKSTANSYON */						
CX_error_1                  : 'OU PA GEN BOUS KI ANREJISTRE. PEZE SOU[‘’METE YON BOUS’’] (/cx-wallet.html#add-wallet) POU METE YOUN !.	',					
CX_quicksend                : 'VOYE RAPID ; // SI JAN L’ TRADWI A PA NAN GOU W’ JIS SÈVI AK ”SEND” ',												

/* Misc *//* Node Switcher */                 /*PLIZYÈ*/ /* NE YOUN AL NAN LÒT*/

NODE_Title                  : 'ENSTALE NE SEKRÈ W’ LA ',															
NODE_Title                  : 'ENSTALE NE SEKRÈ W’ LA ',													
NODE_Subtitle               : 'POU W’ KAPAB KONENTE AK YON NE LOKAL ',									
NODE_Warning                : 'NE W’ LA DWE AN HTTPS POU W’ KONEKTE AVÈK MYETHERWALLET.COM. OU KAPAB [PRAN REPO MYWALLET LA EPI OUVRI  L’ LOKALMAN ](https://github.com/kvhnuke/etherwallet/releases/latest) POU W’ KONEKTE A KÈK LÒT NE , OSWA POU W’ GENYEN SÈTIFIKA SSL GRATIS AVÈK[LetsEncrypt](https://letsencrypt.org/).',						
NODE_Name                   : 'NON NE A ',										
NODE_Port                   : 'PÒ NE A ',									
NODE_CTA                    : 'ANREJISTRE EPI SÈVI AK YON NE SEKRÈ ',	
					


/* Contracts */                           /*KONTRA YO*/								
CONTRACT_Title              : 'ADRÈS KONTRA A ',					
CONTRACT_Title_2            : 'CHWAZI YON KONTRA KI LA DEJA ',									
CONTRACT_Json               : 'RELASYON ABI/ JSON ',
										
CONTRACT_Interact_Title     : 'LI/EKRI KONTRA ',								 	
CONTRACT_Interact_CTA       : 'CHWAZI YON FONKSYON ',											
CONTRACT_ByteCode           : 'Bytecode ',				
CONTRACT_Read               : 'LI ',								
CONTRACT_Write              : 'EKRI ',
											
DEP_generate                : 'KREYE SEKANS KÒD LA ',	
	
DEP_generated               : 'SEKANS KÒD KREYE ',

DEP_signtx                  : 'SIYEN TRANSFÈ A ',

DEP_interface               : 'RELASYON KREYE ',


/* Swap / Exchange */                /*CHANJE*/							
SWAP_rates                  : 'VALÈ LI YE KOUNYE A” ',			
SWAP_init_1                 : 'M VLE CHANJE	',						
SWAP_init_2                 : 'M’ VLE CHANJE X ETH POU X BTC ',
SWAP_init_CTA               : 'ANN KONTINYE',											
SWAP_information            : 'ENFÒMASYON W’ YO',					
SWAP_send_amt               : 'KANTITE POU VOYE ',						
SWAP_rec_amt                : 'KANTITE POU RESEVWA ', 						
SWAP_your_rate              : 'VALÈ LI YE ',													
SWAP_rec_add                : 'ADRÈS POU RESEVWA ',					
SWAP_start_CTA              : 'KÒMANSE CHANJE ',					
SWAP_ref_num                : 'NIMEWO POU YO JWENN OU ',																					
SWAP_time                   : 'TAN KI RETE POU VOYE L ',												
SWAP_progress_1             : 'LÒD PASE ',							
SWAP_progress_2             : '// Waiting for your BTC... //N’AP TANN BTC W’ YO ',										
SWAP_progress_3             : ', // ETH Received! ETH RESEVWA ! ',			
SWAP_progress_4             : 'VOYE {{REZILTA LÒD. KREYASYON.MONNEN}} YO ',							
SWAP_progress_5             : 'LÒD AKONPLI ',						
SWAP_order_CTA              : 'TANPRI VOYE 1 ETH ',		
SWAP_unlock                 : 'OUVRI BOUS OU A POU W’ VOYE ETH YO OSWA TOKENS YO SÒTI DIRÈKTEMAN NAN SA ',		


/* Error Messages */       /*MESAJ PA BON	*/								
ERROR_0                     : 'ANTRE YON KANTITE KI VALAB ',																	
ERROR_1                     : 'KÒD SEKRÈ W’ LA DWE GEN POU PI PITI 9 KARAKTÈ. BYEN VEYE KE SE YON GWO KÒD SEKRÈ ',						
ERROR_2                     : 'DEZOLE ! SÈVIS NOU AN PA PÈMÈT NOU JERE  JAN DE PAJ BOUS SA ',										
ERROR_3                     : 'SA SE PA YON PAJ BOUS ',  																				
ERROR_4                     : 'VALÈ SA PA LA, TANPRI SÈVI AK YOUN NANN LÒT VALÈ SA YO	 ',										
ERROR_5                     : 'ANTRE YON BON ADRÈS ',												
ERROR_6                     : 'ANTRE YON BON KÒD SEKRÈ ',										
ERROR_7                     : 'TANPRI ANTRE YON VALÈ KI BON  (Must be integer. Try 0-18.) ', // 7 (LI DWE ANTYE. Try 0-18.) ', // 7																
ERROR_8                     : 'TANPRI ANTRE YON BON LIMIT GAZ . (Must be integer. Try 21000-4000000.) ', // 8  (LI DWE ANTYE. Try 21000-4000000.) ', // 8    														
ERROR_9                     : 'TANPRI ANTRE YON VALÈ DONE YO KI VALAB. (Must be hex.) ', //9 (LI DWE hex.) ', //9								
ERROR_10                    : 'TANPRI ANTRE YON VALÈ GAZ KI VALAB(Must be integer. Try 20 GWEI / 20000000000 WEI.) (LI DWE ANTYE. Try 20 GWEI / 20000000000 WEI.) ',																				
ERROR_11                    : '(Must be integer.) ', // 11 TANPRI ANTRE YON NONCE VALAB. . (Must be integer.) ', // 11  	. (LI DWE ANTYE.) ', // 11 ', 				
ERROR_12                    : 'SIYATI TRANSFÈ A PA VALAB ',				
ERROR_13                    : 'NON BOUS SA LA DEJA ',																					
ERROR_14                    : 'BOUS SA PA LA ',											
ERROR_15                    : 'TA SANBLE POKO GEN OKENN PWOPOZISYON  KI LA DEJA AVÈK MOUN SA OSWA GEN YON ERÈ PANDAN KONSILTASYON PWOPOZISYON AN ',										
ERROR_16                    : 'GEN YON BOUS KI GEN ADRÈ SA DEJA. TANPRI AL GADE  LIS PAJ BOUS OU A ',											
ERROR_17                    : 'IFONDS LA YO PA SIFI. KONT KOTE W’AP ESEYE VOYE TRANSFÈ A PA GEN ASE PWOVISYON. FÒK OU TA GENYEN POU PI PITI 0,01 ETHER SOU KONT OU A POU W’ KA KOUVRI KÒB GAZ YO. METE ETHER YO EPI ESEYE ANKÒ ',										
ERROR_18                    : 'TOUT GAZ LA TE SÈVI PANDAN TRANSFÈ A. SA VLE DI  KE W’ TE DEJA VOTE POU PWOPOZISYON SA DEJA OSWA KE MOMAN DEBA A FINI ',												
ERROR_19                    : 'TANPRI ANTRE YON SENBÒL KI VALAB ',  															
ERROR_20                    : 'SE PA YON TOKEN ERC-20 VALAB.  SI Y’AP PRAN  LÒT TOKEN YO, RETIRE SA EPI ESEYE ANKÒ ',					
ERROR_21                    : 'LI PA POSIB POU N’ KONN KONBYEN GAZ LA YE. PA GEN ASE PWOVISYON SOU KONT SA, OSWA ADRÈS KONTRA KOTE Y ‘AP RESEVWA L’ LA TE VOYE TOUNEN YON ERÈ. OU KAPAB METE GAZ LA OU MENM EPI KÒMANSE ANKÒ. MESAJ  ERÈ  A PANDAN W’AP VOYE L’ LA KAPAB GEN ANPIL ENFÒMASYON ',							
ERROR_22                    : 'TANPRI ANTRE YON NON NE KI VALAB ',															
ERROR_23                    : 'TANPRI ANTRE YON URL KI VALAB ; SI W’ AN HTTPS URL OUA DWE AN HTTPS ',								
ERROR_24                    : 'TANPRI ANTRE YON PÒ KI VALAB ',											
ERROR_25                    : 'TANPRI ANTRE YON ID DE CHÈNN VALAB ',								
ERROR_26                    : 'TANPRI ANTRE YON ABI KI VALAB ',																	
ERROR_27                    : 'KANTITE PI PITI : 0.01. KANTITE PI GWO ',														
ERROR_28                    : '**OU BEZWEN PAJ KEYSTORE W’ LA EPI KÒD SEKRÈ A ** ( OSWA KLE SEKRÈ W’ LA) POU KAPAB ANTRE NAN BOUS SA NAN LÒT JOU YO. TANPRI PRAN L’EPI  POU W’ SERE L’ YON KOTE DEYÒ ! PA GEN OKENN LÒT MWAYEN POU W’ JWENN ANKÒ YON BOUS SI W’ PA ANREJISTRE L’. TANPRI LI PAJ SA [PAJ POU EDE](https://www.myetherwallet.com/#help) POU DETAY YO ',																	
ERROR_29                    : 'TANPRI ANTRE YON BON NON AK  KÒD SEKRÈ L’ ',									
ERROR_30                    : 'TANPRI ANTRE YON BON NON ENS ',													
ERROR_31                    : 'FRAZ SEKRÈ A PA VALAB ',								
ERROR_32                    : 'LI ENPOSIB POU W’ KONEKTE AK NE A. RAFRECHI PAJ LA, OSWA ESEYE YON LÒT NE (upper right corner), GADE NAN PARAMÈT FIREWALL OU YO. SI W’ AN MÒD NE, GADE NAN PARAMÈT YO // 32 ',																				
ERROR_33                    : 'BOUS W’AP ESEYE OUVRI A LI PA GEN MENNM ADRÈS AK MET LI;33 ',																	
ERROR_34                    : 'NON W’AP TANTE POU W’ KA WÈ A PA GEN MENM ADRÈS AK NON OU TE ANTRE A // 34 ',     


SUCCESS_1                   : 'ADRÈS LA VALAB ',

SUCCESS_2                   : 'BOUS DEKÒDE AVÈK SIKSÈ ',

SUCCESS_3                   : 'TX ALE NAN BLOCKCHAIN NAN. PEZE BOUTON AN POU W’ KA WÈ TRANSFÈ W’ LA & VERIFYE SI SE POU OU AK SI LI PA MANKE GAZ OSWA KÈK ERÈ NAN KONTRA EKZEKISYON L’YO ',																
SUCCESS_4                   : 'BOUS LA METE AVÈK SIKSÈ ',										
SUCCESS_5                   : 'PAJ CHWAZI ',							
SUCCESS_6                   : 'OU BYEN KONEKTE ', 	 				
SUCCESS_7                   : 'SIYATI MESAJ LA VERIFYE ',


WARN_Send_Link              : 'OU RIVE LA GRAS AK YON LYEN KI PLEN ADRÈS LA, KANTITE A, GAZ LA OSWA ESPAS DONE  W’ YO. OU KAPAB KORIJE TOUT ENFÒMASYON YO  ANVAN W’ VOYE YO . OUVRI BOUS OU A POU W ‘ KÒMANSE ',

/* Geth Error Messages */       /* GETH MESAJ ERÈ YO*/						
GETH_InvalidSender          : 'MOUN K’AP VOYE L’ PA BON ',					
GETH_Nonce                  : 'NONCE TWÒ BA ',												
GETH_Cheap                  : 'PRI GAZ LA TWO BA POU L’ AKSEPTE ',									
GETH_Balance                : 'KANTITE A PA SIFI ',								
GETH_NonExistentAccount     : 'KONT SA PA EGZISTE OSWA KANTITE KI NAN KONT LA TWÒ BA ',													
GETH_InsufficientFunds      : 'KÒB SA YO PA SIFI POU GAZ *PRI+VALÈ ',								
GETH_IntrinsicGas           : 'VALÈ GAZ LA TWO BA ',						
GETH_GasLimit               : 'LIMIT GAZ LA DEPASE ',						
GETH_NegativeValue          : 'VALÈ A PA BON ',

/* Parity Error Messages */        /* ERÈ MESAJ SANBLE YO*/						
PARITY_AlreadyImported      : 'GEN YON TRANSFÈ KI GEN MENM HASH SA KI SÒTI LA DEJA ',											
PARITY_Old                  : 'NONCE TRANSFÈ A TWÒ BA. ESEYE METE SOU NONCE LAN ANKÒ	 ',										
PARITY_TooCheapToReplace    : 'FRÈ TRANSFÈ YO TWÒ BA. GEN YON LÒT TRANSFÈ KI GEN MENM NONCE LA K’AP TANN. ESEYE METE SOU FRÈ A OSWA METE SOU NONCE LAN ',															
PARITY_LimitReached         : 'GEN TWÒP TRANSFÈ K’AP TANN. TRANSFÈ W’ LA PA FÈT POU REZON SA. ESYE METE SOU FRÈ A ',															
PARITY_InsufficientGasPrice : 'FRÈ TRANSFÈ YO TWÒ BA. YO PA SATISFÈ MENM POU PITI NE A (MINIMUM :{},REÇU :{}). ESEYE METE SOU FRÈ YO ',				
PARITY_InsufficientBalance  : 'IFONDS YO PA SIFI. KONT KOTE W’AP ESEYE VOYE  TANSFÈ A PA GEN ASE KÒB. YO MANDE A: {} , REÇU : {} ',													
PARITY_GasLimitExceeded     : 'KÒB TRANSFÈ A DEPASE LIMIT GAZ  KOUNYE A. LIMIT :{}. ESEYE RETIRE NAN GAZ OU JWENN NAN	 ',									

PARITY_InvalidGasLimit      : "Supplied gas is beyond limit.",

/* Tranlsation Info */      : /*ENFÒMASYON SOU TRADIKSYON AN*/			
translate_version           : '0.1 ',								
Translator_Desc             : ' YON MÈSI POU TRADIKTÈ N’YO ', 				
TranslatorName_1            :'[Nogo10](https://www.myetherwallet.com/?gaslimit=21000&to= 0x152e77CC3Dd8d86471ebEa8e93B9924A41e7055a&value=1.0#VOYE-TRANSFÈ A) · ',											
TranslatorAddr_1            : ' 0x152e77CC3Dd8d86471ebEa8e93B9924A41e7055a ',\	
TranslatorName_2            :  NON TRADIKTÈ_2  'JJCROISIERE · ',			
TranslatorAddr_2            : TRADIKTÈ ADDR_2'',						
/* Translator 2                  : TRADIKTÈ 2'',	*/ 					
TranslatorName_3            : NON TRADIKTÈ A  'JJCROISIERE ',

TranslatorAddr_3            : ' TRADIKTÈ ADDDR_3'',

/* Translator 3             :  TRADIKTÈ  3  : METE KÒMANTÈ YO LA.*/

TranslatorName_4            : NON TRADIKTÈ_4 '',

TranslatorAddr_4            :  TRADIKTÈADDR_4'',

/* Translator 4             :TRADIKTÈ 4  : METE KÒMANTÈ W’ YO LA.*/

TranslatorName_5            :  NON TRADIKTÈ_5'',

TranslatorAddr_5            : TRADIKTÈADDR_5 '',

/* Translator 5             : TRADIKTÈ 5   : METE KOMANTÈ W’ YO LA.*/

/* ÈD – PA GEN ANYEN KI POU TRADWI APRE PWEN SA. SI W ‘ SANTI OU KA EDE PLIS , EDE NOU.*/

HELP_Warning                : 'SI W’ TE KREYE YON BOUS- OSWA-  OU TE PRAN REPO A ANVAN ** 31 DESANM 2015**, TANPRI VERIFYE BOUS OU YO /  AL PRAN YON LÒT VÈSYON REPO A ANKÒ. PEZE LA POU W’ KA JWENN PLIS DETAY. ',

HELP_Desc                   : 'MANKE YON BAGAY ? SI W’ GEN LÒT KESYON ? [PALE AK NOU]( mailto:support@myetherwallet.com), N’AP REPONN OU EPI N’AP TOU METE PAJ LA A JOU POU L’ KA ITIL PI PLIS AK TOUT LÒT MOUN YO NAN LÒT JOU YO ! ',

HELP_Remind_Title           : 'KÈK NAN SA POU SONJE YO: ',

HELP_Remind_Desc_1          : 'ETHEREUM, MYETHERWALLET.COM & MYETHER WALLET CX, EPI KÈK NAN BIBLIYOTÈK YO  JAVASCRIPT KI ANBA KE NOU KONN SÈVI AK YO KÒMANSE AP DEVLOPE.** NOU PASE YO GWO TÈS EPI ANPIL DIZÈNN AK MILYE BOUS SA YO TE KREYE AVÈK ANPIL SIKSÈ TOUT KOTE NAN MOND LA. KA TOUJOU GEN YON TI KRAS POSIBLITE KE YON BAGAY KA PASE KI KA PÈMÈT OU PÈDI ETH OU YO. PA ENVESTI PLIS PLIS KE SA W ‘ KA PRÈ POU W’ PÈDI EPI PRIDANS. NAN KA AKSIDAN, N’AP DEZOLE MEN ** NOU P’AP RESPONSAB POU ETHER  SA W’ PÈDI A**',

HELP_Remind_Desc_2          : 'MYETHERWALLET.COM & MYETHERWALLET CX YO PA "BOUS WEB". OU PA KREYE YON KONT , OU PA BA NOU ETHER W’ YO TANKOU DEPO. OKENN DONE PA SÒTI NAN KOMPITÈ W’ OSWA NAVIGATÈ W’ LA. N’AP FASILITE W’ POU W KREYASYON AN. KIJAN POU KENBE  L’ EPI ANTRE NAN ENFÒMASYON W’ YO AK KONTAK OU MENM AK BLOCKCHAIN NAN. ',  

HELP_Remind_Desc_3          : 'SI W’ PA BYEN KENBE KLE SEKRÈ W’ LA EPI KÒD SEKRÈ W ‘, PA GEN OKENN LÒT MWAYEN OU KA ANTRE NAN BOUS OU A ANKÒ AK JWENN PWOVIZYON  KI LADAN L’ YO. SERE YO NAN PLIZYÈ KOTE EPI SE PA SELMAN SOU KOMPITÈ W LA! ',

HELP_0_Title                : '0) MWEN FENK VINI. KISA POU M’ FÈ? ',

HELP_0_Desc_1               : 'MYETHERWALLET BA W’ MWAYEN POU W’ KREYE PLIZYÈ LÒT BOUS POU W’ KACHE ETHER OU A OU MENM EPI SE PA SOU YON ** CHANJ** PWOSESIS SA KA FÈT SOU YON KOMPITÈ, SE PA SOU SÈVÈ NOU YO. LÈ W’AP KREYE YON LÒT BOUS ** SE RESPONSABLITE W’ POU W’ BYEN KENBE L’ AN SEKIRITE**',

HELP_0_Desc_2               : 'KREYE YON NOUVO BOUS. ',

HELP_0_Desc_3               : 'ANREJISTRE BOUS LA. ',

HELP_0_Desc_4               : 'VERIFYE POU W’ WÈ SI W’ GEN AKSÈ POU W’ ANTRE NAN LÒT BOUS SA AK  SI W’ BYEN SOVE TOUT BON ENFÒMASYON NESESÈ YO. ',

HELP_0_Desc_5               : 'VOYE ETHER A NAN LÒT BOUS SA. ',

HELP_1_Title                : '1) KÒMAN POU M’ KREYE  YON LÒT BOUS ? ',  

HELP_1_Desc_1               : 'ALE NAN PAJ "KREYASYON YON BOUS. ',

HELP_1_Desc_2               : 'ALE NAN PAJ "METE YON BOUS"  EPI CHWAZI  "KREYE YON LÒT BOUS"

HELP_1_Desc_3               : 'ANTRE YON GWO KÒD SEKRÈ. SI W’ PANSE W’ KA BLIYE L’, SERE L’ YON BON KOTE. OU PRAL GEN BEZWEN KÒD SEKRÈ SA POU W’ VOYE TRANSFÈ YO. ',

HELP_1_Desc_4               : 'PEZE SOU "KREYE". ',

HELP_1_Desc_5               : 'POU KOUNYE A BOUS OU A KREYE. ',

HELP_2a_Title               : '2a) KÒMAN POU M’ ANREJISTRE BOUS MWEN AN ? ',

HELP_2a_Desc_1              : 'OU DWE TOUJOU ANREJISTRE BOUS OU A NAN PLIZYÈ KOTE, TANKOU SOU YON USB OSWA YON FÈY PAPYE. ',

HELP_2a_Desc_2              : 'ANREJISTRE ADRÈS LA, OU KAPAB GENYEN L’ POU OU SÈL OSWA PATAJE L’ AVÈK LÒT MOUN, NAN FASON TOUT MOUN KAPAB VOYE ETHER BA W’. ',

HELP_2a_Desc_3              : 'ANREJISTRE KLE SEKRÈ W’ NAN PLIZYÈ FASON. PA PATAJE L’ AK OKENN MOUN. KLE SEKRÈ LA NESESÈ POU W’ ANTRE  NAN ETHER W’ LA. POU W’ VOYE L !’ GEN 3 DIFERAN KLE SEKRÈ  KI EGZISTE: ',  

HELP_2a_Desc_4              : 'METE ADRÈS OU A, NAN BAGAY YO OU METE KLE SEKRÈ W’ LA AK VÈSYON PDF POU BOUS PAPYE W’ LA NAN YON DOSYE. KENBE L’ SOU KOMPITÈW’ LA EPI YON KLE USB. ',

HELP_2a_Desc_5              : 'FÈ SÒTI BOUS OU A SI W’ GEN APARÈY LA. SI SE PA SA, EKRI KLE SEKRÈ W’ AK ADRÈS OU A SOU YON FÈY PAPYE. KACHE L’ YON BON KOTE, APRE SOU KOMPITÈ W’ LA EPI  KLE USB LA. ',

HELP_2a_Desc_6              : 'METE NAN LESPRI W’ POU W’ PWOTEJE TÈT OU POU W’ PA PÈDI KLE A EPI KÒD SEKRÈ A NAN KA OU TA PÈDI DISKEDI W’ LA, KLE W’ LA OSWA FÈY PAPYE A. OU DWE TOU PWOTEJE W’ KONT TOUT GWO KATASTWÒF KI KA FÈ ENPAK SOU YON ZÒN GEOGRAFIK (TANKOU YON GWO DIFE OSWA YON INONDASYON) . ',

HELP_2b_Title               : '2b) KÒMAN POU M’ JERE AK TOUT SEKIRITE YON MAGAZEN SAN SIYAL AVÈK MYETHERWALLET? ',

HELP_2b_Desc_1              : 'ALE NAN GITHUB NOU AN : [https://github.com/kvhnuke/etherwallet/releases/latest](https://github.com/kvhnuke/etherwallet/releases/latest). ',  

HELP_2b_Desc_2              : 'PEZE SOU DIST-VX.X.X.X.ZIP` ',

HELP_2b_Desc_3              : 'METE ZIP LASOU YON KOMPITÈ SAN SIYAL. ',

HELP_2b_Desc_4              : 'DEZIPE L’ PEZE 2 FWA SOU INDEX.HTML`. '

HELP_2b_Desc_5              : ' YON BOUS AVÈK YON GWO KÒD SEKRÈ. ',

HELP_2b_Desc_6              : 'KENBE  ADRÈS LA. KENBE BAGAY YO OU METE KLE SEKRÈ A. KENBE KÒD SEKRÈ A SI W’ PA TA VLE  TOUJOU AP SONJE L’. ',

HELP_2b_Desc_7              : 'BYEN SERE PAPYE YO EPI/ OSWA KLE USB  SA YO NAN YON KOTE BYEN LWEN. ', 

HELP_2b_Desc_8              : 'ALE NAN PAJ  "FÈ PARÈT YON BOUS" EPI ANTRE  KLE SEKRÈ W’ LA AK KÒD SEKRÈ W’ LA POU W’ GEN ASIRANS KE YO VALAB EPI POU KA ANTRE NAN BOUS OU A. VERIFYE KE ADRÈS OU TE EKRI A SE MENM BAGAY LA. ',

HELP_3_Title                : '3) KÒMAN POU M’ VERIFYE KE M’ ANTRE NAN LÒT BOUS MWEN AN ? ',

HELP_3_Desc_1               : '** ANVAN W’ VOYE ETHER NAN BOUS OU A** OU DWE GEN ASIRANS KE W’ ANTRE. ',

HELP_3_Desc_2               : 'NAVIGE  AL NAN PAJ "FÈ PARÈT YON BOUS". ',

HELP_3_Desc_3               : 'NAVIGE AL NAN PAJ  " FÈ PARÈT YON BOUS"  MYETHERWALLET.COM LA. ',

HELP_3_Desc_4               : 'CHWAZI PAJ BOUS OU A- OSWA - KLE SEKRÈ W’ LA EPI OUVRI BOUS OU A. ',

HELP_3_Desc_5               : 'SI BOUS OU A GEN KÒD , YON ZÒN KI GEN EKRITI AP PARÈT POU KONT LI. ANTRE KÒD SEKRÈ A. ', 

HELP_3_Desc_6               : 'PEZE BOUTON "OUVRI BOUS OU A". ',

HELP_3_Desc_7               : 'ENFÒMASYON SOU BOUS OU YO DWE PARÈT . JWENN ADRÈS  KONT OU A KOTE YON PYON KI GEN FÒM YON SÈK EPI KI GEN KOULÈ. SA REPREZANTE ADRÈS OU A JAN W’ WÈ L’ LA. ASIRE W’ KE ADRÈS SA SE SA W’ TE KENBE NAN DOKIMAN KI EKRI W’ LA EPI LI NAN BOUS PAPYE W’ LA TOU. ',

HELP_3_Desc_8               : 'SI W’ VLE GEN YON GWO KANTITTE ETHER, NOU MANDE W’ POU W’ KÒMANSE VOYE YON TI KANTITE KÒB KI AP SÒTI NAN BOUS OU FENK GENYEN AN ANAVN W’ METE YON GWO KANTITE KÒB. VOYE 0,001 ETHER AL NAN BOUS OU FENK GENYEN AN, ANTRE LADAN L’ EPI VOYE 0,001 ETHER SA YO AL NAN YON LÒT ADRÈS, EPI VERIFYE  KE TOUT BAGAY AP BYEN FONKSYONE SAN PWOBLÈM. ',  

HELP_4_Title                : '4) KÒMAN POU M’ KA VOYE ETHER A SÒTI NAN BOUS SA AL NAN YON LÒT? ',

HELP_4_Desc_1               : 'SI W’ VLE FÈ YON  GWO KANTITE  TRANSFÈ ETHER, OU DWE AVAN TOUT BAGAY ESEYE VOYE YON TI KANTITE KÒB AL NAN BOUS OU A POU GEN KONFYANS KE TOUT BAGAY AP BYEN FONKSYONE JAN SA DWE YE. ',

HELP_4_Desc_2               : 'NAVIGE AL NAN PAJ  "VOYE ETHER YO EPI TOKENS YO" . ',

HELP_4_Desc_3               : 'CHWAZI PAJ BOUS OU A- OSWA-  KLE SEKRÈ W’ LA EPI OUVRI BOUS OU A. ',

HELP_4_Desc_4               : 'SI BOUS OU A GEN KÒD, YON ZÒN GEN EKRITI AP PARÈT  POU KONT LI. ANTRE KÒD SEKRÈ W LA. ',

HELP_4_Desc_5               : 'PEZE SOU BOUTON "OUVRI BOUS OU A". ',

HELP_4_Desc_6               : 'ANTRE ADRÈS MOUN K’AP RESEVWA L’ LA NAN ESPAS "ADRÈS KOTE L PRALE A". ',

HELP_4_Desc_7               : 'ANTRE KANTITE W’ VLE  VOYE A. OU KAPAB ANKÒ PEZE SOU "VOYE TOUT KANTITE A" SI W’ VLE VOYE TOUT NÈT. ',

HELP_4_Desc_9               : 'PEZE SOU  "KREYE TRANSFÈ A". ',

HELP_4_Desc_10              : 'KÈK ESPAS ANPLIS AP PARÈT. NAVIGATÈ W’ LA AP KREYE TRANSFÈ A. ',

HELP_4_Desc_11              : 'PEZE SOU BOUTON BLE A "VOYE TRANSFÈ A" KI ANBA A.

HELP_4_Desc_12              : 'YON FENÈT POP-UP AP PARÈT. VERIFYE KE KANTITE A EPI ADRÈS LA KOTE W’AP VOYE L’ LA YO BON. APRE PEZE SOU "WI, MWEN KONFYAN ! FÈ TRANSFÈ A. ',

HELP_4_Desc_13              : 'TRANSFÈ A PRAL FÈT. MOUN LI AN PRAL PARÈT. OU KAPAB PEZE SOU MOUN NAN POU W’ WÈ L’ SOU BLOCKCHAIN NAN. ',

HELP_4CX_Title              : '4) KÒMAN POU M’ KA VOYE RTHER AVÈK MYETHERWALLET CX ? ',

HELP_4CX_Desc_1             : 'ANVAN, OU DWE METE YON BOUS. SA FÈT, OU GENYEN DE FASON : FONKSYON  "VOYE RAPID"  NAN PYON AN NAN EXTENSION CHROME OSWA PAJ "VOYE ETHER YO EPI  TOKENS YO". ',

HELP_4CX_Desc_2             : 'VOYE RAPID: ',

HELP_4CX_Desc_3             : 'PEZE SOU PYON  EXTENSION CHROME. ',

HELP_4CX_Desc_4             : 'PEZE SOU BOUTON "VOYE RAPID". ',

HELP_4CX_Desc_5             : 'CHWAZI BOUS KOTE OU VLE VOYE A. ',

HELP_4CX_Desc_6             : 'ANTRE ADRÈS LA OU VLE VOYE A NAN ESPAS  "ADRÈS KOTE L’ PRALE A :" . ',

HELP_4CX_Desc_7             : 'ANTRE KANTITE OU VLE VOYE A. OU KAPAB ANKÒ PEZE SOU "VOYE TOUT KANTITE A" SI W’ VLE VOYE TOUT SA L’ GENYEN AN. ',

HELP_4CX_Desc_8             : 'PEZE SOU "VOYE TRANSFÈ A". ',

HELP_4CX_Desc_9             : 'VERIFYE KE ADRÈS LA EPI KANTITE W’AP VOYE A BON. ',

HELP_4CX_Desc_10            : 'ANTRE KÒD SEKRÈ BOUS SA. ',

HELP_4CX_Desc_11            : 'PEZE SOU "VOYE TRANSFÈ A." ',

HELP_4CX_Desc_12            : 'AVÈK PAJ "VOYE ETHER YO EPI AK TOKENS YO" ',

HELP_5_Title                : '5) KÒMAN M KA OUVRI MYETHERWALLET.COM SAN SIYAL/LOKAL ? ',

HELP_5_Desc_1               : 'OU KAPAB OUVRI MYETHERWALLET.COM SOU KOMPITÈ W’ LA SAN W’ PA PASE NAN SÈVÈ GITHUB YO. OU KAPAB KREYE YON BOUS SAN OU PA BEZWEN GEN SIYAL EPI VOYE TRANSFÈ YO SÒTI NAN PAJ SA "TRANSFÈ SAN SIYAL". ',

HELP_5_Desc_7               : 'TOUT MYETHERWALLET.COM LA VIRE SOU KOMPITÈ W’ LA KOUNYE A. ',

HELP_5_Desc_8               : 'NAN KA OU PA TA ABITYE  AK SA. OU DWE KONSÈVE TOUT DOSYE A POU W’ VIRE SIT WEB LA EPI  PA SÈLMAN INDEX.HTML. PA MANYEN ANYEN, PA DEPLASE ANYEN NAN DOSYE A. SI W’ KENBE YON REPO NAN MAGAZEN MYETHERWALLET POU LÒT JOU YO, NOU MANDE W’ PA METE ZIP LA SÈLMAN NAN MAGAZENN AN POU W’ KA ASIRE W’ KE DOSYE A PA GEN TACH. ',

HELP_5_Desc_9               : 'NOU TOUJOU AP AMELYORE MYETHERWALLET.COM, NOU MANDE W’ POU W’ TOUJOU METE A JOU VÈSYON W’ TE KENBE A. ',

HELP_5CX_Title              : '5) KÒMAN POU M’ ENSTALE EXTENSION AN NAN REPO A KE  NAN CHROME STORE A ? ',

HELP_5CX_Desc_2             : 'PEZE SOU CHROME-EXTENSION-VX.X.X.X.ZIP` ',

HELP_5CX_Desc_3             : 'AL NAN GOOGLE CHROME EPI CHÈCHE PARAMÈT YO ( NAN MENI KI ANWO ADWAT LA). ',

HELP_5CX_Desc_4             : 'PEZE SOU "EXTENSIONS" A GÒCH. ',

HELP_5CX_Desc_5             : 'PEZE SOU KAZYE  "MÒD POU DEVLOPE" ANLÈ NAN PAJ SA. ',

HELP_5CX_Desc_6             : 'PEZE SOU BOUTON "CHAJE EXTENSION AN PA METE L ANNDAN…". ',

HELP_5CX_Desc_7             : 'NAVIGE AL NAN DOSYE  KE W’ TE PRAN AN EPI DEZIPE L’ ANVAN. PEZE SOU "CHWAZI". ',

HELP_5CX_Desc_8             : 'EXTENSION AN DWE PARÈT KOUNYE A NAN EXTENSION W’ YO EPI NAN BA EXTENSION YO POU CHROME. ',

HELP_7_Title                : '7)KÒMAN M’ KAPAB VOYE TOKENS YO EPI METE TOKENS SPESYAL YO ? ',

HELP_7_Desc_0               : 'SE YON BON MWAYEN POU W’ AL GADE NAN TOKENS YO EPI JWENN JAN YO KONTE AN 10 LA NAN YON TOKEN. ',

HELP_7_Desc_1               : 'NAVIGE AL NAN PAJ "VOYE TOKENS". ',

HELP_7_Desc_2               : 'OUVRI BOUS OU A. ',

HELP_7_Desc_3               : 'ANTRE ADRÈS  KOTE OU VLE VOYE L’ LA NAN ESPAS "ADRÈS KOTE L’ PRALE A". ',

HELP_7_Desc_4               : 'ANTRE KANTITE OU VLE VOYE A. ',

HELP_7_Desc_5               : 'CHWAZI TOKEN OU VLE VOYE A. ',

HELP_7_Desc_6               : 'SI SA A PA NAN LIS LA: ',

HELP_7_Desc_7               : 'PEZE SOU "SPESYAL ". ',

HELP_7_Desc_8               : 'ANTRE  ADRÈS LA, NON AN EPI TOKEN YO KI KONTE AN 10 YO. ENFÒMASYON SA YO. SE MOUN KI FÈ TOKEN NAN KI BAY YO EPI YO ANKÒ NESESÈ LE W’AP FÈ "ADD A WATCH TOKEN" NAN MIST. ',

HELP_7_Desc_9               : 'PEZE SOU "SOVE ". ',

HELP_7_Desc_10              : 'OU KAPAB VOYE TOKENS SA YO KOUNYE A AK WÈ  TOU LAJAN  SOU KONT  OU A NAN ZÒN KI SOU KOTE A. ',

HELP_7_Desc_11              : 'PEZE SOU  "KREYE TRANSFÈ A". ',

HELP_7_Desc_12              : 'KÈK NAN ESPAS ANPLIS YO AP PARÈT : NAVIGATÈ W’ LA AP KREYE TRANSFÈ A. ',

HELP_7_Desc_13              : 'PEZE SOU BOUTON BLE A "VOYE TRANSFÈ A" KI ANBA A. ',

HELP_7_Desc_14              : 'YON FENÈT POP-UP AP PARÈT. VERIFYE KE KANTITE A EPI ADRÈS KOTE L’ PRALE A YO BON APRÈ PEZE SOU BOUTON "WI, MWEN KONFYAN ! FÈ TRANSFÈ A." ',

HELP_7_Desc_15              : 'TRANSFÈ A FÈT EPI MOUN TRANSFÈ A PARÈT. OU KAPAB PEZE SOU LI POU W’ KA WÈ L’ NAN BLOCKCHAIN NAN. ',

HELP_8_Title                : '8) SA K’AP PASE SI SIT OU A TONBE ? ',

HELP_8_Desc_1               : 'MYETHERWALLET SE PA YON BOUS SOU WÈB LA. OU PA GEN KONEKSYON EPI ANYEN PA JANM ANREJISTRE SOU SÈVÈ NOU YO. SE JIS YON LÒT FAS KI PÈMET OU PALE AK BLOCKCHAIN LA. ',

HELP_8_Desc_2               : 'SI MYETHERWALLET.COM TONBE, OU DWE JWENN YON LÒT MWAYEN ( TANKOU GETH OSWA ETHEREUM WALLET / MIST) POU FÈ MENM BAGAY LA. MEN OU PA GEN POU "REPRAN " ETHER W’ LA KI NAN MY ETHERWALLET PASKE L’ PA NAN MY ETHERWALLET. LI LAKAY OU. NAN BOUS SA W’ TE KREYE SOU SIT NOU AN. ',

HELP_8_Desc_3               : 'OU KAPAB PRAN KLE SEKRÈ W’ LA FASIL KOUNYE A SAN KÒD EPI PAJ OU YO (KÒD) SOU FÒM GETH/MIST, DIREKTEMAN NAN GETH/ETHEREUM WALLET / MIST. GADE KESYON #12 LA KI ANBA A. ',

HELP_8_Desc_4               : 'ANPLIS, FASON POU N’ TA KITE MYETHERWALLET TONBE LI PRE ZEWO.SA KOUTE NOU PRESKE ANYEN POU N’ KENBE L’ TANKOU JAN NOU PA KENBE OKENN ENFÒMASYON. SI DOMÈNN SA TA VIN PÈDI. LOJISYÈL LA AP TOUJOU DISPONIB POU PIBLIK LA SOU [https://github.com/kvhnuke/etherwallet](https://github.com/kvhnuke/etherwallet/tree/gh-pages). OU KAPAB PRAN ZIP LA  EPI SÈVI AK LI LOKAL. ',

HELP_8CX_Title              : '8) SA KI AP PASE SI MYETHERWALLET CX DISPARÈT ? ',

HELP_8CX_Desc_1             : 'ANVAN, KOMPITÈ W’ LA TE KENBE TOUT DONE YO EPI SE PAT SOU SÈVÈ NOU YO. SA KA PARÈT ETONAN MEN, LÈ W’AP GADE SOU EXTENSION CHROME LA, SA W’ WÈ A *PA LA* SOU SÈVÈ NOU YO. KOMPITTÈ W’ LA KENBE TOUT. ',

HELP_8CX_Desc_2             : 'SA VLE DI, LI **ENPÒTAN ANPIL**  POU W’ TA KENBE TOUT DONE POU TOUT BOUS OU KREYE YO AK MYETHERWALLET CX. NAN FASON SA NENPÒT  SA KI TA RIVE MYETHERWALLET CX OSWA KOMPITÈ W’ LA, W’AP TOUJOU KONSÈVE TOUT ENFÒMASYON NESESÈ YO POU W’ KAANTRE NAN ETHER W’ YO. GADE #2 A POU W’ KENBE BOUS OU YO. ',

HELP_8CX_Desc_3             : 'SI, POU NENPÒT REZON, MYETHERWALLET CX TA DISPARÈT NAN CHROME STORE A, OU KAPAB JWENN SOUS LA SOU GTITHUB EPI PRAN L’.  GADE #5 KI ANLÈ A. ',

HELP_9_Title                : '9)?  PAJ "VOYE  RTHER YO AK TOKENS YO" ESKE L’ PA GEN SIYAL ? 

HELP_9_Desc_1               : 'NON. LI BEZWEN INTÈNÈT POU L’ JWENN PRI GAZ KOUNYE A. NONCE KONT OU A EPI POU W’ VOYE TRANSFÈ A ( SA VLE DI "VOYE"). LI VOYE SÈLMAN TRANSFÈ KI SIYEN AN. KLE SEKRÈ W’ LA  RETE AN SEKIRITE LAKAY OU. NOU BAY ANKÒ KOUNYE AYON PAJ "TRANSFÈ SAN SIYAL" POU N’ PÈMET OU TOUJOU KENBE KLE SEKRÈ W’ LA SOU YON MACHIN SAN SIYAL. ',

HELP_10_Title               : '10) KÒMAN POU M’ FÈ YON TRANSFÈ SAN SIYAL ? ',

HELP_10_Desc_1              : 'ALE NAN PAJ "TRANSÈ SAN SIYAL" AVÈK KOMPITÈ W’ LA AK SIYAL. ',

HELP_10_Desc_2              : 'ANTRE "ADRÈS KOTE L’ SÒTI A". ATANSYON, SE ADRÈS *KOTE L’ SÒTI A* SE PA ADRÈS *KOTE L’ PRALE A*. SA PRAL KREYE NONCE LA EPI PRI GAZ LA. ',

HELP_10_Desc_3              : 'ALE SOU KOMPITÈ W’ LA KI PA GEN SIYAL. ANTRE "ADRÈS KOTE L’ PRALE A" EPI "KANTITE A" OU VLE VOYE A. ',

HELP_10_Desc_4              : 'ANTRE "PRI GAZ LA" JAN W’ TE WÈ L PARÈT SOU KOMPITÈ A KI GEN SIYAL NAN PREMYE ETAP LA. ',

HELP_10_Desc_5              : 'ANTRE "NONCE LA"  JAN W’ TE WÈL PARÈT SOU KOMPITÈ A KI GEN SIYAL NAN PREMYE ETAP LA. ',

HELP_10_Desc_6              : ' " LIMIT GAZ LA"  GEN YON VALÈ 21000 NÒMAL. SA KOUVRI FRÈ YON TRANSFÈ NÒMAL. SI WA’ VOYE POU YON KONTRA OSWA SI W’AP PRAN DONE ANPLIS YO AVÈK TRANSFÈ W’ LA OU DWE METE SOU LIMIT GAZ LA. GAZ KI PA SÈVI A AP RETOUNEN VIN JWENN OU. ',

HELP_10_Desc_7              : 'SI W’ VLE L’, ANTRE DONE YO, NAN KA SA, OU DWE METE PLIS KE LIMIT 21000 NÒMAL LA ? TOUT DONE YO SOU FÒM  16 NIMEWO.  ',  

HELP_10_Desc_8              : 'CHWA PAJ BOUS OU A OSWA KLE SEKRÈ W’ LA AK OUVRI BOUS OU A. ',

HELP_10_Desc_9              : 'PEZE BOUTON "KREYE TRANSFÈ SIYEN AN". ',

HELP_10_Desc_10             : 'ESPAS DONE YO  ANBA BOUTON SA PLEN AVÈK TRANSFÈ SIYEN W’ LA. KOPYE L’ EPI TOUNEN ANKÒ AVÈK LI  SOU KOMPITÈ W’ LA KI GEN SIYAL. ',

HELP_10_Desc_11             : 'SOU KOMPITÈ  AK SIYAL OU A,  KOLE TRANSFÈ KI SIYEN AN NAN ESPAS EKRI A EPI PEZE SOU "VOYE ETHER". SA A AP VOYE TRANSFÈ W’ LA. ',

HELP_12_Title               : '12) KÒMAN POU M’ PRAN YON BOUS KI KREYE AK MYETHERWALLET NAN GETH/ ETHEREUM WALLET/ MIST ? ',

HELP_12_Desc_1              : 'AVÈK YON PAJ GETH/MIST JSON NAN MYETHERWALLET V2+….',

HELP_12_Desc_2              : 'ALE NAN PAJ  "GADE YON BOUS". ',

HELP_12_Desc_3              : 'OUVRI BOUS OU A AVÈK KLE SEKRÈ W’ LA ** KI GEN KÒD** OSWA PAJ JSON W’ LA. ',

HELP_12_Desc_4              : 'ALE NAN PAJ "BOUS MWEN YO". ',

HELP_12_Desc_5              : 'CHWAZI BOUS OU VLE PRAN NAN MIST, PEZE SOU PYON  "VIEW " A ANTRE KÒD SEKRÈ W’ EPI ANTRE  NAN BOUS OU A. ',

HELP_12_Desc_6              : 'ALE NA SEKSYON "PRAN PAJ JSON DOKIMAN- FÒM GETH/MIST( KI GEN KÒD) ‘’PEZE SOU BOUTON "PRAN L’" KI ANBA . OU GEN KOUNYE A PAJ  *KEYSTORE* W’ LA. ',

HELP_12_Desc_7              : 'OUVRI APLIKASYON  ETHEREUM WALLET. ',

HELP_12_Desc_8              : 'NA BA MENI AN, ALE NAN "ACCOUNTS"->’’BACKUP -> "ACCOUNTS" ',

HELP_12_Desc_9              : 'SA OUVRI DOSYE KEYSTORES W’ LA. KOPYE L’ PAJ OU SÒT PRAN AN (UTC—2016-04-14)……../) NAN DOSYE SA. ',

HELP_12_Desc_10             : ' KONT OU A DWE PARÈT  BYEN VIT ANBA "ACCOUNTS."

HELP_12_Desc_11             : 'AVÈK KLE SEKRÈ W’ LA SAN KÒD… ',

HELP_12_Desc_12             : 'SI W’ PAT GENTAN GEN KLE SEKRÈ W’LA SAN KÒD, ALE NAN PAJ  "FÈ PARÈT YON BOUS". ',

HELP_12_Desc_13             : 'CHWAZI PAJ BOUS OU A-OSWA- ANTRE/KOLE KLE SEKRÈ W ‘ LA POU W ‘ OUVRI BOUS OU A. ',

HELP_12_Desc_14             : 'KOPYE KLE SEKRÈ W’ LA (SAN KÒD). ',

HELP_12_Desc_15             : 'SI W’ SOU YON MAC : ',

HELP_12_Desc_15b            : ' SI W’ SOU YON PC ;  //LI FENK PARÈT, LI DEJA NAN LANG FRANSE, OU PA JWENN LI NAN DE.JS

HELP_12_Desc_16             : 'OUVRI MODIFYE TÈKS APRE KOLE KLE SEKRÈ A. ',

HELP_12_Desc_17             : 'NAN BA MENI AN, PEZE SOU "FÒM"  -> ‘’FÈ YON PLAN EKRI". ',

HELP_12_Desc_18             : 'KENBE PAJ SA NAN DESKTOP OU A TANKOU NOTHIG_SPECIAL_DELETE_ME.TXT`. ASIRE W’ KE L’ DI "UTF-8" EPI "SI PA GEN EXTENSION KI BAY SÈVI AK TXT" NAN BWAT KI LA POU KENBE A. ',

HELP_12_Desc_19             : 'OUVRI YON PÒ EPI KÒMANSE KOMAND KI                           VINI AN : `GETH ACCOUNT     IMPORT~/DESKTOP/NOTHING_SPECIAL_DELETE_ME.TXT` ', 

HELP_12_Desc_20             : 'SA AP ENVITE CHWAZI YON NOUVO KÒD SEKRÈ. SE SA W’ PRAL ITILIZE NAN GETH / ETHEREUM WALLET / MIST  NAN CHAK MOMAN OU PRAL FÈ YON TRANSFÈ. KIDONK PA BLIYE L’.',

HELP_12_Desc_21             : 'APRÈ SA W’ FIN PRAN AN FINI, EFASE NOTHING_SPECIAL_DELETE_ME.TXT` ',

HELP_12_Desc_22             : 'LÈ W’AP OUVRI APLIKASYON ETHEREUM WALLET LA YON LÒT FWA ANKÒ, KONT OU A AP NAN YON LIS NAN "ACCOUNT". ',

HELP_12_Desc_23             : ' OUVRI NOTEPAD EPI KOLE KLE SEKRÈ W’ LA. ',

HELP_12_Desc_24             : 'KENBE PAJ LA TANKOU NOTHING_SPECIAL_DELETE_ME.TXT SOU `C:` ',   

HELP_12_Desc_25             : 'KÒMANSE AK KÒMAND  `GETH ACCOUNT IMPORT C:// NOTHING_SPECIAL_DELETE_ME.TXT` ',

HELP_12_Desc_26             : 'SA PRAL ENVITE W’ POU CHWAZI YON NOUVO KÒD SEKRÈ. SE AK SA W’ PRAL SÈVI NA GETH / ETHEREUM WALLET / MIST CHAK FWA OU PRAL VOYE YON TRANFÈ KIDONK PA BLIYE L’. ',

HELP_12_Desc_27             : 'APRÈ SA W’ FIN PRAN AN FINI, EFASE NOTHING_SPECIAL_DELETE_ME.TXT` ',

HELP_12_Desc_28             : 'LÈ W’AP OUVRI APLIKASYON ETHEREUM WALLET LA YON LÒT FWA ANKÒ, KONT OU A AP NAN YON LIS  NAN "ACCOUNTS". ',

HELP_13_Title               : '13) SA SA VLE DI <<PWOVISYON YO PA SIFI>> KONT KOTE W’AP ESEYE VOYE TRANSFÈ A PA GEN ASE PWOVIZYON YO MANDE A : XXXXXXXXXXXXXXXXXXX, RESEVWA : XXXXXXXXXXXXXXXXXXX. » ? ',

HELP_13_Desc_1              : 'SA VLE DI KE W’ PA GEN ASE ETHER SOU KONT OUAN POU W’ TA KOUVRI KÒB YO AN GAZ. CHAK TRANSFÈ ( MENM JAN POU TOKENS YO AK KONTRA YO) YO MANDE GAZ, EPI GAZ SA YO PEYE AK ETHER, NIMEWO YO KI PARÈT LA SE KANTITE SA YO MANDE POU W’ KOUVRI KÒB TRANSFÈ A AN WEI. PRAN NIMEWO SA YO DIVIZE YO PA ‘1000000000000000000` EPI SOUSTRÈ KANTITE KÒB LA  AN ETHER KE T’AP ESEYE VOYE A( SI W’ T’AP TANTE VOYE ETHER0). SA PRAL BA W’ KANTITE A AN ETHER KE W’ TE BEZWEN AN POU  KONT LA KA FÈ TRANSFÈ A. ',

HELP_14_Title               : '14) KÈK SIT PA AZA ( KONN REKÒMANSE) KREYASYON KLE SEKRÈ A NAN MOUVMAN ANTRE SÒTI YO. KA SA PA POU MYETHERWALLET.COM. KANTITE KREYASYON ALE VINI POU MYETHERWALLET.COM ESKE L’ KONFYAN? ', 

HELP_14_Desc_1              : 'MENM KE KANPE MOUVMAN SOURI A ANPIL MOUN JIJE LI GEN ATIRANS , EPI NOU TA KA KONPRANN REZON YO, REYALITE A SE WINDOW.CRYPTO A MEZIRE LIMIT DEZÒD ZIZTÈM PLIS KE MOUVMAN SOURI W’ LA. JAN W’ SÈVI AK MOUVMAN SA YO YO BON MEN NOU(ANSANM AK PLIZYÈ PWOJÈ KRYPTO YO) GEN ANPIL BON REZON POU N’ KWÈ NAN WINDOW.CRYPTO A. ANPLIS, MYETHERWALLET.COM KAPAB SÈVI SOU EKRAN OU KAPAB TOUCHE YO. MEN YON [KONVÈSASYON KI FÈT AK REDDITOR RAGEUR EPI VITALIK BUTERIN SOU MOUVMAN SOURI YO EPI WINDOW.CRYPTO] (https://www.reddit.com/r/ethereum/comments/2bilqg/note_there_is_a_paranoid_highsecurity_way_to/cj5sgrm) EPI MEN  [SPESYAL W3 YO  WINDOW.CRYPTO AN](https://dvcs.w3.org/hg/webcrypto-api/raw-file/tip/spec/Overview.html#dfn-GlobalCrypto). ',																		
HELP_15_Title               : '15) POUKISA KONT SA M’ SOT KREYE A PA PARÈT NAN EKSPLORATÈ BLOCKCHAIN LAN ? (i.e. : etherchain, etherscan)	 ',														
HELP_15_Desc_1              : 'KONT YO PA PARÈT NAN YON EKSPLORATÈ BLOCKCHAIN LÈ YON AKTIVITE FIN FÈT TANKOU, EGZANP, LE N’ TA GEN POU N’ FE YON TRANSFÈ ETHER . ',												
HELP_16_Title               : '16) KÒMAN POU M’ VERIFYE LAJAN SOU KONT MWEN AN ? ',																	
HELP_16_Desc_1              : 'OU KAPAB SÈVI AK YON EKSPLORATÈ BLOCKCHAIN TANKOU [etherscan.io](http://etherscan.io/). KOLE ADRÈS OU A NAN BA KOT E POU YO CHÈCHE A EPI SA AP È W’ JWENN LAJAN SOU KONT OU A EPI LIS TRANSFÈ W’ YO. EGZANP, MEN SA [KONT DON NOU YO MONTRE](http://etherscan.io/address/0x7cb57b5a97eabe94205c07890be4c1ad31e486a8) SOU  etherscan.io ',									
HELP_17_Title               : '17) POUKISA LAJAN SOU KONT MWEN AN PA PARÈT LÈ M’ OUVRI BOUS MWEN AN ? ',						
HELP_17_Desc_1              : 'SA KI KA LAKÒZ SA SE PASKE W’ KA DÈYÈ YON FIREWALL. APLIKASYON NOU SÈVI AK LI POU N’ JWENN LAJAN SOU KONT OU A EPI KONVÈTI L’ LI SOUVAN BLOKE AK FIREWALL YO POU PLIZYÈ REZON. W’AP TOUJOU KAPAB  VOYE TRANSFÈ MEN FÒK OU FÈL NAN YON LÒT FASON POU W’ KA WÈ LAJAN SOU KONT OU A, TANKOU etherscan.io ',  						
HELP_18_Title               : '18) KOTE PAJ BOUS GETH MWEN AN ? ',								
HELP_19_Title               : '19) KOTE PAJ BOUS MIST MWEN AN ? ', 	 							
HELP_19_Desc_1              : 'PAJ MIST YO OU TOUJOU JWENN YO NAN KOTE ANLÈ YO MEN LI PI FASIL POU W’ OUVRI MIST, CHWAZI "ACCOUNTS" NAN BA KI ANLÈ A EPI "BACUP" EPI  "ACCOUNTS" SA AP OUVRI DOSYE A KOTE PAJ OU YO KACHE A. ',					
HELP_20_Title               : '20) KOTE PAJ BOUS MWEN AN *pre-sale* (ANVAN W’ VANN)? ', 

HELP_20_Desc_1              : 'KOTEW’ TE METE L’ LA. ;) YO TE VOYE L’ BA OU TOU KIDONK AL GADE NAN EMAIL OU YO. CHÈCHE PAJ KI RELE `"ethereum_wallet_backup.json"` LA EPI CHWAZI PAJ LA. LI GEN KÒD YON KÒD SEKRÈ KE W’ TE KREYE PANDAN W’ T’AP ACHTE A NAN MOMAN AVAN W’ VANN NAN. ',															
HELP_21_Title               : '21) NENPÒT MOUN PAKA PRAN YON KLE SEKRÈ PA AZA, CHÈCHE LAJAN SOU KONT YON MOUN EPI VOYE L’ NAN ADRÈS PA L’ ? ',

HELP_21_Desc_1              : 'VÈSYON KI KOUT LA : WI, MEN JWENN YON KONT AK LAJAN SOU LI  SA AP PRAN PLIS TAN KE DEPI MOND NOU AN TE KREYE…. KIDONK……NON. ',									
HELP_21_Desc_2              : 'VÈSYON LONG : ETHEREUM NAN GEN BAZ LI SOU[KRIPTOGRAFI KI GEN KLE PIBLIK ](https://en.wikipedia.org/wiki/Public-key_cryptography), POU PI KLÈ[cryptographie des courbes elliptiques (ECC)](https://eprint.iacr.org/2013/734.pdf) KE YO SOUVAN SÈVI AK LI, PA SÈLMAN NAN ETHEREUM. MAJORITE SÈVÈ YO PWOTEJE AK ECC YO. BITCOIN YO SÈVI AK YO TOU AK SSH, TLS EPI LÒT PWOTOKÒL YO. NAN KA SPESYAL ETHEREUM YO, KLE YO FÈ 256 BITS EPI YO PI FÒ KE SA KI NAN128 YO EPI 192 YO BITS YO, YO TOUJOU SÈVI AK YO EPI YO TOUJOU KONSIDERE YO KONFYAN POU EKSPÈ YO. ',					
HELP_21_Desc_3              : 'OU GE YON KLE SEKRÈ EPI YON KLE PIBLIK. KLE SEKRÈ A KAPAB SÈVI POU CHANJE KLE PIBLIK OU A MEN LÒT FASON AN PA POSIB. MENM INTENET EPI TOUT MOND LAN AP SÈVI AK SYSTÈM  KRIPTOGRAFI A SA VLE DI KE, SI TA GEN YON MWAYEN POU CHANJE KLE SEKRÈ A AK KLE PIBLIK LA, RSIK KE ETHER W’ TA KAPAB JWENN NAN SE T’AP YOUN NAN TI KRAS PWOBLÈM YO POU TOUT MOND LAN. ',										
HELP_21_Desc_4              : 'SA TA DI, WI : SI YON MOUN GEN KLE SEKRÈ W’ LA , LI KAPAB VOYE ETHER SÒTI NA N KONT OU A, AK ANKÒ SI YON MOUN GEN KÒD SEKRÈ ADRÈS EMAIL OU A, LI KAPAB LI MESSAGE YO OSWA VOYE MESAJ, OSWA SI SE KÒD SEKRÈ KONT BANK OU A, LI KAPAB VOYE NAN KONT PA L’ LA TOU OSWA YON LOT KONT. OU KAPAB PRAN VÈSYON KEYSTORE  KLE SEKRÈ W’ LA KI SE KLE SEKRÈ KI GEN KÒD AK YON KÒD SEKRÈ. SA AP SANBLE AP YON KÒD SEKRÈ KI PWOTEJE AK YON LÒT KÒD SEKRÈ.	',					
HELP_21_Desc_5              : 'EPI WI, NAN TEYORI A, NOU KAPAB TAPE YON CHAIN 64 KARAKTÈ  KI GEN 16 NIMEWO JISKASKE W’ JWENN YOUN MENM JAN AK LI. LI POSIB TOU POU W’ EKRI YON PWOGRAM	KI KA VERIFYE BYEN RAPID KLE SEKRÈ ALE VINI YO. SE SA NOU RELE SÈVI "AK GWO FÒS" OSWA FOUYE KLE SEKRÈ YO. ANPIL MOUN AP APNSE AK SA ANPIL  DEPI BYEN LONTAN. KÈK GWO SÈVÈ KAPAB VERIFYE PLIS PASE YON MILYON KLE CHAK SEKOND.	EPOUTAN, MENM CHIF SA PA TA PRAL BAY AKSÈ AK YON KONT KI GEN PWOVISYON SOU LI POU TA KONN PRI YON BOUJI ;  LI PLIS PWOBAB KE OU MENM, PITIT OU YO EPI PITIT PITIT OU YO MOURI ANVAN W’ JWENN YOUN KI SANBLE L’. ',													
HELP_21_Desc_6              : 'SI W’ TA KONN BITCOIN YON TI KRAS, [ SA AP FÈ W’ KONPRANN PI BYEN :] :](http://bitcoin.stackexchange.com/questions/32331/two-people-with-same-public-address-how-will-people-network-know-how-to-deliver)	* POU W’ EKRI SA KI TA KA PAKA PASE NAN TOUT SA. ANN SIPOZE KE CHAK SATOCHI NAN CHAK BITCOIN KI PA PRAL JANM FÈ OSWA ALE NAN SÈL MENM KLE SEKRÈ LI A. SA KI KA, NAN MITAN KLE SA YO, POU YO TA JWENN 2 KI GEN MENM ADRÈS LA LI TA KAPAB 1 SOU 100 KENTIYON. ',							
HELP_21_Desc_7              : '[SI W’TA VLE AGIMAN KI POU TA EDE W’ KONPRANN PI FASIL :] (http://security.stackexchange.com/questions/25375/why-not-use-larger-cipher-keys/25392#25392) * NIMEWO SA YO PA GEN ANYEN POU WÈ AK TEKNOLOJI SYSTÈM YO ; SE PI GWO SA YO KE TÈMODINAMIK LA AKSEPTE.  EPI YO METE KLÈ YON ATAK AK GWO FÒS KONT KLE 256 BIT YO AP RETE ENPOSIB JISKASKE YO KONSTWI LÒT KOMPITÈ AVÈK LÒT BAGAY KE MATYÈ EPI POU YO TA OKIPE YON LÒT BAGAY KE ESPAS LA. ',															
HELP_21_Desc_8              : 'SA W’ TA SIPOZE BYEN KONPRANN KE KLE YO KREYE YON FASON ALE VINI TOUT ANTYE AVÈK YON SISTÈM KI MEZIRE LIMIT DEZÒD LA. SE KA KLE SA YO KI KREYE LA, MENM JAN AK JAXX EPI MIST/GETH. BOUS ETHTEREUM YO TOUT BON POU KONSÈY SA. KLE KE SÈVO MOUN YO KREYE YO YO PA KONSA, PASKE KLE SA YO PA KAPAB SÒTI NAN YON BON NIMEWO ALE VINI. TE KONN GEN LÒT PWOBLÈM NAN SISTÈM KI MEZIRE LIMIT DEZÒD LA KI PA SIFI OSWA NAN NIMEWO ALE VINI YO NAN MOND BITCOIN NAN MEN KOUNYE A SE YON LÒT PWOBLÈM LI VIN YE KI KA TANN YON MOMAN. ',							
HELP_SecCX_Title            : 'KLE – MYETHERWALLET CX ',								
HELP_SecCX_Desc_1           : 'KIBÒ EXTENSION CHROME NAN KENBE ENFÒMASYON M’ YO ? ',									
HELP_SecCX_Desc_2           : 'ENFÒMASYON YO KI NAN EXTENSION YO ANREJISTRE PA  [chrome.storage](http://chrome.storage/), SA VLE DI MENM KOTE AK KÒD SEKRÈ W’ YO NAN CHROME. ',	
		
HELP_SecCX_Desc_3           : 'KI ENFÒMASYON SA YO KI ANREJISTRE A? ',										
HELP_SecCX_Desc_4           : 'ADRÈS LA, TI NON AN, KLE SEKRÈ A, YO KACHE NAN chrome.storage. KLE SEKRÈ A GEN KÒD AK KÒD SEKRÈ KI TE METE LÈ W’ T’AP KREYE BOUS LA. TI NON AN EPI ADRÈS BOUS LA YO PA GEN KÒD. ',																					
HELP_SecCX_Desc_5           : 'POUKISA TI NON AN AK ADRÈS BOUS LA YO PA GEN KÒD ? ',																					
HELP_SecCX_Desc_6           : 'SI NOU TA DWE METE KÒD NAN ENFÒMASYON YO, FÒK OU TA ANTRE YON KÒD SEKRÈ NAN CHAK MOMAN OU BEZWEN WÈ LAJAN SOU KONT OU OSWA LÒT TI NON YO. SI SA NWI W’,NOU MANDE W’ POU SÈVI AK MyEtherWallet.com KE EXTENSION CHROME SA. ',  								
HELP_Sec_Title              : 'KLE ',

HELP_Sec_Desc_1             : 'SI YOUN NAN PREMYE KESYON W’  OU POZE TÈT OU SE "POUKISA W’ DWE FÈ MOUN SA YO KONFYANS ? "  SE YON BON DEMACH. ESPERANS NOU SE SA KI AP VINI AN KI PRAL FÈ W PI BYEN KONPRANN. ',	

						
HELP_Sec_Desc_2             : 'NOU TE KÒMANSE NAN MWA DAWOU 2015. SI W’ AL CHÈCHE ["myetherwallet" SOU reddit](https://www.reddit.com/search?q=myetherwallet), OU KAPAB WÈ YON PAKÈT BANN MOUN K’AP SÈVI AK NOU SAN OKENN PWOBLÈM. ',		
HELP_Sec_Desc_3             : 'NOU PA PRAL PRAN KÒB OU OSWA VÒLÈ KLE SEKRÈ W’ YO. PA GEN KÒD MALVEYAN SOU SIT LA. EPI, PAJ "KREYASYON BOUS YO" YO  TOUT ANTYE SE POU KLIYAN AN. SA VLE DI KE TOUT KÒD YO FÈT SOU **KOMPITÈ W’ LA** YO PA JANM SOVE EPI/OSWA ALE OKENN LÒT KOTE.	 ',								
HELP_Sec_Desc_4             : 'VERIFYE URL LA – SIT SA SÈVI AK GITHUB EPI OU KAPAB WÈ KÒD SOUS LA LA : : [https://github.com/kvhnuke/etherwallet/tree/gh-pages](https://github.com/kvhnuke/etherwallet/tree/gh-pages) NAN  [https://www.myetherwallet.com](https://www.myetherwallet.com). ',

HELP_Sec_Desc_5             : 'POU W’ KREYE BOUS YO, OU KAPAB PRAN [KÒD SOUS LA] (https://github.com/kvhnuke/etherwallet/releases/latest). GADE #5 KI ANLÈ A.  ',

HELP_Sec_Desc_6             : 'KÒMANSE YON TÈS EPI VERIFYE JAN REZO AP FONKSYONE. FASON KI PI SENP LA SE YON KLIK DWAT SOU PAJ LA APRÈ "ENSPEKSYON".AL NAN KAZYE  "NETWORK" KREYE YON BOUS POU TÈS. OU PRAL WÈ REZO A P’AP FONKSYONE. OU KAPAB PRAL WÈ YON KÈK BAGAY AP FÈT KI SANBLE AK DATA :IMAGE/GIF EPI DATA :IMAGE/PNG SA YO SE QR KÒD YO KI KÒMANSE AP KREYE… SOU KOMPITÈ W’ LA. PA GEN OKENN TRANSFÈ OCTET KI TE FÈT. ',

HELP_Sec_Desc_8             : 'SI ZOUTI SA PA FÈ W ‘ PLEZI, EBYEN PA SÈVI AK LI. NOU TE KREYE L’ POU L’ KA EDE TOUT MOUN  KREYE BOUS YO AK FÈ TRANSFÈ YO SAN YO PA BEZWEN AL PRAN LIY POU FÈ SA YO NI FÈ VIRE TOUNEN NAN YON NE ANTYE. YON LÒT FWA, PA EZITE FÈ N’ KONNEN SI W’ GEN DOUT EPI N’AP REPONN OU PI VIT KE POSIB. MÈSI ! ',

HELP_FAQ_Title              : 'REPONS ANPLIS AK KESYON YO YOUJOU POZE YO',

HELP_Contact_Title          : 'MWAYEN OU KA PALE AK NOU'
};

module.exports = ht;
