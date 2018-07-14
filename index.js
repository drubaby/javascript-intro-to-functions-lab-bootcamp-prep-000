function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  if (string === string.toLowerCase())
  return "I can\'t hear you!"
  
  if (string === string.toUpperCase())
  return "YES INDEED!"
  
  if (string === "I love you, Grandma.")
<<<<<<< HEAD
  return "I love you, too."
=======
  return "I love you, too"
>>>>>>> d2603c0b6f1f1ef6f356f4c6217a54c1522125f1
}

