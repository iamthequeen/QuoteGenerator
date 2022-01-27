var quoteWithAuthor = {
  "- Albert Einstein": '"Life is like riding  bicycle. To keep your balance, you must keep moving."',
  "- Jim Rohn": '"Happiness is not by chance, but by choice."',
  "- Suzy Kassem": '"Doubt kills more dreams thain failure ever will."',
  "- Bob Marley": '"You never know how strong you are, until being strong is your only choice."',
  "- Mahatma Gandhi": '"Live as if you were to die tomorrow. Learn as if you were to live forever."',
  "- k.tolnoe": '"Kindness always comes back."',
  "- Jonathan Lockwood Huie": '"Forgive others, not because they deserve forgiveness, but because you deserve peace."',
  "- Lao Tzu": '"The journey of a thousand miles begins with a single step."',
  "- Mahatma Gandhi": '"You must be the change you wish to see in the world."',
  "- Seneca": '"Not how long, but well you have lived is the main thing."',
  "- Anonymous": '"Never be a prisoner of your past. It was just a lesson, not a life sentence."',
  "- Frank Ocean": '"Work hard in silence, let your success be your noise."',
  "- Brian Tracy": '"You cannot control what happens to you, but you can control your attitude toward what happens to you."',
  "- Irish Proverb": '"A good friend is like a four-leaf clover; hard to find and lucky to have."',
  "- Rupi Kaur": '"How you love yourself is how you teach others to love you."',
  "- Maya Angelou": '"You will face many defeats in life, but never let yourself be defeated."',
  "- Harun Yahya": '"I always wonder why birds stay in the same place when they can fly anywhere on the earth. Then I ask myself the same question."',
  "- Mark Twain": '"The two most important days in your life are the day you are born and the day you find out why."',
  "- Norman Vincent Peale": '"Change your thoughts and you change your world."',
  "- Nelson Mandela": '"It always seems impossible until it is done."'
}

function generate() {
    var theAuthors = Object.keys(quoteWithAuthor)
    var author = theAuthors[Math.floor(Math.random() * theAuthors.length)]

    var quote = quoteWithAuthor[author];

    document.getElementById("author").innerHTML = author
    document.getElementById("quote").innerHTML = quote
}