import logo from './logo.svg'
import logoiq from './logoIQ.svg'
import logo_icon from './logo_icon.svg'
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import star_icon from './star_icon.svg'
import rating_star from './rating_star.svg'
import sample_img_1 from './sample_img_1.png'
import sample_img_2 from './sample_img_2.png'
import sample_img_3 from './sample_img_3.png'
import sample_img_4 from './sample_img_4.png'
import sample_img_5 from './sample_img_5.png'
import sample_img_6 from './sample_img_6.png'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'
import profile_img_4 from './profile_img_4.jpg'
import profile_img_5 from './profile_img_5.jpg'
import profile_img_6 from './profile_img_6.webp'
import profile_img_7 from './profile_img_7.jpg'
import step_icon_1 from './step_icon_1.svg'
import step_icon_2 from './step_icon_2.svg'
import step_icon_3 from './step_icon_3.svg'
import email_icon from './email_icon.svg'
import profile_icon from './profile_icon.svg'
import profile_iconn from './profile_icon.png'

import lock_icon from './lock_icon.svg'
import cross_icon from './cross_icon.svg'
import star_group from './star_group.png'
import credit_star from './credit_star.svg'


export const assets = {
    logo,
    logoiq,
    logo_icon,
    facebook_icon,
    instagram_icon,
    twitter_icon,
    star_icon,
    rating_star,
    sample_img_1,
    sample_img_2,
    sample_img_3,
    sample_img_4,
    sample_img_5,
    sample_img_6,
    email_icon,
    lock_icon,
    cross_icon,
    star_group,
    credit_star,
    profile_icon,
    profile_iconn,
    profile_img_1,
    profile_img_2,
    profile_img_3,
    profile_img_4,
    profile_img_5,
    profile_img_6,
    profile_img_7,
    
}

export const stepsData = [
    {
      title: 'Describe Your Vision',
      description: 'Type a phrase, sentence, or paragraph that describes the image you want to create.',
      icon: step_icon_1,
    },
    {
      title: 'Watch the Magic',
      description: 'Our AI-powered engine will transform your text into a high-quality, unique image in seconds.',
      icon: step_icon_2,
    },
    {
      title: 'Download & Share',
      description: 'Instantly download your creation or share it with the world directly from our platform.',
      icon: step_icon_3,
    },
  ];

export const testimonialsData = [
    {
        image:profile_img_1,
        name:'Anushka Singh',
        role:'Graphic Designer',
        stars:5,
        text:`The AI text-to-image tool completely transformed the way I work. I can bring my imagination to life within seconds.`
    },
    {
        image:profile_img_2,
        name:'Anamika Singh',
        role:'Content Creator',
        stars:4,
        text:`This tool is a game-changer for creating campaign visuals. I no longer rely on stock photos—I simply describe what I need.`
    },
    {
        image:profile_img_3,
        name:'Druvh Jatan',
        role:'Digital Artist',
        stars:5,
        text:`I love how easy it is to use! Just type an idea and watch it turn into high-quality visuals. It’s perfect for my social media platforms.`
    },

    
]

export const plans = [
    {
      id: 'Basic',
      price: 50,
      credits: 100,
      desc: 'Best for personal use.',
      tips:'💬 Limited and slower image creation',
      tips2:'🧠 Limited memory and context',
      mostPopular: false
    },
    {
      id: 'Advanced',
      price: 100,
      credits: 500,
      desc: 'Best for business use.',
      tips:'💬 Expanded and faster image creation',
      tips2:'🧠 Longer memory and context',
      mostPopular: true
    },
    {
      id: 'Business',
      price: 500,
      credits: 5000,
      desc: 'Best for enterprise use.',
      tips:'🚀 Resreach preview new feature',
      tips2:'🧠 Maximum memory and context',
      mostPopular: false
    },
  ]