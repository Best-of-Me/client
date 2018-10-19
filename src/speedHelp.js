const speedHelp = {
  feelings: {
    ansiedad: {
      text: "Anxiety",
      image: "/static/svg/anxiety.svg"
    },
    angustia: {
      text: "Anguish",
      image: "/static/svg/anguish.svg"
    },
    ira: {
      text: "Wrath",
      image: "/static/svg/wrath.svg"
    },
    tristeza: {
      text: "Sadness",
      image: "/static/svg/sadness.svg"
    },
    nose: {
      text: "I do not have it clear",
      image: "/static/svg/notClear.svg"
    }
  },
  situations: {
    trabajo: {
      text: "Work",
      image: "/static/svg/work.svg"
    },
    paseo: {
      text: "Taking a walk",
      image: "/static/svg/walking.svg"
    },
    fiesta: {
      text: "Partying",
      image: "/static/svg/party.svg"
    },
    estudio: {
      text: "studying",
      image: "/static/svg/study.svg"
    },
    casa: {
      text: "At home",
      image: "/static/svg/home.svg"
    },
    amigos: {
      text: "With friends",
      image: "/static/svg/friends.svg"
    }
  },
  happenings: {
    rechazo: {
      text: "Rejection",
      image: "/static/svg/rejection.svg"
    },
    acoso: {
      text: "Bullying",
      image: "/static/svg/bullying.svg"
    },
    discusion: {
      text: "Discussion",
      image: "/static/svg/discussion.svg"
    },
    ruptura: {
      text: "Breaking off",
      image: "/static/svg/break.svg"
    },
    nada: {
      text: "Nothing Special",
      image: ""
    }
  },
  advises: {
    advise1: { 
      text: "It is normal to discuss with co-workers, especially when there are stress situations involved.",
      text2:"Try to breathe deeply and relax, think objectively and find a way to solve problems one by one.",
      suggestion:[
        {image:"/static/svg/bom-icon.svg",text:"Relax playing with BoM for a while"},
        {image:"/static/svg/info.svg",text:"Keep reading other tips"}]
    }
  }
};
module.exports = speedHelp;
