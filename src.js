export default function main() {
  console.log('This is the main function in src.js');

  const helper = () => {
    console.log('This is a helper function');
  };

  helper();
  const a = 41;
  const ll = 1;
  console.log(`Values: a = ${a}, ll = ${ll} all is ${a + ll}`);  
  console.log('End of main function');
}