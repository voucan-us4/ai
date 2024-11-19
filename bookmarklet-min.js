javascript:(()=>fetch('https://voucan-us4.github.io/ai/bookmarklet.js').then(r=>r.ok?r.text():Promise.reject('Error')).then(eval).catch(e=>console.error(e)))();
