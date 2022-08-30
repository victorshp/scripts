const scriptArgs = process.argv.slice(2);
process.stdout.write(`Starting to generate a .csv with ${scriptArgs[0]} numbers...\n\n`);

const fs = require('fs');

const ddds = [
  '11', '12', '13', '14', '15', '16', '17',
  '18', '19', '21', '22', '24', '27', '28',
  '31', '32', '33', '34', '35', '37', '38',
  '41', '42', '43', '44', '45', '46', '47',
  '48', '49', '51', '53', '54', '55', '61',
  '62', '63', '64', '65', '66', '67', '68',
  '69', '71', '73', '74', '75', '77', '79',
  '81', '82', '83', '84', '85', '86', '87',
  '88', '89', '91', '92', '93', '94', '95',
  '96', '97', '98', '99'
]

let numbersForFs = "telefone;\n"

let i, n;
for (i = 0; i < scriptArgs[0]; i++) {
  let phoneNumbers = '55' + ddds[Math.floor(Math.random() * ddds.length)] + 9
  for (n = 0; n < 9; n++) {
    phoneNumbers += Math.floor(Math.random() * 10)
  }
  numbersForFs += phoneNumbers + ";\n";
  phoneNumbers = '55';
}

fs.writeFile("numeros-para-rcs-exemplo.csv", numbersForFs, "utf-8", (err) => {
  if (err) {
    process.stdout.write(`This is error: [${JSON.stringify(err)}]\n`);
  } else {
    process.stdout.write('File successfully generated.\n');
  }
})

