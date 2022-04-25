import React from "react";

function Testimonials() {
    const testimonials = [
        {
            name: "Bala Murugan, IT Professional",
            comment:
                "I joined Carpe Diem on 20th April, 2020. I have learned a lot from this academy. Before joining this academy, I couldn't speak English fluently and I was afraid to speak in English. After joining the academy, I got rid of the fear and I am able to speaking English confidently now. I attended the class more than 10 months and Recently Carpe Diem introduced Email Writing course. I joined this course. I learned more in this course also. I improved by spoken and written English. Thank You Very Much Carpe Diem Skills Academy for helping me. Once again, my Special thanks to the trainers and I am grateful to Carpe Diem.",
        },
        {
            name: "Rahini S",
            comment:
                "I had a very good experience in learning English here. I have learnt many things and I am completely satisfied with the class. I can communicate in English without any hesitation. I am able to speak much better than before. Also, I suggested my friends and cousins to join Carpe Diem Skills Academy. It is a good opportunity to everyone who would like to speak English fluently. I'm very thankful to the academy and my trainer.",
        },
        {
            name: "Raja Mani, Healthcare Professional",
            comment:
                "I joined Carpe Diem Skills Academy one month back for email writing course and I found it very useful. The trainer was very friendly and helped me to learn professional email writing. I could clarify all my doubts. I am thankful to Carpe diem skills Academy.",
        },
        {
            name: "Sridevi Amuthan",
            comment:
                "It is really a great experience of learning English here. The quality of the training is amazing and done in a professional way. Carpe Diem follows a very unique approach in training. They help us to learn, grow, and excel in life and it is a friendly learning environment. Thanks for giving us the wonderful pace to grow. Thanks to all the trainers and Carpe Diem.",
        },
        {
            name: "Venkat, Team Leader",
            comment:
                "I am so grateful to the academy for improving my written communication. I observed very good improvement in my mail drafting. My special thanks to my trainer and the management for the training. I would recommend your programs to my friends. Thank you.",
        },
        {
            name: "Priya Ramesh",
            comment:
                "Carpe Diem Skills Academy is the best place if you want to have a good communication skills and English training. The course is well organised and structured which meets expectations of the learners. The class timings are flexible and we can choose our convenient time. The trainers are very kind, patient and knowledgeable. The classes are engaging and I never felt boredom. I have observed a unique way of teaching there. It not only enhances our language, but also makes us think. The trainers are always encouraging and lending helping hands in improving our language. Learning English in Carpe Diem will definitely bring a drastic change in your language.",
        },
        {
            name: "Deepika Siva",
            comment:
                "Thank you so much for making the classes online in this pandemic situation. I really appreciate your team work in conducting the training seamlessly. I improved my English speaking skills. I thank my mentors who trained me with patience and they possess brilliant teaching skills.",
        },
        {
            name: "Arockiya Jeromi, BA Literature Graduate",
            comment:
                "I attended online English classes in Carpe Diem and it is a wonderful opportunity to hone communication skills. The method of training in Carpe Diem is unique and amazing. I love the kind approach of trainers in Carpe Diem Skills Academy.",
        },
        {
            name: "Sivashankari",
            comment:
                "Carpe Diem Skills Academy is the best training institute to learn English. I studied there. It’s very useful to all professionals and college students. I recommend everyone to use this opportunity especially in this pandemic situation. I have learnt to speak English fluently and confidently without any fear. The classes are very interactive. Thank you Carpe Diem for your training.",
        },
        {
            name: "Rilwana, Homemaker",
            comment:
                "Joining this academy is the best thing that has happened to me in this pandemic. It was a wonderful experience. They have student friendly trainers who help us a lot .This class helped me regain my confidence and improve my fluency in English. If you want to improve your communication skills, without any second thought go for it!",
        },
    ];
    return (
        <section className="mb-20 text-gray-700">
            <div className="text-center md:max-w-xl lg:max-w-3xl mx-auto">
                <h3 className="text-3xl font-bold mb-6 text-white font-bree">
                    Testimonials
                </h3>
                <p className="mb-6 pb-2 md:mb-12 md:pb-0 text-white">
                    We are who we are because of the transformations that we
                    have made in our students lives. Please go through their
                    opinion about us.
                </p>
            </div>

            <div className="masonry sm:masonry-sm md:masonry-md gap-6 text-center">
                {testimonials.map((testimonial, i) => (
                    <div key={i} className="break-inside mb-6">
                        <div className="block rounded-lg shadow-lg bg-white">
                            <div
                                className="overflow-hidden rounded-t-lg p-6"
                                style={{ backgroundColor: "#9d789b" }}
                            >
                                <h4 className="text-2xl font-semibold mb-4 text-white font-bree">
                                    {testimonial.name}
                                </h4>
                            </div>
                            <div className="p-6">
                                <p className="mt-4 font-sriracha">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="quote-left"
                                        className="w-6 pr-2 inline-block"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                                        ></path>
                                    </svg>
                                    {testimonial.comment}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Testimonials;
