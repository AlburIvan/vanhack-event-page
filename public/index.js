const popularEvents = [
  {
    order: 1,
    title: 'Take the Leap',
    subtitle: 'Do you have what it takes?',
    tag: 'Leap',
    premium: false,
    date: '15 NOV',
    details: [
      "Do you ever get the feeling that you have a strong profile, but you are still not getting called for an interview abroad? You might be missing a crucial thing and don't even know it.",
      'Join us for a FREE webinar on October 16th, 8 AM (PST) and find out how you can improve your international profile and get more interviews.',
    ],
    availability: ['Registration is available until 14 November 12:00 AM', '50 people already booked this activity, hurry up before it finishes'],
  },
  {
    order: 2,
    title: 'VanHackathon 2020',
    subtitle: 'How to apply to jobs with AR',
    tag: 'Vanhackathon',
    premium: true,
    date: '12 DEC',
    details: [
      "Do you ever get the feeling that you have a strong profile, but you are still not getting called for an interview abroad? You might be missing a crucial thing and don't even know it.",
      'Join us for a FREE webinar on October 16th, 8 AM (PST) and find out how you can improve your international profile and get more interviews.',
    ],
    availability: ['Registration is available until 11 December 12:00 AM', '50 people already booked this activity, hurry up before it finishes'],
  },
  {
    order: 3,
    title: 'Vancouver Meetup',
    subtitle: 'Let us help you get out there',
    tag: 'Recruiting',
    premium: false,
    date: '02 DEC',
    details: [
      "Do you ever get the feeling that you have a strong profile, but you are still not getting called for an interview abroad? You might be missing a crucial thing and don't even know it.",
      'Join us for a FREE webinar on October 16th, 8 AM (PST) and find out how you can improve your international profile and get more interviews.',
    ],
    availability: ['Registration is available until 1 December 12:00 AM', '50 people already booked this activity, hurry up before it finishes'],
  },
];

const events = [
  {
    title: 'Open Job fair at New Jersey',
    subtitle: "Come take a look at what we've got",
    tag: 'Recruiting',
    premium: false,
    date: '03 OCT',
    details: [
      "Do you ever get the feeling that you have a strong profile, but you are still not getting called for an interview abroad? You might be missing a crucial thing and don't even know it.",
      'Join us for a FREE webinar on October 16th, 8 AM (PST) and find out how you can improve your international profile and get more interviews.',
    ],
    availability: ['Registration is available until 12:00 AM', '50 people already booked this activity, hurry up before it finishes'],
  },
  {
    title: 'Animate CSS Code',
    subtitle: 'Create a panda animation with CSS',
    tag: 'Webinar',
    premium: false,
    date: '15 OCT',
    details: [
      "Do you ever get the feeling that you have a strong profile, but you are still not getting called for an interview abroad? You might be missing a crucial thing and don't even know it.",
      'Join us for a FREE webinar on October 16th, 8 AM (PST) and find out how you can improve your international profile and get more interviews.',
    ],
    availability: ['Registration is available until 12:00 AM', '50 people already booked this activity, hurry up before it finishes'],
  },
  {
    title: 'Be The Next VanHacker',
    subtitle: 'Join as part of the core team!',
    tag: 'Webinar',
    premium: true,
    date: '09 NOV',
    details: [
      "Do you ever get the feeling that you have a strong profile, but you are still not getting called for an interview abroad? You might be missing a crucial thing and don't even know it.",
      'Join us for a FREE webinar on October 16th, 8 AM (PST) and find out how you can improve your international profile and get more interviews.',
    ],
    availability: ['Registration is available until 12:00 AM', '50 people already booked this activity, hurry up before it finishes'],
  },
  {
    title: 'Vancouver Meeting',
    subtitle: 'Learn how to use this new techniques',
    tag: 'Meetup',
    premium: false,
    date: '27 OCT',
    details: [
      "Do you ever get the feeling that you have a strong profile, but you are still not getting called for an interview abroad? You might be missing a crucial thing and don't even know it.",
      'Join us for a FREE webinar on October 16th, 8 AM (PST) and find out how you can improve your international profile and get more interviews.',
    ],
    availability: ['Registration is available until 12:00 AM', '50 people already booked this activity, hurry up before it finishes'],
  },
  {
    title: 'Using AR in your daily life',
    subtitle: 'Learn how to use this new techniques',
    tag: 'Webinar',
    premium: false,
    date: '03 OCT',
    details: [
      "Do you ever get the feeling that you have a strong profile, but you are still not getting called for an interview abroad? You might be missing a crucial thing and don't even know it.",
      'Join us for a FREE webinar on October 16th, 8 AM (PST) and find out how you can improve your international profile and get more interviews.',
    ],
    availability: ['Registration is available until 12:00 AM', '50 people already booked this activity, hurry up before it finishes'],
  },
  {
    title: 'Using AR in your daily life',
    subtitle: 'Learn how to use this new techniques',
    tag: 'Webinar',
    premium: false,
    date: '03 OCT',
    details: [
      "Do you ever get the feeling that you have a strong profile, but you are still not getting called for an interview abroad? You might be missing a crucial thing and don't even know it.",
      'Join us for a FREE webinar on October 16th, 8 AM (PST) and find out how you can improve your international profile and get more interviews.',
    ],
    availability: ['Registration is available until 12:00 AM', '50 people already booked this activity, hurry up before it finishes'],
  },
];

const overlay = document.querySelector('.modal-overlay');
const closemodal = document.querySelectorAll('.modal-close');
const popularEventContainer = document.querySelector('#popular-events-container');
const upcomingEventContainer = document.querySelector('#upcoming-events-container');
const modalTitle = document.querySelector('#modalTitle');
const modalSubtitle = document.querySelector('#modalSubtitle');
const modalDate = document.querySelector('#modalDate');
const modalTag = document.querySelector('#modalTag');
const modalDetailContainer = document.querySelector('#modalDetailContainer');
const modalAvailabilityContainer = document.querySelector('#modalAvailabilityContainer');

const modalRegisterButton = document.querySelector('#modalRegisterButton');
const modalSubscribeButton = document.querySelector('#modalSubscribeButton');
const modalRegisteredButton = document.querySelector('#modalRegisteredButton');

modalRegisterButton.addEventListener('click', handleRegistration);
modalSubscribeButton.addEventListener('click', toggleSubscribedModal);
modalRegisteredButton.addEventListener('click', toggleRegisteredModal);

overlay.addEventListener('click', toggleModal);

for (var i = 0; i < closemodal.length; i++) {
  closemodal[i].addEventListener('click', toggleModal);
}

popularEvents.forEach(({ title, subtitle, tag, premium, date, order }, index) => {
  const html = `
    <article data-index=${index}
      class="flex flex-col justify-between flex-grow-0 flex-shrink-0 transform ${
        premium ? ' scale-110' : ''
      } bg-white rounded-md cursor-pointer h-upcoming-card w-upcoming-card shadow-${premium ? 'premium' : 'secondary'} sm:order-${order} ${
    premium ? '' : 'sm:scale-85 sm:transform'
  }"  onClick="onPopularEventCardClicked(this)">
      <div class="relative h-48">
        <img class="absolute" src="https://picsum.photos/288/174" alt="This is a random picture for illustrative purposes"  />
        <p class="absolute bottom-0 px-5 py-1 text-sm font-medium leading-tight text-white top-10 bg-${premium ? 'secondary' : 'accent'}">${tag}</p>
        <div class="absolute top-0 right-0 w-12 h-12 p-2 mt-2 mr-2 text-center rounded-full bg-${premium ? 'secondary' : 'accent'}">
          <p class="text-xs leading-tight text-white uppercase">${date.toUpperCase()}</p>
        </div>
      </div>
      <div class="p-4">
        <h2 class="text-lg font-semibold leading-tight select-none text-title">${title}</h2>
        <p class="text-sm leading-tight select-none text-${premium ? 'secondary' : 'accent'}">${subtitle}</p>
      </div>
    </article>
  `;

  popularEventContainer.insertAdjacentHTML('beforeend', html);
});

events.forEach(({ title, subtitle, tag, premium, date }, index) => {
  const html = ` 
    <article data-index=${index}
      class="flex flex-col justify-between flex-grow-0 flex-shrink-0 ml-6 bg-white rounded-md cursor-pointer h-upcoming-card w-upcoming-card shadow-${
        premium ? 'premium' : 'card'
      }" onClick="onEventCardClicked(this)">
      <div class="relative h-48">
        <img class="absolute" src="https://picsum.photos/288/174" alt="This is a random picture for illustrative purposes" />
        <p class="absolute bottom-0 px-5 py-1 text-sm font-medium leading-tight text-white top-10 bg-${premium ? 'secondary' : 'accent'}">${tag}</p>
        <div class="absolute top-0 right-0 w-12 h-12 p-2 mt-2 mr-2 text-center rounded-full bg-${premium ? 'secondary' : 'accent'}">
          <p class="text-xs leading-tight text-white uppercase">${date.toUpperCase()}</p>
        </div>
      </div>
      <div class="p-4">
        <h2 class="text-lg font-semibold leading-tight select-none text-title">${title}</h2>
        <p class="text-sm leading-tight select-none text-${premium ? 'secondary' : 'accent'}">${subtitle}</p>
      </div>
    </article>`;

  upcomingEventContainer.insertAdjacentHTML('beforeend', html);
});

function onPopularEventCardClicked(event) {
  const article = popularEvents[event.dataset.index];

  modalDetailContainer.innerHTML = null;
  modalAvailabilityContainer.innerHTML = null;

  // change modal data?
  modalTitle.innerHTML = article.title;
  modalSubtitle.innerHTML = article.subtitle;
  modalDate.innerHTML = article.date;
  modalTag.innerHTML = article.tag;
  modalRegisterButton.dataset.isPremium = article.premium;

  if (article.premium) {
    document.querySelector('#eventModal').classList.add('shadow-premium');
  } else {
    document.querySelector('#eventModal').classList.remove('shadow-premium');
  }

  article.details.forEach((paragraph) => {
    const p = document.createElement('p');
    p.textContent = paragraph;

    modalDetailContainer.appendChild(p);
  });

  article.availability.forEach((paragraph) => {
    const p = document.createElement('p');
    p.textContent = paragraph;

    modalAvailabilityContainer.appendChild(p);
  });

  // open modal with this data
  toggleModal();
}

function onEventCardClicked(event) {
  const article = events[event.dataset.index];

  modalDetailContainer.innerHTML = null;
  modalAvailabilityContainer.innerHTML = null;

  // change modal data?
  modalTitle.innerHTML = article.title;
  modalSubtitle.innerHTML = article.subtitle;
  modalDate.innerHTML = article.date;
  modalTag.innerHTML = article.tag;
  modalRegisterButton.dataset.isPremium = article.premium;

  if (article.premium) {
    document.querySelector('#eventModal').classList.add('shadow-premium');
  } else {
    document.querySelector('#eventModal').classList.remove('shadow-premium');
  }

  article.details.forEach((paragraph) => {
    const p = document.createElement('p');
    p.textContent = paragraph;

    modalDetailContainer.appendChild(p);
  });

  article.availability.forEach((paragraph) => {
    const p = document.createElement('p');
    p.textContent = paragraph;

    modalAvailabilityContainer.appendChild(p);
  });

  // open modal with this data
  toggleModal();
}

function handleRegistration(event) {
  event.preventDefault();

  const isPremium = event.target.dataset.isPremium === 'true';
  if (isPremium) {
    toggleModal();
    toggleSubscribedModal();
    return;
  }
  // otherwise show the subscribed modal
  toggleModal();
  toggleRegisteredModal();
}

function toggleModal() {
  const body = document.querySelector('body');
  const modal = document.querySelector('.modal');
  modal.classList.toggle('opacity-0');
  modal.classList.toggle('pointer-events-none');
  body.classList.toggle('modal-active');
}

function toggleSubscribedModal() {
  const body = document.querySelector('body');
  const modal = document.querySelector('.subscribe-modal');
  modal.classList.toggle('opacity-0');
  modal.classList.toggle('pointer-events-none');
  body.classList.toggle('modal-active');
}

function toggleRegisteredModal() {
  const body = document.querySelector('body');
  const modal = document.querySelector('.registered-modal');
  modal.classList.toggle('opacity-0');
  modal.classList.toggle('pointer-events-none');
  body.classList.toggle('modal-active');
}

document.onkeydown = function (evt) {
  evt = evt || window.event;
  var isEscape = false;
  if ('key' in evt) {
    isEscape = evt.key === 'Escape' || evt.key === 'Esc';
  } else {
    isEscape = evt.keyCode === 27;
  }
  if (isEscape && document.body.classList.contains('modal-active')) {
    toggleModal();
    return;
  }

  if (isEscape && !document.querySelector('.registered-modal').classList.contains('opacity-0')) {
    toggleRegisteredModal();
    return;
  }

  if (isEscape && !document.querySelector('.subscribe-modal').classList.contains('opacity-0')) {
    toggleSubscribedModal();
    return;
  }
};
