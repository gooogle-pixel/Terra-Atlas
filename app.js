// ================= SUPABASE LIVE GLOBAL LEADERBOARD CONFIG =================
const SUPABASE_URL = 'https://mjohiguvebbqfrhfqmrc.supabase.co';
const SUPABASE_KEY = 'sb_publishable_SG0jn8CdXYeUT2m6pXUyZQ_P288ut6Z';
const SUPABASE_TABLE = 'leaderboard';

// ================= PROFANITY & NAME VALIDATION FILTER =================

const BLOCKED_NAME_ROOTS = [
  // ==========================================
  // ENGLISH PROFANITY & SWEAR WORDS
  // ==========================================
  'fuck', 'fuk', 'fck', 'fcker', 'fucker', 'fucking', 'fucked',
  'shit', 'shat', 'shitty', 'bullshit', 'horseshit',
  'bitch', 'btch', 'bitches', 'bitchass',
  'cunt', 'cunts', 'cunting',
  'dick', 'dicks', 'dickhead', 'dickwad',
  'cock', 'cocks', 'cockhead', 'cocksucker',
  'pussy', 'pussies', 'puss','cockandballtorture','coc&balltorture','coc&balltortur','coc',
  'asshole', 'arsehole', 'asshat', 'arse',
  'bastard', 'bastards', 'bstrd',
  'slut', 'sluts', 'whore', 'whores',
  'skank', 'twat', 'wank', 'wanker',
  'prick', 'douche', 'douchebag',
  'motherfucker', 'mofo', 'mfkr',
  'sonofabitch', 'sob',
  'jackass', 'dumbass', 'dipshit',
  'shithead', 'fuckwit', 'dumbfuck',
  'scumbag', 'shitbag', 'fuckface',
  
  // ==========================================
  // SEXUAL / ANATOMICAL / EXPLICIT TERMS
  // ==========================================
  'penis', 'vagina', 'boob', 'boobs',
  'tits', 'titt', 'titjob',
  'cum', 'cumming', 'jizz', 'semen',
  'dildo', 'vibrator', 'fleshlight',
  'porn', 'porno', 'pornhub', 'hentai',
  'horny', 'milf', 'dilf',
  'orgasm', 'orgy', 'blowjob', 'handjob',
  'footjob', 'rimjob', 'anal',
  'deepthroat', 'gangbang', 'threesome',
  'masturbat', 'masturbation',
  'ejaculat', 'sperm',
  'bdsm', 'bondage', 'fetish',
  'nudes', 'nude', 'naked',
  'onlyfans', 'sexwork', 'prostitut',
  'escort', 'hooker', 'stripper','teeth','straight-teeth',

  // ==========================================
  // RACIAL / ETHNIC / HOMOPHOBIC SLURS
  // ==========================================
  'nigg', 'nigga', 'nigger', 'nigr',
  'fagg', 'fagot', 'faggot',
  'dyke', 'tranny', 'shemale',
  'retard', 'rtrd', 'retarded',
  'spic', 'chink', 'kike', 'gook',
  'wetback', 'coon', 'raghead',
  'towelhead', 'cracker', 'honky',
  'beaner', 'wop', 'zipperhead',
  'darkie', 'paki', 'gringo',

  // ==========================================
  // HATE SPEECH / EXTREMISM
  // ==========================================
  'hitler', 'adolfhitler',
  'nazi', 'nazism', 'nazis',
  'heilhitler', 'siegheil',
  'aryanbrotherhood',
  'whitepower', 'whitesupremacy',
  'kkk', 'ku klux klan',
  'isis', 'isil', 'daesh',
  'alqaeda', 'taliban',
  'terrorist', 'terrorism',
  'jihadist', 'jihad',
  'neo-nazi', 'neonazi',
  'genocide', 'ethniccleansing', 'Kneegro', 'negro', 'knee grow', 'nigro', 'ngiger', 'niger','ninger','coq', 'phat','scrotum','scrowtum',

  // ==========================================
  // VIOLENCE / ABUSE / SELF-HARM
  // ==========================================
  'rape', 'rapist', 'raping','rhape', 
  'pedo', 'paedo', 'pedophile', 'paedophile',
  'molest', 'molester', 'molestation',
  'incest', 'incestuous',
  'suicide', 'suicidal',
  'kys', 'killyourself',
  'murder', 'murderer',
  'torture', 'necrophil',
  'childabuse', 'childmolest','edp445',

  // ==========================================
  // HINDI / HINGLISH PROFANITY
  // ==========================================
  'chutiya', 'chutiye', 'chutiyapa',
  'chut', 'chutmar',
  'madarchod', 'madarchut',
  'bhenchod', 'behenchod', 'bhenchodd',
  'bhencho', 'behencho',
  'bsdk', 'bhosdike', 'bhosdi',
  'bhosda', 'bhosad', 'bhosadike',
  'gandu', 'gaand', 'gand',
  'gaandfat', 'gandmasti',
  'randi', 'randibaaz', 'randwa',
  'lund', 'lundchoos', 'lundfakir',
  'lauda', 'laude', 'lavda', 'lavde',
  'lodu', 'lode', 'lulli',
  'harami', 'haramkhor',
  'kamina', 'kamine', 'kameena',
  'kutte', 'kutta', 'kutti',
  'suar', 'suar ki aulad',
  'saala', 'saali', 'sala',
  'bawaseer',
  'jhant', 'jhaant',
  'chodu', 'chod', 'chodna',
  'chodumal',
  'mc', 'bc',

  // ==========================================
  // HINDI / HINGLISH ROMANIZED VARIATIONS
  // ==========================================
  'ch0tiya', 'ch0tiye',
  'm4darchod', 'm4darch0d',
  'bhench0d', 'b3henchod',
  'bh0sdike', 'bh0sdi',
  'g4ndu', 'g4nd',
  'l4uda', 'l4vda',
  'r4ndi',
  'ch00t', 'ch00tiya',
  'maderchod', 'madrchod',
  'bhenchot', 'behnchod',

  // ==========================================
  // CONTROVERSIAL PERSONALITIES / INTERNET FIGURES
  // ==========================================
  // Bonnie Blue
  'bonnieblue',
  'bonnie_blue',
  'bonnie.blue',
  'bonnyblew',
  'bonnieblew',


  // Charlie Kirk
  'charliekirk',
  'charlie_kirk',
  'charlie.kirk',

  // Andrew Tate
  'andrewtate',
  'andrew_tate',
  'cobratate',
  'tristantate',

  // Adolf Hitler
  'adolfhitler',

  // Jeffrey Epstein
  'jeffreyepstein',
  'jeffrey',
  'jefree',
  'gefri',
  'jeffrey_epstein',
  'epstein',
  'ghislaine maxwell',

  // Osama Bin Laden
  'osamabinladen',
  'binladen',
  'netanyahu',
  'netanyahoo',
  'n8anyahu',
  'n8anyahoo',
  'big yahu',
  'yahu',

  // Other controversial internet personalities
  'nikocadoavocado',
  'sneako',
  'freshandfit',
  'nickfuentes',

  // ==========================================
  // ADDITIONAL INTERNET SLANG / BYPASS TERMS
  // ==========================================
  'kys',
  'kms',
  'stfu',
  'gtfo',
  'wtf',
  'fml',
  'pos',
  'sob',
];



// ================= ADVANCED NAME NORMALIZATION =================

function normalizeNameForFilter(input) {
  return String(input || '')
    .normalize('NFKD')
    .toLowerCase()

    // Common number substitutions
    .replace(/0/g, 'o')
    .replace(/1/g, 'i')
    .replace(/3/g, 'e')
    .replace(/4/g, 'a')
    .replace(/5/g, 's')
    .replace(/7/g, 't')
    .replace(/8/g, 'b')
    .replace(/@/g, 'a')
    .replace(/\$/g, 's')

    // Remove accents
    .replace(/[\u0300-\u036f]/g, '')

    // Remove ALL spaces, punctuation and separators
    .replace(/[^a-z0-9]/g, '');
}


// ================= ADVANCED PLAYER NAME VALIDATION =================

function validatePlayerName(rawInput) {

  const trimmed = String(rawInput || '').trim();

  if (!trimmed) {
    return {
      valid: true,
      cleanName: 'EXPLORER'
    };
  }

  // Reject oversized input rather than silently truncating it
  if (trimmed.length > 16) {
    return {
      valid: false,
      reason: 'NAME MUST NOT EXCEED 16 CHARACTERS.'
    };
  }

  // Only permit standard characters
  if (!/^[a-zA-Z0-9 _-]+$/.test(trimmed)) {
    return {
      valid: false,
      reason: 'NAME CONTAINS INVALID CHARACTERS.'
    };
  }

  const cleanName = trimmed
    .toUpperCase()
    .replace(/\s+/g, ' ')
    .trim();

  if (cleanName.length < 2) {
    return {
      valid: false,
      reason: 'NAME MUST BE AT LEAST 2 CHARACTERS.'
    };
  }

  // Multiple normalization passes
  const normalized = normalizeNameForFilter(trimmed);

  // Catch excessive repeated characters
  const collapsed = normalized.replace(/(.)\1+/g, '$1');

  // Combine existing and additional blocked words
  const allBlockedWords = BLOCKED_NAME_ROOTS;

  for (const word of allBlockedWords) {

    const blocked = normalizeNameForFilter(word);

    if (!blocked) continue;

    // Short words must match complete tokens to avoid
    // accidentally blocking innocent names.
    if (blocked.length <= 3) {

      const tokens = trimmed
        .toLowerCase()
        .split(/[^a-z0-9]+/)
        .map(normalizeNameForFilter);

      if (tokens.includes(blocked)) {
        return {
          valid: false,
          reason: 'NAME CONTAINS RESTRICTED LANGUAGE. CHOOSE ANOTHER ALIAS.'
        };
      }

      continue;
    }

    // Check original and repeated-character-normalized versions
    if (
      normalized.includes(blocked) ||
      collapsed.includes(blocked)
    ) {
      return {
        valid: false,
        reason: 'NAME CONTAINS RESTRICTED LANGUAGE. CHOOSE ANOTHER ALIAS.'
      };
    }
  }

  return {
    valid: true,
    cleanName
  };
}

// ================= BUILT-IN SOVEREIGN COUNTRY DATABASE WITH EXACT CAPITAL COORDINATES =================
const RAW_COUNTRY_DB = [
  // EUROPE
  ['008','ALB','al','Albania','Tirana',['europe'],[19.82,41.33]],
  ['020','AND','ad','Andorra','Andorra la Vella',['europe'],[1.52,42.51]],
  ['040','AUT','at','Austria','Vienna',['europe'],[16.37,48.21]],
  ['112','BLR','by','Belarus','Minsk',['europe'],[27.57,53.90]],
  ['056','BEL','be','Belgium','Brussels',['europe'],[4.35,50.85]],
  ['070','BIH','ba','Bosnia and Herzegovina','Sarajevo',['europe'],[18.41,43.86]],
  ['100','BGR','bg','Bulgaria','Sofia',['europe'],[23.32,42.70]],
  ['191','HRV','hr','Croatia','Zagreb',['europe'],[15.98,45.81]],
  ['196','CYP','cy','Cyprus','Nicosia',['europe','asia'],[33.38,35.19]],
  ['203','CZE','cz','Czechia','Prague',['europe'],[14.44,50.08]],
  ['208','DNK','dk','Denmark','Copenhagen',['europe'],[12.57,55.68]],
  ['233','EST','ee','Estonia','Tallinn',['europe'],[24.75,59.44]],
  ['246','FIN','fi','Finland','Helsinki',['europe'],[24.94,60.17]],
  ['250','FRA','fr','France','Paris',['europe'],[2.35,48.86]],
  ['276','DEU','de','Germany','Berlin',['europe'],[13.40,52.52]],
  ['300','GRC','gr','Greece','Athens',['europe'],[23.73,37.98]],
  ['348','HUN','hu','Hungary','Budapest',['europe'],[19.04,47.50]],
  ['352','ISL','is','Iceland','Reykjavik',['europe'],[-21.94,64.15]],
  ['372','IRL','ie','Ireland','Dublin',['europe'],[-6.26,53.35]],
  ['380','ITA','it','Italy','Rome',['europe'],[12.50,41.90]],
  ['428','LVA','lv','Latvia','Riga',['europe'],[24.11,56.95]],
  ['438','LIE','li','Liechtenstein','Vaduz',['europe'],[9.52,47.14]],
  ['440','LTU','lt','Lithuania','Vilnius',['europe'],[25.28,54.69]],
  ['442','LUX','lu','Luxembourg','Luxembourg',['europe'],[6.13,49.61]],
  ['470','MLT','mt','Malta','Valletta',['europe'],[14.51,35.90]],
  ['498','MDA','md','Moldova','Chișinău',['europe'],[28.86,47.01]],
  ['492','MCO','mc','Monaco','Monaco',['europe'],[7.42,43.73]],
  ['499','MNE','me','Montenegro','Podgorica',['europe'],[19.26,42.44]],
  ['528','NLD','nl','Netherlands','Amsterdam',['europe'],[4.90,52.37]],
  ['807','MKD','mk','North Macedonia','Skopje',['europe'],[21.43,42.00]],
  ['578','NOR','no','Norway','Oslo',['europe'],[10.75,59.91]],
  ['616','POL','pl','Poland','Warsaw',['europe'],[21.01,52.23]],
  ['620','PRT','pt','Portugal','Lisbon',['europe'],[-9.14,38.72]],
  ['642','ROU','ro','Romania','Bucharest',['europe'],[26.10,44.43]],
  ['643','RUS','ru','Russia','Moscow',['europe','asia'],[37.62,55.76]],
  ['674','SMR','sm','San Marino','San Marino',['europe'],[12.45,43.94]],
  ['688','SRB','rs','Serbia','Belgrade',['europe'],[20.45,44.79]],
  ['703','SVK','sk','Slovakia','Bratislava',['europe'],[17.11,48.15]],
  ['705','SVN','si','Slovenia','Ljubljana',['europe'],[14.51,46.06]],
  ['724','ESP','es','Spain','Madrid',['europe'],[-3.70,40.42]],
  ['752','SWE','se','Sweden','Stockholm',['europe'],[18.07,59.33]],
  ['756','CHE','ch','Switzerland','Bern',['europe'],[7.45,46.95]],
  ['804','UKR','ua','Ukraine','Kyiv',['europe'],[30.52,50.45]],
  ['826','GBR','gb','United Kingdom','London',['europe'],[-0.13,51.51]],
  ['336','VAT','va','Vatican City','Vatican City',['europe'],[12.45,41.90]],

  // ASIA
  ['004','AFG','af','Afghanistan','Kabul',['asia'],[69.18,34.56]],
  ['051','ARM','am','Armenia','Yerevan',['asia','europe'],[44.51,40.18]],
  ['031','AZE','az','Azerbaijan','Baku',['asia','europe'],[49.87,40.41]],
  ['048','BHR','bh','Bahrain','Manama',['asia'],[50.59,26.23]],
  ['050','BGD','bd','Bangladesh','Dhaka',['asia'],[90.41,23.81]],
  ['064','BTN','bt','Bhutan','Thimphu',['asia'],[89.64,27.47]],
  ['096','BRN','bn','Brunei','Bandar Seri Begawan',['asia'],[114.95,4.89]],
  ['116','KHM','kh','Cambodia','Phnom Penh',['asia'],[104.92,11.56]],
  ['156','CHN','cn','China','Beijing',['asia'],[116.41,39.90]],
  ['268','GEO','ge','Georgia','Tbilisi',['asia','europe'],[44.79,41.72]],
  ['356','IND','in','India','New Delhi',['asia'],[77.21,28.61]],
  ['360','IDN','id','Indonesia','Jakarta',['asia'],[106.85,-6.21]],
  ['364','IRN','ir','Iran','Tehran',['asia'],[51.39,35.69]],
  ['368','IRQ','iq','Iraq','Baghdad',['asia'],[44.37,33.31]],
  ['376','ISR','il','Israel','Jerusalem',['asia'],[35.21,31.77]],
  ['392','JPN','jp','Japan','Tokyo',['asia'],[139.69,35.69]],
  ['400','JOR','jo','Jordan','Amman',['asia'],[35.93,31.95]],
  ['398','KAZ','kz','Kazakhstan','Astana',['asia','europe'],[71.45,51.17]],
  ['414','KWT','kw','Kuwait','Kuwait City',['asia'],[47.98,29.38]],
  ['417','KGZ','kg','Kyrgyzstan','Bishkek',['asia'],[74.59,42.87]],
  ['418','LAO','la','Laos','Vientiane',['asia'],[102.63,17.98]],
  ['422','LBN','lb','Lebanon','Beirut',['asia'],[35.50,33.89]],
  ['458','MYS','my','Malaysia','Kuala Lumpur',['asia'],[101.69,3.14]],
  ['462','MDV','mv','Maldives','Malé',['asia'],[73.51,4.18]],
  ['496','MNG','mn','Mongolia','Ulaanbaatar',['asia'],[106.91,47.92]],
  ['104','MMR','mm','Myanmar','Naypyidaw',['asia'],[96.13,19.76]],
  ['524','NPL','np','Nepal','Kathmandu',['asia'],[85.32,27.72]],
  ['408','PRK','kp','North Korea','Pyongyang',['asia'],[125.76,39.02]],
  ['512','OMN','om','Oman','Muscat',['asia'],[58.41,23.59]],
  ['586','PAK','pk','Pakistan','Islamabad',['asia'],[73.05,33.69]],
  ['275','PSE','ps','Palestine','Ramallah',['asia'],[35.20,31.90]],
  ['608','PHL','ph','Philippines','Manila',['asia'],[120.98,14.60]],
  ['634','QAT','qa','Qatar','Doha',['asia'],[51.53,25.29]],
  ['682','SAU','sa','Saudi Arabia','Riyadh',['asia'],[46.72,24.71]],
  ['702','SGP','sg','Singapore','Singapore',['asia'],[103.82,1.35]],
  ['410','KOR','kr','South Korea','Seoul',['asia'],[126.98,37.57]],
  ['144','LKA','lk','Sri Lanka','Sri Jayawardenepura Kotte',['asia'],[79.89,6.89]],
  ['760','SYR','sy','Syria','Damascus',['asia'],[36.28,33.51]],
  ['158','TWN','tw','Taiwan','Taipei',['asia'],[121.57,25.03]],
  ['762','TJK','tj','Tajikistan','Dushanbe',['asia'],[68.79,38.56]],
  ['764','THA','th','Thailand','Bangkok',['asia'],[100.50,13.76]],
  ['626','TLS','tl','Timor-Leste','Dili',['asia'],[125.56,-8.56]],
  ['792','TUR','tr','Turkey','Ankara',['asia','europe'],[32.86,39.93]],
  ['795','TKM','tm','Turkmenistan','Ashgabat',['asia'],[58.38,37.96]],
  ['784','ARE','ae','United Arab Emirates','Abu Dhabi',['asia'],[54.37,24.45]],
  ['860','UZB','uz','Uzbekistan','Tashkent',['asia'],[69.24,41.30]],
  ['704','VNM','vn','Vietnam','Hanoi',['asia'],[105.83,21.03]],
  ['887','YEM','ye','Yemen','Sana\'a',['asia'],[44.21,15.37]],

  // AFRICA
  ['012','DZA','dz','Algeria','Algiers',['africa'],[3.06,36.75]],
  ['024','AGO','ao','Angola','Luanda',['africa'],[13.23,-8.84]],
  ['204','BEN','bj','Benin','Porto-Novo',['africa'],[2.63,6.50]],
  ['072','BWA','bw','Botswana','Gaborone',['africa'],[25.91,-24.63]],
  ['854','BFA','bf','Burkina Faso','Ouagadougou',['africa'],[-1.52,12.37]],
  ['108','BDI','bi','Burundi','Gitega',['africa'],[29.93,-3.43]],
  ['132','CPV','cv','Cabo Verde','Praia',['africa'],[-23.51,14.93]],
  ['120','CMR','cm','Cameroon','Yaoundé',['africa'],[11.52,3.85]],
  ['140','CAF','cf','Central African Republic','Bangui',['africa'],[18.56,4.39]],
  ['148','TCD','td','Chad','N\'Djamena',['africa'],[15.05,12.13]],
  ['174','COM','km','Comoros','Moroni',['africa'],[43.26,-11.72]],
  ['178','COG','cg','Republic of the Congo','Brazzaville',['africa'],[15.28,-4.26]],
  ['180','COD','cd','DR Congo','Kinshasa',['africa'],[15.32,-4.32]],
  ['384','CIV','ci','Ivory Coast','Yamoussoukro',['africa'],[-5.28,6.82]],
  ['262','DJI','dj','Djibouti','Djibouti',['africa'],[43.15,11.59]],
  ['818','EGY','eg','Egypt','Cairo',['africa'],[31.24,30.04]],
  ['226','GNQ','gq','Equatorial Guinea','Malabo',['africa'],[8.78,3.75]],
  ['232','ERI','er','Eritrea','Asmara',['africa'],[38.93,15.32]],
  ['748','SWZ','sz','Eswatini','Mbabane',['africa'],[31.13,-26.31]],
  ['231','ETH','et','Ethiopia','Addis Ababa',['africa'],[38.76,9.02]],
  ['266','GAB','ga','Gabon','Libreville',['africa'],[9.45,0.39]],
  ['270','GMB','gm','Gambia','Banjul',['africa'],[-16.58,13.45]],
  ['288','GHA','gh','Ghana','Accra',['africa'],[-0.19,5.56]],
  ['324','GIN','gn','Guinea','Conakry',['africa'],[-13.71,9.51]],
  ['624','GNB','gw','Guinea-Bissau','Bissau',['africa'],[-15.60,11.86]],
  ['404','KEN','ke','Kenya','Nairobi',['africa'],[36.82,-1.29]],
  ['426','LSO','ls','Lesotho','Maseru',['africa'],[27.48,-29.32]],
  ['430','LBR','lr','Liberia','Monrovia',['africa'],[-10.80,6.30]],
  ['434','LBY','ly','Libya','Tripoli',['africa'],[13.19,32.89]],
  ['450','MDG','mg','Madagascar','Antananarivo',['africa'],[47.51,-18.88]],
  ['454','MWI','mw','Malawi','Lilongwe',['africa'],[33.79,-13.96]],
  ['466','MLI','ml','Mali','Bamako',['africa'],[-8.00,12.64]],
  ['478','MRT','mr','Mauritania','Nouakchott',['africa'],[-15.98,18.07]],
  ['480','MUS','mu','Mauritius','Port Louis',['africa'],[57.50,-20.16]],
  ['504','MAR','ma','Morocco','Rabat',['africa'],[-6.85,34.02]],
  ['508','MOZ','mz','Mozambique','Maputo',['africa'],[32.58,-25.97]],
  ['516','NAM','na','Namibia','Windhoek',['africa'],[17.08,-22.56]],
  ['562','NER','ne','Niger','Niamey',['africa'],[2.11,13.51]],
  ['566','NGA','ng','Nigeria','Abuja',['africa'],[7.49,9.08]],
  ['646','RWA','rw','Rwanda','Kigali',['africa'],[30.06,-1.94]],
  ['678','STP','st','São Tomé and Príncipe','São Tomé',['africa'],[6.73,0.34]],
  ['686','SEN','sn','Senegal','Dakar',['africa'],[-17.45,14.69]],
  ['690','SYC','sc','Seychelles','Victoria',['africa'],[55.45,-4.62]],
  ['694','SLE','sl','Sierra Leone','Freetown',['africa'],[-13.23,8.48]],
  ['706','SOM','so','Somalia','Mogadishu',['africa'],[45.32,2.05]],
  ['710','ZAF','za','South Africa','Pretoria',['africa'],[28.19,-25.75]],
  ['728','SSD','ss','South Sudan','Juba',['africa'],[31.58,4.86]],
  ['729','SDN','sd','Sudan','Khartoum',['africa'],[32.56,15.50]],
  ['834','TZA','tz','Tanzania','Dodoma',['africa'],[35.75,-6.16]],
  ['768','TGO','tg','Togo','Lomé',['africa'],[1.23,6.14]],
  ['788','TUN','tn','Tunisia','Tunis',['africa'],[10.18,36.81]],
  ['800','UGA','ug','Uganda','Kampala',['africa'],[32.58,0.35]],
  ['894','ZMB','zm','Zambia','Lusaka',['africa'],[28.28,-15.39]],
  ['716','ZWE','zw','Zimbabwe','Harare',['africa'],[31.05,-17.83]],

  // NORTH AMERICA
  ['028','ATG','ag','Antigua and Barbuda','Saint John\'s',['north_america'],[-61.85,17.12]],
  ['044','BHS','bs','Bahamas','Nassau',['north_america'],[-77.35,25.06]],
  ['052','BRB','bb','Barbados','Bridgetown',['north_america'],[-59.62,13.10]],
  ['084','BLZ','bz','Belize','Belmopan',['north_america'],[-88.77,17.25]],
  ['124','CAN','ca','Canada','Ottawa',['north_america'],[-75.70,45.42]],
  ['188','CRI','cr','Costa Rica','San José',['north_america'],[-84.09,9.93]],
  ['192','CUB','cu','Cuba','Havana',['north_america'],[-82.37,23.11]],
  ['212','DMA','dm','Dominica','Roseau',['north_america'],[-61.39,15.30]],
  ['214','DOM','do','Dominican Republic','Santo Domingo',['north_america'],[-69.94,18.49]],
  ['222','SLV','sv','El Salvador','San Salvador',['north_america'],[-89.22,13.69]],
  ['308','GRD','gd','Grenada','St. George\'s',['north_america'],[-61.75,12.05]],
  ['320','GTM','gt','Guatemala','Guatemala City',['north_america'],[-90.51,14.63]],
  ['332','HTI','ht','Haiti','Port-au-Prince',['north_america'],[-72.34,18.59]],
  ['340','HND','hn','Honduras','Tegucigalpa',['north_america'],[-87.21,14.07]],
  ['388','JAM','jm','Jamaica','Kingston',['north_america'],[-76.79,18.00]],
  ['484','MEX','mx','Mexico','Mexico City',['north_america'],[-99.13,19.43]],
  ['558','NIC','ni','Nicaragua','Managua',['north_america'],[-86.25,12.13]],
  ['591','PAN','pa','Panama','Panama City',['north_america'],[-79.52,8.98]],
  ['659','KNA','kn','Saint Kitts and Nevis','Basseterre',['north_america'],[-62.72,17.30]],
  ['662','LCA','lc','Saint Lucia','Castries',['north_america'],[-60.99,14.01]],
  ['670','VCT','vc','Saint Vincent and the Grenadines','Kingstown',['north_america'],[-61.22,13.16]],
  ['780','TTO','tt','Trinidad and Tobago','Port of Spain',['north_america'],[-61.52,10.67]],
  ['840','USA','us','United States','Washington, D.C.',['north_america'],[-77.04,38.91]],

  // SOUTH AMERICA
  ['032','ARG','ar','Argentina','Buenos Aires',['south_america'],[-58.38,-34.60]],
  ['068','BOL','bo','Bolivia','La Paz / Sucre',['south_america'],[-68.15,-16.50]],
  ['076','BRA','br','Brazil','Brasília',['south_america'],[-47.88,-15.79]],
  ['152','CHL','cl','Chile','Santiago',['south_america'],[-70.67,-33.45]],
  ['170','COL','co','Colombia','Bogotá',['south_america'],[-74.07,4.71]],
  ['218','ECU','ec','Ecuador','Quito',['south_america'],[-78.47,-0.18]],
  ['328','GUY','gy','Guyana','Georgetown',['south_america'],[-58.16,6.80]],
  ['600','PRY','py','Paraguay','Asunción',['south_america'],[-57.58,-25.26]],
  ['604','PER','pe','Peru','Lima',['south_america'],[-77.04,-12.05]],
  ['740','SUR','sr','Suriname','Paramaribo',['south_america'],[-55.20,5.85]],
  ['858','URY','uy','Uruguay','Montevideo',['south_america'],[-56.16,-34.90]],
  ['862','VEN','ve','Venezuela','Caracas',['south_america'],[-66.90,10.48]],

  // OCEANIA
  ['036','AUS','au','Australia','Canberra',['oceania'],[149.13,-35.28]],
  ['242','FJI','fj','Fiji','Suva',['oceania'],[178.44,-18.14]],
  ['296','KIR','ki','Kiribati','Tarawa',['oceania'],[172.98,1.33]],
  ['584','MHL','mh','Marshall Islands','Majuro',['oceania'],[171.38,7.09]],
  ['583','FSM','fm','Micronesia','Palikir',['oceania'],[158.16,6.92]],
  ['520','NRU','nr','Nauru','Yaren',['oceania'],[166.92,-0.55]],
  ['554','NZL','nz','New Zealand','Wellington',['oceania'],[174.78,-41.29]],
  ['585','PLW','pw','Palau','Ngerulmud',['oceania'],[134.62,7.50]],
  ['598','PNG','pg','Papua New Guinea','Port Moresby',['oceania'],[147.18,-9.44]],
  ['882','WSM','ws','Samoa','Apia',['oceania'],[-171.76,-13.83]],
  ['090','SLB','sb','Solomon Islands','Honiara',['oceania'],[159.95,-9.43]],
  ['776','TON','to','Tonga','Nukuʻalofa',['oceania'],[-175.20,-21.14]],
  ['798','TUV','tv','Tuvalu','Funafuti',['oceania'],[179.20,-8.52]],
  ['548','VUT','vu','Vanuatu','Port Vila',['oceania'],[168.32,-17.73]],
];

const MICRO_ISLANDS_AND_STATES = new Set([
  'TUV', 'NRU', 'PLW', 'MHL', 'FSM', 'KIR', 'TON', 'WSM', 'VUT', 'FJI', 'SLB',
  'ATG', 'BRB', 'DMA', 'GRD', 'KNA', 'LCA', 'VCT', 'TTO', 'BHS', 'JAM',
  'MDV', 'MUS', 'SYC', 'COM', 'CPV', 'STP', 'BHR', 'SGP', 'BRN', 'TLS',
  'VAT', 'MCO', 'SMR', 'LIE', 'AND', 'MLT', 'LUX', 'CYP',
]);

// ================= EDUCATIONAL GEOGRAPHICAL SUBREGIONS DATABASE =================
const SUBREGIONS_DB = [
  {
    id: 'caribbean',
    code: 'REG-01',
    shortName: 'CARIBBEAN',
    name: 'Caribbean Islands',
    description: '13 sovereign island nations of the Caribbean Basin',
    view: { center: [-68, 17.5], zoom: 5.2 },
    members: ['ATG','BHS','BRB','CUB','DMA','DOM','GRD','HTI','JAM','KNA','LCA','VCT','TTO'],
  },
  {
    id: 'middle_east',
    code: 'REG-02',
    shortName: 'MIDDLE EAST',
    name: 'Middle East & Gulf',
    description: 'Arabian Peninsula, Levant, Iran, Turkey & Egypt',
    view: { center: [44, 27], zoom: 3.1 },
    members: ['BHR','CYP','EGY','IRN','IRQ','ISR','JOR','KWT','LBN','OMN','PSE','QAT','SAU','SYR','TUR','ARE','YEM'],
  },
  {
    id: 'balkans',
    code: 'REG-03',
    shortName: 'BALKANS',
    name: 'Balkans (SE Europe)',
    description: '11 states of the Balkan Peninsula in Southeast Europe',
    view: { center: [21, 42.5], zoom: 5.4 },
    members: ['ALB','BIH','BGR','HRV','GRC','MNE','MKD','ROU','SRB','SVN','TUR'],
  },
  {
    id: 'nordic_baltic',
    code: 'REG-04',
    shortName: 'NORDIC & BALTIC',
    name: 'Nordic & Baltic States',
    description: 'Scandinavia, Finland, Iceland & the Baltic nations',
    view: { center: [14, 61], zoom: 3.3 },
    members: ['DNK','EST','FIN','ISL','LVA','LTU','NOR','SWE'],
  },
  {
    id: 'central_america',
    code: 'REG-05',
    shortName: 'CENTRAL AMERICA',
    name: 'Central America',
    description: '7 nations bridging North and South America',
    view: { center: [-85, 13], zoom: 5.2 },
    members: ['BLZ','CRI','SLV','GTM','HND','NIC','PAN'],
  },
  {
    id: 'central_asia',
    code: 'REG-06',
    shortName: 'CENTRAL ASIA',
    name: 'Central Asia & Caucasus',
    description: 'The 5 Central Asian republics & South Caucasus',
    view: { center: [62, 43], zoom: 3.3 },
    members: ['KAZ','KGZ','TJK','TKM','UZB','ARM','AZE','GEO'],
  },
  {
    id: 'southeast_asia',
    code: 'REG-07',
    shortName: 'SE ASIA',
    name: 'Southeast Asia',
    description: 'Indochina & the Maritime Malay Archipelago',
    view: { center: [113, 6], zoom: 3.0 },
    members: ['BRN','KHM','IDN','LAO','MYS','MMR','PHL','SGP','THA','TLS','VNM'],
  },
  {
    id: 'south_asia',
    code: 'REG-08',
    shortName: 'SOUTH ASIA',
    name: 'South Asia (Subcontinent)',
    description: 'Indian subcontinent, Himalayas & Indian Ocean states',
    view: { center: [78, 22], zoom: 3.2 },
    members: ['AFG','BGD','BTN','IND','MDV','NPL','PAK','LKA'],
  },
  {
    id: 'east_asia',
    code: 'REG-09',
    shortName: 'EAST ASIA',
    name: 'East Asia',
    description: 'China, Japan, Korean Peninsula, Mongolia & Taiwan',
    view: { center: [116, 36], zoom: 2.7 },
    members: ['CHN','JPN','MNG','PRK','KOR','TWN'],
  },
  {
    id: 'north_africa',
    code: 'REG-10',
    shortName: 'NORTH AFRICA',
    name: 'North Africa & Maghreb',
    description: 'Mediterranean & Saharan northern African states',
    view: { center: [12, 26], zoom: 3.0 },
    members: ['DZA','EGY','LBY','MAR','MRT','SDN','TUN'],
  },
  {
    id: 'west_africa',
    code: 'REG-11',
    shortName: 'WEST AFRICA',
    name: 'West Africa',
    description: '15 coastal & Sahelian nations of Western Africa',
    view: { center: [-4, 11], zoom: 3.6 },
    members: ['BEN','BFA','CPV','CIV','GMB','GHA','GIN','GNB','LBR','MLI','NER','NGA','SEN','SLE','TGO'],
  },
  {
    id: 'east_africa',
    code: 'REG-12',
    shortName: 'EAST AFRICA',
    name: 'East Africa & Horn',
    description: 'Horn of Africa, Great Lakes & Indian Ocean islands',
    view: { center: [39, -2], zoom: 3.0 },
    members: ['BDI','COM','DJI','ERI','ETH','KEN','MDG','MWI','MUS','MOZ','RWA','SYC','SOM','SSD','TZA','UGA'],
  },
  {
    id: 'southern_africa',
    code: 'REG-13',
    shortName: 'CENTRAL & SOUTH AFRICA',
    name: 'Central & Southern Africa',
    description: 'Congo Basin & Southern African nations',
    view: { center: [20, -14], zoom: 2.9 },
    members: ['AGO','BWA','CMR','CAF','TCD','COG','COD','GNQ','SWZ','GAB','LSO','NAM','STP','ZAF','ZMB','ZWE'],
  },
  {
    id: 'andean',
    code: 'REG-14',
    shortName: 'ANDEAN STATES',
    name: 'Andean South America',
    description: 'Countries along the Andes mountain range',
    view: { center: [-70, -16], zoom: 2.5 },
    members: ['ARG','BOL','CHL','COL','ECU','PER','VEN'],
  },
  {
    id: 'western_europe',
    code: 'REG-15',
    shortName: 'WESTERN & CENTRAL EUROPE',
    name: 'Western & Central Europe',
    description: 'Alpine, Benelux, British Isles, Iberia & Microstates',
    view: { center: [6, 47], zoom: 4.2 },
    members: ['AND','AUT','BEL','CZE','FRA','DEU','HUN','IRL','ITA','LIE','LUX','MLT','MCO','NLD','POL','PRT','SMR','SVK','ESP','CHE','GBR','VAT'],
  },
  {
    id: 'pacific_islands',
    code: 'REG-16',
    shortName: 'PACIFIC ISLANDS',
    name: 'Pacific Island Nations',
    description: 'Micronesia, Melanesia & Polynesia (Oceania)',
    view: { center: [160, -8], zoom: 2.8 },
    members: ['FJI','KIR','MHL','FSM','NRU','PLW','PNG','WSM','SLB','TON','TUV','VUT'],
  },
];

// ================= INTERNATIONAL ORGANISATIONS DATABASE =================
const ORGANISATIONS_DB = [
  {
    id: 'eu',
    code: 'ORG-01',
    shortName: 'EU',
    name: 'European Union',
    description: '27 European political & economic union member states',
    view: { center: [15, 51], zoom: 3.4 },
    members: [
      'AUT','BEL','BGR','HRV','CYP','CZE','DNK','EST','FIN','FRA','DEU','GRC','HUN',
      'IRL','ITA','LVA','LTU','LUX','MLT','NLD','POL','PRT','ROU','SVK','SVN','ESP','SWE'
    ],
  },
  {
    id: 'nato',
    code: 'ORG-02',
    shortName: 'NATO',
    name: 'NATO Alliance',
    description: '32 North Atlantic Treaty Organization allies',
    view: { center: [-25, 48], zoom: 1.8 },
    members: [
      'ALB','BEL','BGR','CAN','HRV','CZE','DNK','EST','FIN','FRA','DEU','GRC','HUN',
      'ISL','ITA','LVA','LTU','LUX','MNE','NLD','MKD','NOR','POL','PRT','ROU','SVK',
      'SVN','ESP','SWE','TUR','GBR','USA'
    ],
  },
  {
    id: 'brics',
    code: 'ORG-03',
    shortName: 'BRICS+',
    name: 'BRICS+ Block',
    description: '10 major emerging national economies',
    view: { center: [42, 12], zoom: 1.4 },
    members: ['BRA','RUS','IND','CHN','ZAF','EGY','ETH','IRN','ARE','IDN'],
  },
  {
    id: 'asean',
    code: 'ORG-04',
    shortName: 'ASEAN',
    name: 'ASEAN',
    description: 'Association of Southeast Asian Nations',
    view: { center: [112, 8], zoom: 3.2 },
    members: ['BRN','KHM','IDN','LAO','MYS','MMR','PHL','SGP','THA','VNM','TLS'],
  },
  {
    id: 'g7',
    code: 'ORG-05',
    shortName: 'G7',
    name: 'Group of Seven (G7)',
    description: '7 advanced IMF economies',
    view: { center: [10, 38], zoom: 1.4 },
    members: ['CAN','FRA','DEU','ITA','JPN','GBR','USA'],
  },
  {
    id: 'g20',
    code: 'ORG-06',
    shortName: 'G20',
    name: 'Group of Twenty (G20)',
    description: '19 sovereign nations of the G20 forum',
    view: { center: [15, 18], zoom: 1.2 },
    members: [
      'ARG','AUS','BRA','CAN','CHN','FRA','DEU','IND','IDN','ITA','JPN','KOR','MEX',
      'RUS','SAU','ZAF','TUR','GBR','USA'
    ],
  },
  {
    id: 'au',
    code: 'ORG-07',
    shortName: 'AU',
    name: 'African Union',
    description: '54 continental member states across Africa',
    view: { center: [18, 2], zoom: 2.2 },
    members: [
      'DZA','AGO','BEN','BWA','BFA','BDI','CPV','CMR','CAF','TCD','COM','COG','COD',
      'CIV','DJI','EGY','GNQ','ERI','SWZ','ETH','GAB','GMB','GHA','GIN','GNB','KEN',
      'LSO','LBR','LBY','MDG','MWI','MLI','MRT','MUS','MAR','MOZ','NAM','NER','NGA',
      'RWA','STP','SEN','SYC','SLE','SOM','ZAF','SSD','SDN','TZA','TGO','TUN','UGA',
      'ZMB','ZWE'
    ],
  },
  {
    id: 'saarc',
    code: 'ORG-08',
    shortName: 'SAARC',
    name: 'SAARC',
    description: 'South Asian Association for Regional Cooperation',
    view: { center: [78, 24], zoom: 3.4 },
    members: ['AFG','BGD','BTN','IND','MDV','NPL','PAK','LKA'],
  },
  {
    id: 'gcc',
    code: 'ORG-09',
    shortName: 'GCC',
    name: 'Gulf Cooperation Council',
    description: '6 Arab states of the Persian Gulf',
    view: { center: [48, 25], zoom: 4.5 },
    members: ['BHR','KWT','OMN','QAT','SAU','ARE'],
  },
  {
    id: 'mercosur',
    code: 'ORG-10',
    shortName: 'MERCOSUR',
    name: 'MERCOSUR',
    description: 'Southern Common Market trade bloc',
    view: { center: [-58, -22], zoom: 2.5 },
    members: ['ARG','BOL','BRA','PRY','URY','VEN'],
  },
];

const PALETTE_POLYGON_SHADES = {
  swiss: ['#d1d5db', '#cbd5e1', '#9ca3af', '#b6c2cf'],
  obsidian: ['#1e293b', '#263449', '#334155', '#1a2436'],
  blueprint: ['#94b0c7', '#a6bfd4', '#7e9eb8', '#b5cadb'],
  parchment: ['#c5bba8', '#d1c7b5', '#b5aa96', '#c9bfb0'],
};

const COUNTRY_ALIASES = {
  USA: ['usa', 'us', 'united states of america', 'america'],
  GBR: ['uk', 'britain', 'great britain', 'england'],
  ARE: ['uae', 'emirates'],
  COD: ['drc', 'democratic republic of the congo', 'congo kinshasa', 'dr congo'],
  COG: ['congo', 'republic of congo', 'congo brazzaville'],
  CAF: ['car'],
  CZE: ['czech republic'],
  MKD: ['macedonia'],
  CIV: ['cote divoire', 'ivory coast'],
  CPV: ['cape verde'],
  TLS: ['east timor', 'timor leste'],
  SWZ: ['swaziland'],
  MMR: ['burma'],
  VAT: ['vatican', 'holy see'],
  RUS: ['russian federation'],
  KOR: ['korea', 'south korea'],
  PRK: ['north korea'],
  BIH: ['bosnia', 'bosnia herzegovina'],
  ATG: ['antigua'],
  KNA: ['st kitts', 'saint kitts', 'st kitts and nevis'],
  LCA: ['st lucia', 'saint lucia'],
  VCT: ['st vincent', 'saint vincent'],
  STP: ['sao tome', 'sao tome and principe'],
  TTO: ['trinidad'],
  FSM: ['federated states of micronesia'],
};

function normalizeAnswer(str) {
  return (str || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// ================= PERSISTENT STORAGE (LOCALSTORAGE + COOKIE + WINDOW.NAME VAULT) =================
const STORAGE_KEYS = {
  PALETTE: 'terra_palette_pref',
  RECORDS: 'terra_quiz_records_v1',
  PLAYER_NAME: 'terra_player_name',
  WINDOW_PREFIX: 'TERRA_VAULT::',
};

function readWindowVault() {
  try {
    if (typeof window.name === 'string' && window.name.startsWith(STORAGE_KEYS.WINDOW_PREFIX)) {
      return JSON.parse(window.name.slice(STORAGE_KEYS.WINDOW_PREFIX.length)) || {};
    }
  } catch (_) {}
  return {};
}

function writeWindowVault(patch) {
  try {
    const merged = { ...readWindowVault(), ...patch };
    window.name = STORAGE_KEYS.WINDOW_PREFIX + JSON.stringify(merged);
  } catch (_) {}
}

function setPreferenceCookie(name, value) {
  try {
    document.cookie = `${name}=${encodeURIComponent(value)}; max-age=31536000; path=/; SameSite=Lax`;
  } catch (_) {}
}

function getPreferenceCookie(name) {
  try {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return decodeURIComponent(match[2]);
  } catch (_) {}
  return null;
}

function loadSavedPalette() {
  try {
    const ls = localStorage.getItem(STORAGE_KEYS.PALETTE);
    if (ls) return ls;
  } catch (_) {}
  const ck = getPreferenceCookie(STORAGE_KEYS.PALETTE);
  if (ck) return ck;
  return readWindowVault().palette || 'swiss';
}

function savePalettePreference(paletteId) {
  try {
    localStorage.setItem(STORAGE_KEYS.PALETTE, paletteId);
  } catch (_) {}
  setPreferenceCookie(STORAGE_KEYS.PALETTE, paletteId);
  writeWindowVault({ palette: paletteId });
}

function loadSavedPlayerName() {
  try {
    const ls = localStorage.getItem(STORAGE_KEYS.PLAYER_NAME);
    if (ls) return ls;
  } catch (_) {}
  return readWindowVault().playerName || '';
}

function savePlayerName(name) {
  try {
    localStorage.setItem(STORAGE_KEYS.PLAYER_NAME, name);
  } catch (_) {}
  writeWindowVault({ playerName: name });
}

function loadQuizRecords() {
  let merged = { ...(readWindowVault().records || {}) };
  const ck = getPreferenceCookie(STORAGE_KEYS.RECORDS);
  if (ck) {
    try {
      merged = { ...merged, ...JSON.parse(ck) };
    } catch (_) {}
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.RECORDS);
    if (raw) merged = { ...merged, ...JSON.parse(raw) };
  } catch (_) {}
  return merged;
}

function persistAllQuizRecords(records) {
  const jsonStr = JSON.stringify(records);
  try {
    localStorage.setItem(STORAGE_KEYS.RECORDS, jsonStr);
  } catch (_) {}
  setPreferenceCookie(STORAGE_KEYS.RECORDS, jsonStr);
  writeWindowVault({ records });
}

function saveQuizRecord(quizKey, accuracyPct, timeSeconds, isFullCompletion) {
  const records = loadQuizRecords();
  const existing = records[quizKey];

  const isBetter =
    !existing ||
    (isFullCompletion && !existing.fullCompletion) ||
    accuracyPct > existing.accuracy ||
    (accuracyPct === existing.accuracy && timeSeconds < existing.time);

  if (isBetter) {
    records[quizKey] = {
      accuracy: accuracyPct,
      time: timeSeconds,
      fullCompletion: isFullCompletion,
    };
    persistAllQuizRecords(records);
  }
  return records[quizKey];
}

// ================= SUPABASE GLOBAL LEADERBOARD API FUNCTIONS =================
async function fetchGlobalLeaderboard(quizKey, containerEl) {
  if (!containerEl) return;
  containerEl.innerHTML = `<div class="lb-empty">FETCHING GLOBAL RANKINGS...</div>`;

  try {
    const url = `${SUPABASE_URL}/rest/v1/${SUPABASE_TABLE}?quiz_id=eq.${encodeURIComponent(
      quizKey
    )}&select=player_name,accuracy,time_seconds,created_at&order=accuracy.desc,time_seconds.asc&limit=10`;

    const res = await fetch(url, {
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
      },
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const rows = await res.json();

    if (!Array.isArray(rows) || rows.length === 0) {
      containerEl.innerHTML = `<div class="lb-empty">NO GLOBAL RECORDS YET — BE THE FIRST TO POST!</div>`;
      return;
    }

    let html = `
      <div class="lb-row lb-head">
        <span>RANK</span>
        <span>PLAYER</span>
        <span style="text-align:right">SCORE</span>
        <span style="text-align:right">TIME</span>
      </div>
    `;

    rows.forEach((r, idx) => {
      const safeName = String(r.player_name || 'ANONYMOUS')
        .replace(/[<>&"']/g, '')
        .slice(0, 16);
      const acc = Number(r.accuracy) || 0;
      const secs = Number(r.time_seconds) || 0;

      html += `
        <div class="lb-row">
          <span class="lb-rank">#${idx + 1}</span>
          <span class="lb-name">${safeName}</span>
          <span class="lb-acc">${acc}%</span>
          <span class="lb-time">${formatTime(secs)}</span>
        </div>
      `;
    });

    containerEl.innerHTML = html;
  } catch (err) {
    console.error('Leaderboard fetch error:', err);
    containerEl.innerHTML = `<div class="lb-empty">UNABLE TO LOAD LEADERBOARD // CHECK TABLE SETUP</div>`;
  }
}

// ================= GLOBAL STATE =================
const state = {
  mode: 'explore',
  palette: loadSavedPalette(),
  selectedQuizMechanic: 'locate',
  countries: [],
  countryByNumeric: new Map(),
  countryById: new Map(),
  orgsById: new Map(),
  subregionsById: new Map(),
  geometries: [],
  selectedCountry: null,
  activeFilter: 'all',
  showNames: true,
  showCapitals: false,
  showIslands: true,
  currentZoom: 1,
  zoomTier: 0,
  mapInitialized: false,
  standaloneLbQuizConfig: null,

  quiz: {
    active: false,
    finished: false,
    hasStarted: false,
    scoreSubmitted: false,
    finalScorePct: 100,
    mechanic: 'locate',
    config: null,
    queue: [],
    currentTarget: null,
    totalCount: 0,
    completedIds: new Set(),
    skippedIds: new Set(),
    missedIds: new Set(),
    wrongFlashId: null,
    mistakes: 0,
    correctClicks: 0,
    startTime: 0,
    elapsedSeconds: 0,
    timerInterval: null,
  },
};

ORGANISATIONS_DB.forEach((org) => state.orgsById.set(org.id, org));
SUBREGIONS_DB.forEach((sub) => state.subregionsById.set(sub.id, sub));

const CONTINENT_NAMES = {
  all: 'All Regions',
  europe: 'Europe',
  asia: 'Asia',
  africa: 'Africa',
  north_america: 'North America',
  south_america: 'South America',
  oceania: 'Oceania',
};

const CONTINENT_VIEWS = {
  all: { center: [10, 15], zoom: 1 },
  europe: { center: [15, 54], zoom: 3.3 },
  asia: { center: [90, 32], zoom: 2.0 },
  africa: { center: [18, 2], zoom: 2.2 },
  north_america: { center: [-92, 38], zoom: 2.0 },
  south_america: { center: [-60, -20], zoom: 2.2 },
  oceania: { center: [148, -24], zoom: 2.5 },
};

// ================= SAFE EVENT HELPER & NAVIGATION =================
function on(id, event, handler) {
  const el = document.getElementById(id);
  if (el) el.addEventListener(event, handler);
}

function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach((el) => el.classList.remove('active'));
  const target = document.getElementById(screenId);
  if (target) target.classList.add('active');
}

function openExploreAtlas() {
  stopQuizTimer();
  state.mode = 'explore';
  state.quiz.active = false;
  state.quiz.finished = false;
  document.getElementById('explore-hud')?.classList.remove('hidden');
  document.getElementById('quiz-hud')?.classList.add('hidden');
  document.getElementById('quiz-results-modal')?.classList.add('hidden');
  document.getElementById('quiz-feedback-toast')?.classList.add('hidden');
  document.getElementById('btn-reopen-results')?.classList.add('hidden');
  showScreen('atlas-screen');
  updateMapColorsAndVisibility();
}

function openQuizCatalog() {
  stopQuizTimer();
  state.quiz.active = false;
  state.quiz.finished = false;
  document.getElementById('btn-reopen-results')?.classList.add('hidden');
  renderQuizCatalog();
  showScreen('quiz-select-screen');
}

on('btn-open-atlas', 'click', openExploreAtlas);
on('btn-open-quizzes', 'click', openQuizCatalog);
on('btn-back-home', 'click', () => showScreen('home-screen'));
on('btn-atlas-to-quiz', 'click', openQuizCatalog);
on('btn-quiz-select-home', 'click', () => showScreen('home-screen'));
on('btn-quiz-select-atlas', 'click', openExploreAtlas);

// ================= PALETTE & SETTINGS DRAWER =================
function applyPalette(paletteId) {
  state.palette = PALETTE_POLYGON_SHADES[paletteId] ? paletteId : 'swiss';
  document.body.setAttribute('data-theme', state.palette);
  savePalettePreference(state.palette);

  document.querySelectorAll('.palette-option').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.palette === state.palette);
  });

  updateMapColorsAndVisibility();
}

function openSettingsModal() {
  const records = loadQuizRecords();
  const count = Object.keys(records).length;
  const countEl = document.getElementById('saved-records-count');
  if (countEl) countEl.textContent = `${count} PERSONAL RECORD${count === 1 ? '' : 'S'} SAVED`;
  document.getElementById('settings-modal')?.classList.remove('hidden');
}

on('btn-home-settings', 'click', openSettingsModal);
on('btn-quiz-settings', 'click', openSettingsModal);
on('btn-atlas-settings', 'click', openSettingsModal);
on('btn-close-settings', 'click', () => {
  document.getElementById('settings-modal')?.classList.add('hidden');
});

document.querySelectorAll('.palette-option').forEach((btn) => {
  btn.addEventListener('click', () => {
    applyPalette(btn.dataset.palette);
  });
});

on('btn-clear-records', 'click', () => {
  persistAllQuizRecords({});
  try {
    localStorage.removeItem(STORAGE_KEYS.RECORDS);
  } catch (_) {}
  const countEl = document.getElementById('saved-records-count');
  if (countEl) countEl.textContent = '0 PERSONAL RECORDS SAVED';
  renderQuizCatalog();
});

on('btn-mode-locate', 'click', () => {
  state.selectedQuizMechanic = 'locate';
  document.getElementById('btn-mode-locate')?.classList.add('active');
  document.getElementById('btn-mode-type')?.classList.remove('active');
  document.getElementById('mode-description-text').textContent =
    'Click the prompted country directly on the interactive globe map.';
  renderQuizCatalog();
});

on('btn-mode-type', 'click', () => {
  state.selectedQuizMechanic = 'type';
  document.getElementById('btn-mode-type')?.classList.add('active');
  document.getElementById('btn-mode-locate')?.classList.remove('active');
  document.getElementById('mode-description-text').textContent =
    'Type as many countries as you can remember. Give up anytime to reveal missed countries in red.';
  renderQuizCatalog();
});

// ================= STANDALONE LEADERBOARD MODAL =================
function openStandaloneLeaderboard(quizConfig) {
  state.standaloneLbQuizConfig = quizConfig;
  const modeLabel = quizConfig.mechanic === 'type' ? 'NAME ALL COUNTRIES' : 'LOCATE ON MAP';
  document.getElementById('standalone-lb-mode').textContent = `GLOBAL TOP 10 // ${modeLabel}`;
  document.getElementById('standalone-lb-title').textContent = quizConfig.shortTitle;
  document.getElementById('standalone-lb-modal')?.classList.remove('hidden');

  const quizKey = `${quizConfig.id}_${quizConfig.mechanic}`;
  fetchGlobalLeaderboard(quizKey, document.getElementById('standalone-lb-list'));
}

on('btn-close-standalone-lb', 'click', () => {
  document.getElementById('standalone-lb-modal')?.classList.add('hidden');
});
on('btn-standalone-close2', 'click', () => {
  document.getElementById('standalone-lb-modal')?.classList.add('hidden');
});
on('btn-standalone-play', 'click', () => {
  document.getElementById('standalone-lb-modal')?.classList.add('hidden');
  if (state.standaloneLbQuizConfig) {
    startQuiz(state.standaloneLbQuizConfig);
  }
});

// ================= D3 NATURAL EARTH I GLOBE MAP ENGINE (60FPS OPTIMIZED) =================
const svgNode = document.getElementById('world-map');
const svg = d3
  .select('#world-map')
  .attr('viewBox', '0 0 960 520')
  .attr('preserveAspectRatio', 'xMidYMid meet');

const mapGroup = svg.append('g');
const sphereLayer = mapGroup.append('g');
const countryLayer = mapGroup.append('g');
const microstateLayer = mapGroup.append('g');
const capitalLayer = mapGroup.append('g');
const labelLayer = mapGroup.append('g');

const projection = d3.geoNaturalEarth1().scale(195).translate([480, 260]);
const pathGenerator = d3.geoPath().projection(projection);
const graticuleGenerator = d3.geoGraticule().step([20, 20]);

function getZoomTier(k) {
  if (k >= 5.2) return 3;
  if (k >= 3.0) return 2;
  if (k >= 1.75) return 1;
  return 0;
}

let zoomRafPending = false;

const zoomBehavior = d3
  .zoom()
  .extent([
    [0, 0],
    [960, 520],
  ])
  .scaleExtent([1, 32])
  .translateExtent([
    [-200, -150],
    [1160, 670],
  ])
  .on('start', () => {
    svgNode?.classList.add('is-zooming');
  })
  .on('zoom', (event) => {
    mapGroup.attr('transform', event.transform);
    const k = event.transform.k;
    state.currentZoom = k;

    if (!zoomRafPending) {
      zoomRafPending = true;
      requestAnimationFrame(() => {
        zoomRafPending = false;
        if (svgNode) {
          svgNode.style.setProperty('--inv-scale', (1 / Math.pow(k, 0.74)).toFixed(4));
          svgNode.style.setProperty('--inv-sqrt-scale', (1 / Math.sqrt(k)).toFixed(4));
        }
        const newTier = getZoomTier(k);
        if (newTier !== state.zoomTier) {
          state.zoomTier = newTier;
          updateLabelsAndMarkersVisibility();
        }
      });
    }
  })
  .on('end', () => {
    svgNode?.classList.remove('is-zooming');
  });

svg.call(zoomBehavior);

svg.on('click', () => {
  if (state.mode === 'explore') {
    selectCountry(null);
  }
});

// ================= INITIALIZE BUILT-IN DATABASE & MAP =================
async function loadAllData() {
  applyPalette(state.palette);

  try {
    const resTopo = await fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json');
    const topology = await resTopo.json();
    const geojson = topojson.feature(topology, topology.objects.countries);
    state.geometries = geojson.features || [];

    const geoInfoByNumeric = new Map();
    state.geometries.forEach((geo) => {
      if (geo.id !== undefined && geo.id !== null) {
        const numCode = String(geo.id).padStart(3, '0');
        const centroid = d3.geoCentroid(geo);
        const steradians = d3.geoArea(geo);
        const approxAreaKm2 = Math.round((steradians * 510072000) / (4 * Math.PI));
        geoInfoByNumeric.set(numCode, {
          centroid,
          area: approxAreaKm2,
        });
      }
    });

    const orgMemberships = new Map();
    ORGANISATIONS_DB.forEach((org) => {
      org.members.forEach((iso) => {
        if (!orgMemberships.has(iso)) orgMemberships.set(iso, []);
        orgMemberships.get(iso).push(org);
      });
    });

    const subregionMemberships = new Map();
    SUBREGIONS_DB.forEach((sub) => {
      sub.members.forEach((iso) => {
        if (!subregionMemberships.has(iso)) subregionMemberships.set(iso, []);
        subregionMemberships.get(iso).push(sub);
      });
    });

    state.countries = RAW_COUNTRY_DB.map((row) => {
      const [numericCode, id, alpha2, name, capital, continents, trueCapitalCoords] = row;
      const geoData = geoInfoByNumeric.get(numericCode);
      const centroidCoords = geoData ? geoData.centroid : trueCapitalCoords || [0, 0];
      const capCoords = trueCapitalCoords || centroidCoords;
      const area = geoData ? geoData.area : 400;
      const hasPolygon = Boolean(geoData);
      const cleanName = name.trim();

      const acceptedNames = new Set([normalizeAnswer(cleanName)]);
      if (COUNTRY_ALIASES[id]) {
        COUNTRY_ALIASES[id].forEach((alias) => acceptedNames.add(normalizeAnswer(alias)));
      }

      const projectedCentroid = projection(centroidCoords) || [-999, -999];
      const projectedCapital = projection(capCoords) || [-999, -999];
      
      // Strictly identify true microstates to protect mainland country labels
      const isMicro = MICRO_ISLANDS_AND_STATES.has(id);

      return {
        id,
        alpha2,
        numericCode,
        name: cleanName,
        officialName: cleanName,
        acceptedNames,
        capitals: [capital],
        capitalCoords: capCoords,
        continents,
        subregions: subregionMemberships.get(id) || [],
        orgs: orgMemberships.get(id) || [],
        coordinates: centroidCoords,
        projectedCentroid,
        projectedCapital,
        // Lock microstate labels directly below their beacon rings (+14px offset)
        labelX: isMicro ? projectedCapital[0]  : projectedCentroid[0],
        labelY: isMicro ? projectedCapital[1] + 1 : projectedCentroid[1],
        area,
        hasPolygon,
        isSmallTarget: !hasPolygon || isMicro || area < 5000,
      };
    }).sort((a, b) => a.name.localeCompare(b.name));

    state.countries.forEach((c) => {
      state.countryByNumeric.set(c.numericCode, c);
      state.countryById.set(c.id, c);
    });

    const badge = document.getElementById('status-badge');
    if (badge) badge.textContent = `${state.countries.length} SOVEREIGN STATES READY`;

    initMap();
    renderQuizCatalog();
  } catch (err) {
    console.error('Error loading map:', err);
  }
}

function isCountryInActiveFilter(country) {
  if (state.activeFilter === 'all') return true;
  if (!country) return false;
  if (state.activeFilter.startsWith('org:')) {
    const orgId = state.activeFilter.slice(4);
    const org = state.orgsById.get(orgId);
    return org ? org.members.includes(country.id) : false;
  }
  if (state.activeFilter.startsWith('sub:')) {
    const subId = state.activeFilter.slice(4);
    const sub = state.subregionsById.get(subId);
    return sub ? sub.members.includes(country.id) : false;
  }
  return country.continents.includes(state.activeFilter);
}

function initMap() {
  if (state.mapInitialized) return;
  state.mapInitialized = true;

  sphereLayer
    .append('path')
    .datum({ type: 'Sphere' })
    .attr('class', 'ocean-sphere')
    .attr('d', pathGenerator);

  sphereLayer
    .append('path')
    .datum(graticuleGenerator())
    .attr('class', 'map-graticule')
    .attr('d', pathGenerator);

  countryLayer
    .selectAll('.country-path')
    .data(state.geometries)
    .enter()
    .append('path')
    .attr('class', 'country-path interactive')
    .attr('d', pathGenerator)
    .on('mousemove', (event, geo) => {
      const rawId = String(geo.id || '').padStart(3, '0');
      const country = state.countryByNumeric.get(rawId);

      if (state.mode === 'explore' || (state.mode === 'quiz' && state.quiz.finished)) {
        const label = country ? country.name : geo.properties?.name || 'Territory';
        showTooltip(event.clientX, event.clientY, label);
      } else {
        hideTooltip();
      }
    })
    .on('mouseleave', hideTooltip)
    .on('click', (event, geo) => {
      event.stopPropagation();
      const rawId = String(geo.id || '').padStart(3, '0');
      const country = state.countryByNumeric.get(rawId);
      if (!country) return;

      if (state.mode === 'quiz') {
        if (state.quiz.mechanic === 'locate' && state.quiz.active) {
          handleQuizCountryClick(country);
        }
      } else {
        selectCountry(country);
      }
    });

  const smallCountries = state.countries.filter((c) => c.isSmallTarget);
  const beaconGroups = microstateLayer
    .selectAll('.microstate-group')
    .data(smallCountries, (c) => c.id)
    .enter()
    .append('g')
    .attr('class', 'microstate-group')
    .attr('transform', (c) => `translate(${c.projectedCapital[0]}, ${c.projectedCapital[1]})`)
    .on('mousemove', (event, c) => {
      event.stopPropagation();
      if (state.mode === 'explore' || (state.mode === 'quiz' && state.quiz.finished)) {
        showTooltip(event.clientX, event.clientY, `${c.name} (${c.capitals[0]})`);
      }
    })
    .on('mouseleave', hideTooltip)
    .on('click', (event, c) => {
      event.stopPropagation();
      if (state.mode === 'quiz') {
        if (state.quiz.mechanic === 'locate' && state.quiz.active) {
          handleQuizCountryClick(c);
        }
      } else {
        selectCountry(c);
      }
    });

  beaconGroups.append('circle').attr('class', 'microstate-ring');
  beaconGroups.append('circle').attr('class', 'microstate-target');

  const capGroups = capitalLayer
    .selectAll('.cap-group')
    .data(state.countries, (c) => c.id)
    .enter()
    .append('g')
    .attr('class', 'cap-group')
    .attr('transform', (c) => `translate(${c.projectedCapital[0]}, ${c.projectedCapital[1]})`)
    .style('display', 'none')
    .on('mousemove', (event, c) => {
      event.stopPropagation();
      showTooltip(event.clientX, event.clientY, `★ ${c.capitals[0]} — Capital of ${c.name}`);
    })
    .on('mouseleave', hideTooltip)
    .on('click', (event, c) => {
      event.stopPropagation();
      selectCountry(c);
    });

  capGroups.append('circle').attr('class', 'cap-dot');

  capGroups
    .append('text')
    .attr('class', 'capital-label')
    .attr('dy', '-0.65em')
    .text((c) => c.capitals[0]);

  // 5. Country Name Labels (Using pre-calculated coordinates)
  labelLayer
    .selectAll('.country-label')
    .data(state.countries, (c) => c.id) // This (c) => c.id key prevents names from swapping!
    .enter()
    .append('text')
    .attr('class', 'country-label')
    .attr('x', (c) => c.labelX)
    .attr('y', (c) => c.labelY)
    .text((c) => c.name);

  updateMapColorsAndVisibility();
}

function getQuizCountryFill(country, idx, shades) {
  if (!country || !state.quiz.config) return 'var(--country-dim)';

  const quiz = state.quiz;
  const isEligible = quiz.config.targetCountryIds.includes(country.id);

  if (quiz.wrongFlashId === country.id) return '#ef4444';
  if (quiz.completedIds.has(country.id)) return '#10b981';
  if (quiz.missedIds.has(country.id)) return '#ef4444';
  if (quiz.skippedIds.has(country.id)) return '#f59e0b';
  if (!isEligible) return 'var(--country-dim)';

  return shades[idx % shades.length];
}

function updateMapColorsAndVisibility() {
  if (!state.mapInitialized) return;

  const isQuiz = state.mode === 'quiz' && state.quiz.config;
  const shades = PALETTE_POLYGON_SHADES[state.palette] || PALETTE_POLYGON_SHADES.swiss;

  countryLayer
    .selectAll('.country-path')
    .classed('interactive', (geo) => {
      const rawId = String(geo.id || '').padStart(3, '0');
      const country = state.countryByNumeric.get(rawId);
      if (isQuiz) {
        return Boolean(
          state.quiz.mechanic === 'locate' &&
            state.quiz.active &&
            country &&
            state.quiz.config.targetCountryIds.includes(country.id)
        );
      }
      return true;
    })
    .attr('fill', (geo, idx) => {
      const rawId = String(geo.id || '').padStart(3, '0');
      const country = state.countryByNumeric.get(rawId);

      if (isQuiz) {
        return getQuizCountryFill(country, idx, shades);
      }

      const isSelected = state.selectedCountry && country && state.selectedCountry.id === country.id;
      if (isSelected) return 'var(--country-selected)';
      if (!isCountryInActiveFilter(country)) return 'var(--country-dim)';
      return shades[idx % shades.length];
    })
    .attr('opacity', (geo) => {
      const rawId = String(geo.id || '').padStart(3, '0');
      const country = state.countryByNumeric.get(rawId);
      if (isQuiz) {
        const isEligible = country && state.quiz.config.targetCountryIds.includes(country.id);
        return isEligible ? 1 : 0.38;
      }
      return isCountryInActiveFilter(country) ? 1 : 0.38;
    });

  microstateLayer.selectAll('.microstate-group').each(function (c, idx) {
    const groupEl = this;
    const dotEl = groupEl.querySelector('.microstate-target');

    if (isQuiz) {
      const inQuiz = state.quiz.config.targetCountryIds.includes(c.id);
      groupEl.style.display = inQuiz ? null : 'none';
      if (dotEl && inQuiz) {
        dotEl.setAttribute('fill', getQuizCountryFill(c, idx, shades));
      }
      return;
    }

    if (!state.showIslands || !isCountryInActiveFilter(c)) {
      groupEl.style.display = 'none';
      return;
    }

    groupEl.style.display = null;
    const isSelected = state.selectedCountry && state.selectedCountry.id === c.id;
    if (dotEl) {
      dotEl.setAttribute(
        'fill',
        isSelected ? 'var(--country-selected)' : shades[idx % shades.length]
      );
    }
  });

  updateLabelsAndMarkersVisibility();
}

function updateLabelsAndMarkersVisibility() {
  if (!state.mapInitialized) return;

  const isQuiz = state.mode === 'quiz' && state.quiz.config;
  const tier = state.zoomTier;

  capitalLayer.selectAll('.cap-group').each(function (c) {
    const groupEl = this;
    if (isQuiz || !state.showCapitals || !isCountryInActiveFilter(c)) {
      groupEl.style.display = 'none';
      return;
    }

    const isSelected = state.selectedCountry && state.selectedCountry.id === c.id;
    const showPin = isSelected || tier >= 1 || c.area > 120000;
    groupEl.style.display = showPin ? null : 'none';

    if (showPin) {
      const dot = groupEl.querySelector('.cap-dot');
      const text = groupEl.querySelector('.capital-label');
      if (dot) dot.classList.toggle('selected', Boolean(isSelected));
      if (text) text.style.display = isSelected || tier >= 2 ? null : 'none';
    }
  });

  labelLayer.selectAll('.country-label').style('display', (c) => {
    const isTierVisible =
      (tier === 0 && c.area > 850000) ||
      (tier === 1 && c.area > 160000) ||
      (tier === 2 && (c.area > 18000 || c.isSmallTarget)) ||
      tier >= 3;

    if (isQuiz) {
      if (state.quiz.mechanic !== 'type' && !state.quiz.finished) return 'none';
      if (!state.quiz.config.targetCountryIds.includes(c.id)) return 'none';
      const isNamedOrMissed =
        state.quiz.completedIds.has(c.id) || state.quiz.missedIds.has(c.id);
      return isNamedOrMissed && (isTierVisible || state.quiz.finished) ? null : 'none';
    }

    if (!state.showNames || !isCountryInActiveFilter(c)) return 'none';
    if (state.selectedCountry && state.selectedCountry.id === c.id) return null;
    return isTierVisible ? null : 'none';
  });
}

// ================= QUIZ CATALOG & ENGINE =================
function getQuizTargetCountries(continentKey) {
  return state.countries.filter((c) => {
    if (continentKey === 'all') return true;
    return c.continents.includes(continentKey);
  });
}

function getRecordLabelHtml(quizId, mechanic) {
  const records = loadQuizRecords();
  const rec = records[`${quizId}_${mechanic}`];
  if (!rec) return `<span>NO RECORD</span>`;
  return `<span class="best-record-pill">★ BEST: ${rec.accuracy}% IN ${formatTime(rec.time)}</span>`;
}

function createQuizTileElement(code, modeBadge, title, desc, countLabel, quizConfig) {
  const tile = document.createElement('div');
  tile.className = 'quiz-tile';
  tile.innerHTML = `
    <div class="quiz-tile-top">
      <span>${code} // ${modeBadge}</span>
      <span>↗</span>
    </div>
    <div>
      <div class="quiz-tile-title">${title}</div>
      ${desc ? `<div class="quiz-tile-desc">${desc}</div>` : ''}
    </div>
    <div class="quiz-tile-bottom">
      <span>${countLabel}</span>
      ${getRecordLabelHtml(quizConfig.id, quizConfig.mechanic)}
      <button class="tile-lb-btn" title="View Global Top 10 Leaderboard">🏆 TOP 10</button>
    </div>
  `;

  tile.addEventListener('click', (e) => {
    if (e.target.closest('.tile-lb-btn')) {
      e.stopPropagation();
      openStandaloneLeaderboard(quizConfig);
      return;
    }
    startQuiz(quizConfig);
  });

  return tile;
}

function renderQuizCatalog() {
  const continentGrid = document.getElementById('continent-quiz-grid');
  const subregionGrid = document.getElementById('subregion-quiz-grid');
  const orgGrid = document.getElementById('org-quiz-grid');
  const worldGrid = document.getElementById('world-quiz-grid');
  if (!continentGrid || !subregionGrid || !orgGrid || !worldGrid) return;

  continentGrid.innerHTML = '';
  subregionGrid.innerHTML = '';
  orgGrid.innerHTML = '';
  worldGrid.innerHTML = '';

  const mechanic = state.selectedQuizMechanic;
  const modeBadge = mechanic === 'type' ? 'NAME ALL' : 'LOCATE';

  // 1. Continents
  const continentList = [
    { key: 'europe', code: 'EU-01', title: 'Europe' },
    { key: 'asia', code: 'AS-02', title: 'Asia' },
    { key: 'africa', code: 'AF-03', title: 'Africa' },
    { key: 'north_america', code: 'NA-04', title: 'North America' },
    { key: 'south_america', code: 'SA-05', title: 'South America' },
    { key: 'oceania', code: 'OC-06', title: 'Oceania' },
  ];

  continentList.forEach((item) => {
    const targets = getQuizTargetCountries(item.key);
    const quizConfig = {
      id: `continent-${item.key}`,
      mechanic,
      title: `${item.title.toUpperCase()} // ${modeBadge}`,
      shortTitle: item.title.toUpperCase(),
      targetCountryIds: targets.map((c) => c.id),
      view: CONTINENT_VIEWS[item.key],
    };
    continentGrid.appendChild(
      createQuizTileElement(
        item.code,
        modeBadge,
        item.title,
        '',
        `${targets.length} STATES`,
        quizConfig
      )
    );
  });

  // 2. Geographical Subregions
  SUBREGIONS_DB.forEach((sub) => {
    const validMembers = sub.members.filter((iso) => state.countryById.has(iso));
    const quizConfig = {
      id: `sub-${sub.id}`,
      mechanic,
      title: `${sub.shortName} // ${modeBadge}`,
      shortTitle: sub.name.toUpperCase(),
      targetCountryIds: validMembers,
      view: sub.view,
    };
    subregionGrid.appendChild(
      createQuizTileElement(
        sub.code,
        modeBadge,
        sub.name,
        sub.description,
        `${validMembers.length} STATES`,
        quizConfig
      )
    );
  });

  // 3. International Organisations
  ORGANISATIONS_DB.forEach((org) => {
    const validMembers = org.members.filter((iso) => state.countryById.has(iso));
    const quizConfig = {
      id: `org-${org.id}`,
      mechanic,
      title: `${org.shortName} // ${modeBadge}`,
      shortTitle: org.name.toUpperCase(),
      targetCountryIds: validMembers,
      view: org.view,
    };
    orgGrid.appendChild(
      createQuizTileElement(
        org.code,
        modeBadge,
        org.name,
        org.description,
        `${validMembers.length} MEMBERS`,
        quizConfig
      )
    );
  });

  // 4. Complete World
  const allTargets = getQuizTargetCountries('all');
  const worldConfig = {
    id: 'world-all',
    mechanic,
    title: `WORLD // ${modeBadge}`,
    shortTitle: 'WORLD COUNTRIES',
    targetCountryIds: allTargets.map((c) => c.id),
    view: CONTINENT_VIEWS.all,
  };
  worldGrid.appendChild(
    createQuizTileElement(
      'GL-01',
      modeBadge,
      'World Sovereign States',
      'Complete global sovereign geography test',
      `${allTargets.length} COUNTRIES`,
      worldConfig
    )
  );
}

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function startQuiz(config) {
  selectCountry(null);
  hideTooltip();

  state.mode = 'quiz';
  const mechanic = config.mechanic || 'locate';
  const shuffledIds = shuffleArray(config.targetCountryIds);

  state.quiz = {
    active: true,
    finished: false,
    hasStarted: false,
    scoreSubmitted: false,
    finalScorePct: 100,
    mechanic,
    config,
    queue: shuffledIds,
    currentTarget: mechanic === 'locate' ? state.countryById.get(shuffledIds[0]) || null : null,
    totalCount: shuffledIds.length,
    completedIds: new Set(),
    skippedIds: new Set(),
    missedIds: new Set(),
    wrongFlashId: null,
    mistakes: 0,
    correctClicks: 0,
    startTime: 0,
    elapsedSeconds: 0,
    timerInterval: null,
  };

  document.getElementById('explore-hud')?.classList.add('hidden');
  document.getElementById('quiz-hud')?.classList.remove('hidden');
  document.getElementById('quiz-results-modal')?.classList.add('hidden');
  document.getElementById('quiz-feedback-toast')?.classList.add('hidden');
  document.getElementById('btn-reopen-results')?.classList.add('hidden');

  const locateBox = document.getElementById('quiz-locate-box');
  const typeBox = document.getElementById('quiz-type-box');
  const typeInput = document.getElementById('quiz-type-input');

  if (mechanic === 'type') {
    locateBox?.classList.add('hidden');
    typeBox?.classList.remove('hidden');
    if (typeInput) {
      typeInput.value = '';
      setTimeout(() => typeInput.focus(), 80);
    }
  } else {
    typeBox?.classList.add('hidden');
    locateBox?.classList.remove('hidden');
  }

  showScreen('atlas-screen');
  updateQuizHUD();
  updateMapColorsAndVisibility();

  if (config.view) {
    flyToCoordinates(config.view.center, config.view.zoom);
  }

  stopQuizTimer();
  const timerEl = document.getElementById('quiz-timer');
  if (timerEl) timerEl.textContent = '00:00';
}

function ensureTimerStarted() {
  if (!state.quiz.hasStarted && state.quiz.active) {
    state.quiz.hasStarted = true;
    state.quiz.startTime = Date.now();
    startQuizTimer();
  }
}

function startQuizTimer() {
  stopQuizTimer();
  const timerEl = document.getElementById('quiz-timer');
  if (timerEl) timerEl.textContent = '00:00';
  state.quiz.timerInterval = setInterval(() => {
    state.quiz.elapsedSeconds = Math.floor((Date.now() - state.quiz.startTime) / 1000);
    if (timerEl) timerEl.textContent = formatTime(state.quiz.elapsedSeconds);
  }, 500);
}

function stopQuizTimer() {
  if (state.quiz.timerInterval) {
    clearInterval(state.quiz.timerInterval);
    state.quiz.timerInterval = null;
  }
}

function formatTime(totalSeconds) {
  const mins = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
  const secs = String(totalSeconds % 60).padStart(2, '0');
  return `${mins}:${secs}`;
}

function updateQuizHUD() {
  const q = state.quiz;
  const doneCount = q.completedIds.size + q.skippedIds.size;

  document.getElementById('quiz-title-label').textContent = q.config.title;
  document.getElementById('quiz-progress-text').textContent =
    `${q.completedIds.size} / ${q.totalCount} FOUND`;

  if (q.mechanic === 'locate') {
    const totalAttempts = q.correctClicks + q.mistakes;
    const accuracy =
      totalAttempts === 0 ? 100 : Math.round((q.correctClicks / totalAttempts) * 100);
    document.getElementById('quiz-stat-label').textContent = 'ACCURACY';
    document.getElementById('quiz-accuracy').textContent = `${accuracy}%`;
    document.getElementById('quiz-target-name').textContent = q.currentTarget
      ? q.currentTarget.name.toUpperCase()
      : 'COMPLETE';
  } else {
    const remaining = q.totalCount - q.completedIds.size;
    document.getElementById('quiz-stat-label').textContent = 'REMAINING';
    document.getElementById('quiz-accuracy').textContent = `${remaining}`;
  }

  const pct = q.totalCount > 0 ? (doneCount / q.totalCount) * 100 : 0;
  document.getElementById('quiz-progress-fill').style.width = `${pct}%`;
}

let feedbackTimeout = null;
function showFeedbackToast(message, bgColor = '#ef4444') {
  const toast = document.getElementById('quiz-feedback-toast');
  if (!toast) return;
  toast.textContent = message;
  toast.style.backgroundColor = bgColor;
  toast.classList.remove('hidden');

  if (feedbackTimeout) clearTimeout(feedbackTimeout);
  feedbackTimeout = setTimeout(() => {
    toast.classList.add('hidden');
  }, 1400);
}

// ================= MECHANIC 1: LOCATE ON MAP =================
function handleQuizCountryClick(clickedCountry) {
  const q = state.quiz;
  if (!q.active || q.mechanic !== 'locate' || !q.currentTarget) return;

  ensureTimerStarted();

  if (!q.config.targetCountryIds.includes(clickedCountry.id)) {
    showFeedbackToast(`${clickedCountry.name.toUpperCase()} IS NOT IN ${q.config.shortTitle}`, '#52525b');
    return;
  }

  if (q.completedIds.has(clickedCountry.id) || q.skippedIds.has(clickedCountry.id)) {
    return;
  }

  if (clickedCountry.id === q.currentTarget.id) {
    q.completedIds.add(clickedCountry.id);
    q.correctClicks += 1;
    q.wrongFlashId = null;
    document.getElementById('quiz-feedback-toast')?.classList.add('hidden');
    advanceQuizQueue();
  } else {
    q.mistakes += 1;
    q.wrongFlashId = clickedCountry.id;
    showFeedbackToast(`INCORRECT — THAT IS ${clickedCountry.name.toUpperCase()}`, '#ef4444');
    updateQuizHUD();
    updateMapColorsAndVisibility();

    setTimeout(() => {
      if (state.quiz.wrongFlashId === clickedCountry.id) {
        state.quiz.wrongFlashId = null;
        updateMapColorsAndVisibility();
      }
    }, 650);
  }
}

function advanceQuizQueue() {
  const q = state.quiz;
  q.queue.shift();

  if (q.queue.length === 0) {
    q.currentTarget = null;
    updateQuizHUD();
    updateMapColorsAndVisibility();
    finishQuiz(false);
    return;
  }

  q.currentTarget = state.countryById.get(q.queue[0]) || null;
  updateQuizHUD();
  updateMapColorsAndVisibility();
}

on('btn-skip-question', 'click', () => {
  const q = state.quiz;
  if (!q.active || q.mechanic !== 'locate' || !q.currentTarget) return;

  ensureTimerStarted();

  const skippedCountry = q.currentTarget;
  q.skippedIds.add(skippedCountry.id);
  q.mistakes += 1;

  showFeedbackToast(`REVEALED: ${skippedCountry.name.toUpperCase()}`, '#f59e0b');

  let revealZoom = Math.max(state.currentZoom, 3.2);
  if (skippedCountry.isSmallTarget) revealZoom = 6.5;
  flyToCoordinates(skippedCountry.capitalCoords, revealZoom);

  advanceQuizQueue();
});

// ================= MECHANIC 2: TYPE & RECALL ALL COUNTRIES =================
const typeInputEl = document.getElementById('quiz-type-input');

if (typeInputEl) {
  typeInputEl.addEventListener('input', () => {
    const q = state.quiz;
    if (!q.active || q.mechanic !== 'type') return;

    ensureTimerStarted();

    const typed = normalizeAnswer(typeInputEl.value);
    if (!typed) return;

    let matchedCountry = null;
    for (const id of q.config.targetCountryIds) {
      if (q.completedIds.has(id)) continue;
      const country = state.countryById.get(id);
      if (country && country.acceptedNames.has(typed)) {
        matchedCountry = country;
        break;
      }
    }

    if (matchedCountry) {
      q.completedIds.add(matchedCountry.id);
      q.correctClicks += 1;
      typeInputEl.value = '';
      showFeedbackToast(`✓ ${matchedCountry.name.toUpperCase()}`, '#10b981');
      updateQuizHUD();
      updateMapColorsAndVisibility();

      if (q.completedIds.size === q.totalCount) {
        finishQuiz(false);
      }
    }
  });
}

on('btn-give-up', 'click', () => {
  const q = state.quiz;
  if (!q.active || q.mechanic !== 'type') return;

  ensureTimerStarted();

  q.config.targetCountryIds.forEach((id) => {
    if (!q.completedIds.has(id)) {
      q.missedIds.add(id);
    }
  });

  finishQuiz(true);
});

// ================= FINISH QUIZ & LIVE LEADERBOARD INTEGRATION =================
function finishQuiz(gaveUp = false) {
  stopQuizTimer();
  const q = state.quiz;
  q.active = false;
  q.finished = true;
  q.elapsedSeconds = Math.max(1, Math.floor((Date.now() - q.startTime) / 1000));

  updateMapColorsAndVisibility();

  const missedBox = document.getElementById('missed-countries-container');
  const missedList = document.getElementById('missed-countries-list');

  document.getElementById('results-category-tag').textContent = gaveUp
    ? 'CHALLENGE ENDED // GAVE UP'
    : 'CHALLENGE COMPLETE';
  document.getElementById('results-quiz-title').textContent = q.config.shortTitle;
  document.getElementById('res-found').textContent = `${q.completedIds.size} / ${q.totalCount}`;
  document.getElementById('res-time').textContent = formatTime(q.elapsedSeconds);

  let finalScorePct = 100;

  if (q.mechanic === 'type') {
    finalScorePct =
      q.totalCount > 0 ? Math.round((q.completedIds.size / q.totalCount) * 100) : 100;
    document.getElementById('res-box1-label').textContent = 'RECALL SCORE';
    document.getElementById('res-accuracy').textContent = `${finalScorePct}%`;
    document.getElementById('res-box4-label').textContent = 'MISSED (RED)';
    document.getElementById('res-mistakes').textContent = String(q.missedIds.size);

    if (q.missedIds.size > 0 && missedBox && missedList) {
      missedList.innerHTML = '';
      Array.from(q.missedIds)
        .map((id) => state.countryById.get(id))
        .filter(Boolean)
        .sort((a, b) => a.name.localeCompare(b.name))
        .forEach((c) => {
          const tag = document.createElement('span');
          tag.className = 'missed-tag';
          tag.textContent = c.name;
          tag.title = 'Click to locate on map';
          tag.addEventListener('click', () => {
            document.getElementById('quiz-results-modal')?.classList.add('hidden');
            document.getElementById('btn-reopen-results')?.classList.remove('hidden');
            flyToCoordinates(c.capitalCoords, c.isSmallTarget ? 7 : 4);
          });
          missedList.appendChild(tag);
        });
      missedBox.classList.remove('hidden');
    } else if (missedBox) {
      missedBox.classList.add('hidden');
    }
  } else {
    const totalAttempts = q.correctClicks + q.mistakes;
    finalScorePct =
      totalAttempts === 0 ? 100 : Math.round((q.correctClicks / totalAttempts) * 100);
    document.getElementById('res-box1-label').textContent = 'FINAL ACCURACY';
    document.getElementById('res-accuracy').textContent = `${finalScorePct}%`;
    document.getElementById('res-box4-label').textContent = 'WRONG / SKIPPED';
    document.getElementById('res-mistakes').textContent = String(q.mistakes);
    if (missedBox) missedBox.classList.add('hidden');
  }

  q.finalScorePct = finalScorePct;

  const recordKey = `${q.config.id}_${q.mechanic}`;
  const isFullCompletion = q.completedIds.size === q.totalCount;
  const bestRecord = saveQuizRecord(
    recordKey,
    finalScorePct,
    q.elapsedSeconds,
    isFullCompletion
  );

  const bestBanner = document.getElementById('personal-best-banner');
  if (bestBanner && bestRecord) {
    bestBanner.textContent = `★ YOUR PERSONAL BEST: ${bestRecord.accuracy}% IN ${formatTime(bestRecord.time)}`;
  }

  const nameInput = document.getElementById('lb-player-name');
  if (nameInput) nameInput.value = loadSavedPlayerName();

  const submitBtn = document.getElementById('btn-submit-lb');
  const statusEl = document.getElementById('lb-submit-status');
  if (submitBtn) {
    submitBtn.disabled = false;
    submitBtn.textContent = 'POST SCORE ↗';
  }
  if (statusEl) statusEl.textContent = '';

  fetchGlobalLeaderboard(recordKey, document.getElementById('results-lb-list'));

  renderQuizCatalog();
  document.getElementById('quiz-results-modal')?.classList.remove('hidden');
}

on('btn-submit-lb', 'click', async () => {
  const q = state.quiz;
  if (!q.config || q.scoreSubmitted) return;

  const nameInput = document.getElementById('lb-player-name');
  const submitBtn = document.getElementById('btn-submit-lb');
  const statusEl = document.getElementById('lb-submit-status');

  const validation = validatePlayerName(nameInput?.value);

  if (!validation.valid) {
  
    if (statusEl) {
      statusEl.style.color = 'var(--quiz-wrong)';
      statusEl.textContent = validation.reason;
    }
  
    return;
  }
  
  const playerName = validation.cleanName;
  const recordKey = `${q.config.id}_${q.mechanic}`;
  
  // Save only validated names
  savePlayerName(playerName);
  
  if (nameInput) {
    nameInput.value = playerName;
  }

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = 'POSTING...';
  }
  if (statusEl) {
    statusEl.style.color = 'var(--ink-muted)';
    statusEl.textContent = 'VALIDATING & UPLOADING...';
  }

  try {
    await submitScoreToSupabase(recordKey, playerName, q.finalScorePct, q.elapsedSeconds);
    q.scoreSubmitted = true;
    if (submitBtn) submitBtn.textContent = '✓ POSTED';
    if (statusEl) {
      statusEl.style.color = 'var(--quiz-correct)';
      statusEl.textContent = 'SCORE PUBLISHED TO GLOBAL LEADERBOARD!';
    }
    fetchGlobalLeaderboard(recordKey, document.getElementById('results-lb-list'));
  } catch (err) {
    console.error('Failed to submit score:', err);
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = 'POST SCORE ↗';
    }
    if (statusEl) {
      statusEl.style.color = 'var(--quiz-wrong)';
      statusEl.textContent = err.isValidationError
        ? err.message
        : 'ERROR: UNABLE TO POST SCORE.';
    }
  }
});

on('btn-refresh-lb', 'click', () => {
  const q = state.quiz;
  if (!q.config) return;
  const recordKey = `${q.config.id}_${q.mechanic}`;
  fetchGlobalLeaderboard(recordKey, document.getElementById('results-lb-list'));
});

on('btn-inspect-map', 'click', () => {
  document.getElementById('quiz-results-modal')?.classList.add('hidden');
  document.getElementById('btn-reopen-results')?.classList.remove('hidden');
});

on('btn-reopen-results', 'click', () => {
  document.getElementById('btn-reopen-results')?.classList.add('hidden');
  document.getElementById('quiz-results-modal')?.classList.remove('hidden');
});

on('btn-quit-quiz', 'click', openQuizCatalog);
on('btn-retry-quiz', 'click', () => {
  if (state.quiz.config) startQuiz(state.quiz.config);
});
on('btn-results-to-catalog', 'click', openQuizCatalog);

// ================= TOOLTIP & INFO PANEL (EXPLORE MODE) =================
const tooltipEl = document.getElementById('map-tooltip');

function showTooltip(x, y, text) {
  if (!tooltipEl) return;
  tooltipEl.textContent = text;
  tooltipEl.style.left = `${x + 14}px`;
  tooltipEl.style.top = `${y + 14}px`;
  tooltipEl.classList.remove('hidden');
}

function hideTooltip() {
  if (tooltipEl) tooltipEl.classList.add('hidden');
}

function selectCountry(country) {
  state.selectedCountry = country;
  updateMapColorsAndVisibility();

  const panel = document.getElementById('country-info-panel');
  if (!panel) return;
  if (!country || state.mode === 'quiz') {
    panel.classList.add('hidden');
    return;
  }

  document.getElementById('info-flag').src = `https://flagcdn.com/w160/${country.alpha2}.png`;
  document.getElementById('info-name').textContent = country.name;
  document.getElementById('info-iso').textContent = country.id;
  document.getElementById('info-capital').textContent =
    country.capitals.length > 0 ? country.capitals.join(', ') : 'None';
  document.getElementById('info-continent').textContent = country.continents
    .map((c) => CONTINENT_NAMES[c])
    .join(' / ');

  const subEl = document.getElementById('info-subregion');
  if (subEl) {
    subEl.textContent =
      country.subregions && country.subregions.length > 0
        ? country.subregions.map((s) => s.name).join(' • ')
        : 'Sovereign Region';
  }

  const orgWrap = document.getElementById('info-orgs');
  if (orgWrap) {
    orgWrap.innerHTML = '';
    if (country.orgs && country.orgs.length > 0) {
      country.orgs.forEach((org) => {
        const badge = document.createElement('span');
        badge.className = 'org-badge';
        badge.textContent = org.shortName;
        badge.title = org.name;
        orgWrap.appendChild(badge);
      });
    } else {
      orgWrap.innerHTML = `<span class="info-value" style="font-size:12px;color:var(--ink-muted)">UN Member State</span>`;
    }
  }

  const [lng, lat] = country.capitalCoords;
  const latStr = `${Math.abs(lat).toFixed(2)}° ${lat >= 0 ? 'N' : 'S'}`;
  const lngStr = `${Math.abs(lng).toFixed(2)}° ${lng >= 0 ? 'E' : 'W'}`;
  document.getElementById('info-coords-val').textContent = `${latStr}, ${lngStr}`;

  panel.classList.remove('hidden');
}

on('btn-close-panel', 'click', () => selectCountry(null));

// ================= CAMERA FOCUS & CONTROLS =================
function flyToCoordinates(coords, zoomLevel) {
  const projected = projection(coords);
  if (!projected) return;
  const [x, y] = projected;

  const transform = d3.zoomIdentity
    .translate(480 - x * zoomLevel, 260 - y * zoomLevel)
    .scale(zoomLevel);

  svg.transition().duration(600).call(zoomBehavior.transform, transform);
}

function focusOnCountry(country) {
  selectCountry(country);
  let targetZoom = 4.5;
  if (country.area > 3000000) targetZoom = 2.5;
  else if (country.isSmallTarget) targetZoom = 8.5;
  flyToCoordinates(country.capitalCoords, targetZoom);
}

on('btn-focus-country', 'click', () => {
  if (state.selectedCountry) focusOnCountry(state.selectedCountry);
});

on('continent-filter', 'change', (e) => {
  state.activeFilter = e.target.value;
  updateMapColorsAndVisibility();

  if (state.activeFilter.startsWith('org:')) {
    const org = state.orgsById.get(state.activeFilter.slice(4));
    if (org?.view) flyToCoordinates(org.view.center, org.view.zoom);
  } else if (state.activeFilter.startsWith('sub:')) {
    const sub = state.subregionsById.get(state.activeFilter.slice(4));
    if (sub?.view) flyToCoordinates(sub.view.center, sub.view.zoom);
  } else {
    const view = CONTINENT_VIEWS[state.activeFilter];
    if (view) flyToCoordinates(view.center, view.zoom);
  }
});

on('btn-toggle-names', 'click', (e) => {
  state.showNames = !state.showNames;
  e.currentTarget.classList.toggle('active', state.showNames);
  updateLabelsAndMarkersVisibility();
});

on('btn-toggle-capitals', 'click', (e) => {
  state.showCapitals = !state.showCapitals;
  e.currentTarget.classList.toggle('active', state.showCapitals);
  updateLabelsAndMarkersVisibility();
});

on('btn-toggle-islands', 'click', (e) => {
  state.showIslands = !state.showIslands;
  e.currentTarget.classList.toggle('active', state.showIslands);
  updateMapColorsAndVisibility();
});

on('btn-zoom-in', 'click', () => {
  svg.transition().duration(250).call(zoomBehavior.scaleBy, 1.5);
});

on('btn-zoom-out', 'click', () => {
  svg.transition().duration(250).call(zoomBehavior.scaleBy, 1 / 1.5);
});

on('btn-zoom-reset', 'click', () => {
  if (state.mode === 'quiz' && state.quiz.config?.view) {
    flyToCoordinates(state.quiz.config.view.center, state.quiz.config.view.zoom);
    return;
  }
  state.activeFilter = 'all';
  const filterEl = document.getElementById('continent-filter');
  if (filterEl) filterEl.value = 'all';
  selectCountry(null);
  flyToCoordinates([10, 15], 1);
});

// ================= SEARCH BAR AUTOCOMPLETE =================
const searchInput = document.getElementById('country-search');
const searchDropdown = document.getElementById('search-results');

if (searchInput && searchDropdown) {
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();
    searchDropdown.innerHTML = '';

    if (!query) {
      searchDropdown.classList.add('hidden');
      return;
    }

    const matches = state.countries
      .filter(
        (c) =>
          c.name.toLowerCase().includes(query) ||
          c.id.toLowerCase() === query ||
          c.capitals.some((cap) => cap.toLowerCase().includes(query))
      )
      .slice(0, 8);

    if (matches.length === 0) {
      searchDropdown.classList.add('hidden');
      return;
    }

    matches.forEach((country) => {
      const row = document.createElement('div');
      row.className = 'search-item';
      row.innerHTML = `
        <div class="search-item-left">
          <img src="https://flagcdn.com/w40/${country.alpha2}.png" alt="" />
          <span>${country.name}</span>
        </div>
        <span class="search-item-right">${country.capitals[0] || country.id}</span>
      `;
      row.addEventListener('mousedown', () => {
        searchInput.value = '';
        searchDropdown.classList.add('hidden');
        focusOnCountry(country);
      });
      searchDropdown.appendChild(row);
    });

    searchDropdown.classList.remove('hidden');
  });

  searchInput.addEventListener('blur', () => {
    setTimeout(() => searchDropdown.classList.add('hidden'), 150);
  });
}

// Start immediately
loadAllData();
