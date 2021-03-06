var qbData = [
{'quarterback': 'Alex Smith', 'team': 'KCC', 'home_away': 'vs.', 'opponent': 'OAK', 'adjPF': '22.4', 'adjPA': '21.6', 'Proj': '22.0'},
{'quarterback': 'Tom Brady', 'team': 'NEP', 'home_away': '@', 'opponent': 'MIA', 'adjPF': '22.3', 'adjPA': '19.7', 'Proj': '21.1'},
{'quarterback': 'Matthew Stafford', 'team': 'DET', 'home_away': '@', 'opponent': 'TBB', 'adjPF': '21.6', 'adjPA': '20.0', 'Proj': '20.9'},
{'quarterback': 'Carson Wentz', 'team': 'PHI', 'home_away': '@', 'opponent': 'LAR', 'adjPF': '23.1', 'adjPA': '14.2', 'Proj': '19.1'},
{'quarterback': 'Josh McCown', 'team': 'NYJ', 'home_away': '@', 'opponent': 'DEN', 'adjPF': '19.6', 'adjPA': '18.3', 'Proj': '19.0'},
{'quarterback': 'Drew Brees', 'team': 'NOS', 'home_away': '@', 'opponent': 'ATL', 'adjPF': '19.5', 'adjPA': '17.9', 'Proj': '18.8'},
{'quarterback': 'Jameis Winston', 'team': 'TBB', 'home_away': 'vs.', 'opponent': 'DET', 'adjPF': '18.0', 'adjPA': '19.6', 'Proj': '18.7'},
{'quarterback': 'Dak Prescott', 'team': 'DAL', 'home_away': '@', 'opponent': 'NYG', 'adjPF': '18.1', 'adjPA': '19.3', 'Proj': '18.6'},
{'quarterback': 'Case Keenum', 'team': 'MIN', 'home_away': '@', 'opponent': 'CAR', 'adjPF': '19.5', 'adjPA': '16.5', 'Proj': '18.2'},
{'quarterback': 'Blaine Gabbert', 'team': 'ARI', 'home_away': 'vs.', 'opponent': 'TEN', 'adjPF': '16.3', 'adjPA': '20.3', 'Proj': '18.1'},
{'quarterback': 'Russell Wilson', 'team': 'SEA', 'home_away': '@', 'opponent': 'JAC', 'adjPF': '24.1', 'adjPA': '10.7', 'Proj': '18.0'},
{'quarterback': 'Kirk Cousins', 'team': 'WAS', 'home_away': '@', 'opponent': 'LAC', 'adjPF': '21.0', 'adjPA': '14.4', 'Proj': '18.0'},
{'quarterback': 'Derek Carr', 'team': 'OAK', 'home_away': '@', 'opponent': 'KCC', 'adjPF': '16.6', 'adjPA': '19.2', 'Proj': '17.8'},
{'quarterback': 'Marcus Mariota', 'team': 'TEN', 'home_away': '@', 'opponent': 'ARI', 'adjPF': '16.4', 'adjPA': '19.4', 'Proj': '17.8'},
{'quarterback': 'DeShone Kizer', 'team': 'CLE', 'home_away': 'vs.', 'opponent': 'GBP', 'adjPF': '15.8', 'adjPA': '20.1', 'Proj': '17.7'},
{'quarterback': 'Trevor Siemian', 'team': 'DEN', 'home_away': 'vs.', 'opponent': 'NYJ', 'adjPF': '13.2', 'adjPA': '23.2', 'Proj': '17.7'},
{'quarterback': 'Philip Rivers', 'team': 'LAC', 'home_away': 'vs.', 'opponent': 'WAS', 'adjPF': '18.3', 'adjPA': '16.9', 'Proj': '17.7'},
{'quarterback': 'Cam Newton', 'team': 'CAR', 'home_away': 'vs.', 'opponent': 'MIN', 'adjPF': '19.8', 'adjPA': '14.3', 'Proj': '17.3'},
{'quarterback': 'Brett Hundley', 'team': 'GBP', 'home_away': '@', 'opponent': 'CLE', 'adjPF': '14.1', 'adjPA': '21.1', 'Proj': '17.2'},
{'quarterback': 'Jimmy Garoppolo', 'team': 'SFF', 'home_away': '@', 'opponent': 'HOU', 'adjPF': '13.1', 'adjPA': '22.2', 'Proj': '17.2'},
{'quarterback': 'Jared Goff', 'team': 'LAR', 'home_away': 'vs.', 'opponent': 'PHI', 'adjPF': '17.9', 'adjPA': '15.9', 'Proj': '17.0'},
{'quarterback': 'Matt Ryan', 'team': 'ATL', 'home_away': 'vs.', 'opponent': 'NOS', 'adjPF': '16.2', 'adjPA': '17.6', 'Proj': '16.8'},
{'quarterback': 'Eli Manning', 'team': 'NYG', 'home_away': 'vs.', 'opponent': 'DAL', 'adjPF': '14.4', 'adjPA': '19.6', 'Proj': '16.7'},
{'quarterback': 'Blake Bortles', 'team': 'JAC', 'home_away': 'vs.', 'opponent': 'SEA', 'adjPF': '16.8', 'adjPA': '16.1', 'Proj': '16.5'},
{'quarterback': 'Andy Dalton', 'team': 'CIN', 'home_away': 'vs.', 'opponent': 'CHI', 'adjPF': '17.3', 'adjPA': '15.0', 'Proj': '16.3'},
{'quarterback': 'Jay Cutler', 'team': 'MIA', 'home_away': 'vs.', 'opponent': 'NEP', 'adjPF': '13.3', 'adjPA': '19.6', 'Proj': '16.1'},
{'quarterback': 'Tom Savage', 'team': 'HOU', 'home_away': 'vs.', 'opponent': 'SFF', 'adjPF': '13.3', 'adjPA': '19.2', 'Proj': '16.0'},
{'quarterback': 'Ben Roethlisberger', 'team': 'PIT', 'home_away': 'vs.', 'opponent': 'BAL', 'adjPF': '19.1', 'adjPA': '11.3', 'Proj': '15.6'},
{'quarterback': 'Jacoby Brissett', 'team': 'IND', 'home_away': '@', 'opponent': 'BUF', 'adjPF': '16.6', 'adjPA': '13.2', 'Proj': '15.1'},
{'quarterback': 'Nathan Peterman', 'team': 'BUF', 'home_away': 'vs.', 'opponent': 'IND', 'adjPF': '10.4', 'adjPA': '19.5', 'Proj': '14.5'},
{'quarterback': 'Mitchell Trubisky', 'team': 'CHI', 'home_away': '@', 'opponent': 'CIN', 'adjPF': '10.8', 'adjPA': '18.4', 'Proj': '14.2'},
{'quarterback': 'Joe Flacco', 'team': 'BAL', 'home_away': '@', 'opponent': 'PIT', 'adjPF': '10.7', 'adjPA': '15.5', 'Proj': '12.9'}
];

var matchups = [
'Alex Smith (KCC vs. OAK): 22.0 proj. pts.',
'Tom Brady (NEP @ MIA): 21.1 proj. pts.',
'Matthew Stafford (DET @ TBB): 20.9 proj. pts.',
'Carson Wentz (PHI @ LAR): 19.1 proj. pts.',
'Josh McCown (NYJ @ DEN): 19.0 proj. pts.',
'Drew Brees (NOS @ ATL): 18.8 proj. pts.',
'Jameis Winston (TBB vs. DET): 18.7 proj. pts.',
'Dak Prescott (DAL @ NYG): 18.6 proj. pts.',
'Case Keenum (MIN @ CAR): 18.2 proj. pts.',
'Blaine Gabbert (ARI vs. TEN): 18.1 proj. pts.',
'Russell Wilson (SEA @ JAC): 18.0 proj. pts.',
'Kirk Cousins (WAS @ LAC): 18.0 proj. pts.',
'Derek Carr (OAK @ KCC): 17.8 proj. pts.',
'Marcus Mariota (TEN @ ARI): 17.8 proj. pts.',
'DeShone Kizer (CLE vs. GBP): 17.7 proj. pts.',
'Trevor Siemian (DEN vs. NYJ): 17.7 proj. pts.',
'Philip Rivers (LAC vs. WAS): 17.7 proj. pts.',
'Cam Newton (CAR vs. MIN): 17.3 proj. pts.',
'Brett Hundley (GBP @ CLE): 17.2 proj. pts.',
'Jimmy Garoppolo (SFF @ HOU): 17.2 proj. pts.',
'Jared Goff (LAR vs. PHI): 17.0 proj. pts.',
'Matt Ryan (ATL vs. NOS): 16.8 proj. pts.',
'Eli Manning (NYG vs. DAL): 16.7 proj. pts.',
'Blake Bortles (JAC vs. SEA): 16.5 proj. pts.',
'Andy Dalton (CIN vs. CHI): 16.3 proj. pts.',
'Jay Cutler (MIA vs. NEP): 16.1 proj. pts.',
'Tom Savage (HOU vs. SFF): 16.0 proj. pts.',
'Ben Roethlisberger (PIT vs. BAL): 15.6 proj. pts.',
'Jacoby Brissett (IND @ BUF): 15.1 proj. pts.',
'Nathan Peterman (BUF vs. IND): 14.5 proj. pts.',
'Mitchell Trubisky (CHI @ CIN): 14.2 proj. pts.',
'Joe Flacco (BAL @ PIT): 12.9 proj. pts.',
]