const planData = {
            1: {
                objective: "Initial Lead Capture & Festive Branding",
                studentCampaign: {
                    title: "Student Enrollment: Launch & Capture",
                    focus: "Core Message: 'The 5 Pillars of Future Tech.' Highlight Full Stack & UI/UX as immediate career boosters. Messaging focuses on conquering career stagnation.",
                    assets: [
                        "Dussehra Poster (Oct 2): Theme of 'Victory over Outdated Skills.'",
                        "Multi-Course Teaser: 'Future-Proof Your Career: 5 Tracks to Success.'"
                    ]
                },
                businessCampaign: {
                    title: "Business Growth: Franchise Soft Launch",
                    franchise: {
                        title: "3-Month Fee-Free Franchise Opportunity",
                        details: "Soft launch the franchise program to generate initial interest. Focus on B2B channels like LinkedIn and targeted email lists. Goal is to build a pipeline of potential partners."
                    },
                    demo: {
                        title: "Demo Class Registration: Full Stack & UI/UX",
                        details: "Launch the registration page for the first major demo class. Promote heavily across all social channels with a clear value proposition: 'Build & Design: The 90-Minute Roadmap to Becoming a Hirable Full Stack Developer & UI/UX Designer.'"
                    }
                },
                chartData: {
                    labels: ['Full Stack Dev', 'UI/UX Design'],
                    data: [50, 50],
                    title: "Week 1: Foundational Skills Focus"
                }
            },
            2: {
                objective: "Authority Building & High-Value Skills Push",
                studentCampaign: {
                    title: "Student Enrollment: Showcase Expertise",
                    focus: "Core Focus: Deep dive into Data Science & AI/Gen ML. Use statistics on massive job growth and high salaries in these domains. Focus on practical training and expert faculty authority.",
                    assets: [
                        "Data Science/AI Poster: Announce full course details and an 'Early Bird Discount'.",
                        "Faculty/Alumni Success Story Graphics (relevant to Data/AI)."
                    ]
                },
                businessCampaign: {
                    title: "Business Growth: Aggressive Push",
                    franchise: {
                        title: "Aggressive Franchise Launch",
                        details: "Launch the official campaign for the 3-Month Fee-Free offer. Use a dedicated landing page, targeted ads, and testimonials to drive applications. Create a sense of a limited-time opportunity."
                    },
                    demo: {
                        title: "Run DATA/AI MASTERCLASS (Oct 10-12)",
                        details: "Host the high-value masterclass: 'The $100K Skill: How to Pivot into Data Science and Generative AI.' The primary goal is to convert attendees by offering a time-bound discount code exclusive to them."
                    }
                },
                chartData: {
                    labels: ['Data Science', 'AI/Gen ML'],
                    data: [50, 50],
                    title: "Week 2: Advanced Tech Focus"
                }
            },
            3: {
                objective: "Diwali Enrollment Maximization",
                studentCampaign: {
                    title: "Student Enrollment: Festive Offers",
                    focus: "Core Focus: Deep dive into Digital Marketing. Connect the festive theme of light/prosperity with career growth in marketing tech. Focus on a *Diwali Scholarship* as the main enrollment incentive for all courses.",
                    assets: [
                        "Diwali Poster (Oct 20): Theme of 'Lighting the Path to a High-Paying Job.'",
                        "Official New Batch Poster: Focus on the Festive Scholarship applicable across all 5 courses."
                    ]
                },
                businessCampaign: {
                    title: "Business Growth: High-Value Conversion",
                    franchise: {
                        title: "Maintain Franchise Momentum",
                        details: "Continue promoting the franchise offer. Share success stories or 'day in the life' content from existing partners. Host a Q&A webinar for potential franchisees."
                    },
                    demo: {
                        title: "Diwali Masterclass Demo (Oct 17-19)",
                        details: "Host a major, high-value masterclass for all potential students: 'The 5 Tech Skills That Guarantee a 200% Salary Hike.' Use this event to officially launch the Diwali Scholarship and drive immediate, broad-based enrollments across all courses."
                    }
                },
                chartData: {
                    labels: ['Digital Marketing', 'All Other Courses'],
                    data: [60, 40],
                    title: "Week 3: Marketing & Sales Focus"
                }
            },
            4: {
                objective: "Final Urgency & October Close-out",
                studentCampaign: {
                    title: "Student Enrollment: Create Urgency",
                    focus: "Core Focus: Final push for all 5 courses. Emphasize scarcity ('Only 5 Seats Left') and the immediate need to enroll before batches fill up. Promote UI/UX & Digital Marketing as the fastest tracks to employment.",
                    assets: [
                        "New Batch 'Last Seats' Poster: Strong visual urgency with a countdown clock graphic.",
                        "Halloween Engagement (Oct 31): Fun post: 'Don't let your career dreams turn into a ghost story!'"
                    ]
                },
                businessCampaign: {
                    title: "Business Growth: Final Call",
                    franchise: {
                        title: "Franchise Final Call: Offer Ends Oct 31st",
                        details: "Run a 'last chance' campaign for the franchise offer. Use retargeting ads on prospects who showed interest. Emphasize that the fee-free offer is ending."
                    },
                    demo: {
                        title: "Final Q&A Demo (Oct 27-29)",
                        details: "Host a simple 'Career Roadmap Q&A' session with a counselor. This is not a technical demo, but a sales-focused session to address last-minute doubts and handle objections from leads across all 5 domains."
                    }
                },
                chartData: {
                    labels: ['UI/UX', 'Digital Marketing', 'Data/AI', 'Full Stack'],
                    data: [35, 35, 15, 15],
                    title: "Week 4: Closing & Fast-Track Focus"
                }
            }
        };

        const weekNavContainer = document.getElementById('week-navigation');
        const contentContainer = document.getElementById('plan-content');
        let currentChart = null;

        function createCard(title, content, isInteractive = false) {
            const cardId = title.replace(/\s+/g, '-').toLowerCase();
            const card = document.createElement('div');
            card.className = 'bg-gray-50 border border-gray-200 rounded-lg mb-4';

            const header = document.createElement('div');
            header.className = `p-4 flex justify-between items-center ${isInteractive ? 'cursor-pointer hover:bg-gray-100' : ''}`;
            header.innerHTML = `<h3 class="text-md font-semibold text-gray-700">${title}</h3>`;
            
            if (isInteractive) {
                header.innerHTML += `<span id="arrow-${cardId}" class="transform transition-transform duration-300">▼</span>`;
                header.onclick = () => toggleDetails(cardId);
            }
            
            card.appendChild(header);

            if (isInteractive) {
                const details = document.createElement('div');
                details.id = `details-${cardId}`;
                details.className = 'details-card text-gray-600 text-sm';
                details.innerHTML = `<div class="prose prose-sm max-w-none">${content}</div>`;
                card.appendChild(details);
            } else {
                 const details = document.createElement('div');
                 details.className = 'p-4 pt-0 text-gray-600 text-sm';
                 details.innerHTML = content;
                 card.appendChild(details);
            }
            return card;
        }
        
        function toggleDetails(cardId) {
            const details = document.getElementById(`details-${cardId}`);
            const arrow = document.getElementById(`arrow-${cardId}`);
            details.classList.toggle('open');
            arrow.classList.toggle('rotate-180');
        }

        function renderWeek(weekNumber) {
            const data = planData[weekNumber];
            if (!data) return;

            document.querySelectorAll('.week-btn').forEach(btn => btn.classList.remove('active-week'));
            document.getElementById(`week-btn-${weekNumber}`).classList.add('active-week');

            contentContainer.innerHTML = `
                <div class="text-center mb-6">
                    <h2 class="text-2xl font-bold text-gray-800">Week ${weekNumber}: ${data.objective}</h2>
                </div>
                <div class="grid md:grid-cols-5 gap-8">
                    <div class="md:col-span-3">
                        <div class="mb-6">
                            <h3 class="text-xl font-semibold mb-3 text-gray-700">Student Enrollment Campaign</h3>
                            <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
                               <p class="font-semibold text-blue-800">Focus:</p>
                               <p class="text-blue-700 text-sm">${data.studentCampaign.focus}</p>
                               <p class="font-semibold mt-3 text-blue-800">Digital Assets:</p>
                               <ul class="list-disc list-inside text-sm text-blue-700 mt-1">
                                    ${data.studentCampaign.assets.map(asset => `<li>${asset}</li>`).join('')}
                               </ul>
                            </div>
                        </div>
                         <div>
                            <h3 class="text-xl font-semibold mb-3 text-gray-700">Business Growth Campaign</h3>
                            <div id="biz-growth-cards"></div>
                        </div>
                    </div>
                    <div class="md:col-span-2 flex flex-col items-center">
                         <h3 class="text-xl font-semibold mb-3 text-gray-700">Marketing Focus</h3>
                         <div class="chart-container">
                            <canvas id="focusChart"></canvas>
                         </div>
                    </div>
                </div>
            `;
            
            const bizGrowthContainer = document.getElementById('biz-growth-cards');
            bizGrowthContainer.appendChild(createCard(data.businessCampaign.demo.title, data.businessCampaign.demo.details, true));
            bizGrowthContainer.appendChild(createCard(data.businessCampaign.franchise.title, data.businessCampaign.franchise.details, true));


            const ctx = document.getElementById('focusChart').getContext('2d');
            if (currentChart) {
                currentChart.destroy();
            }
            currentChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: data.chartData.labels,
                    datasets: [{
                        label: 'Focus',
                        data: data.chartData.data,
                        backgroundColor: [
                            '#79a3b1',
                            '#d3e0ea',
                            '#f7caca',
                            '#a2b29f'
                        ],
                        borderColor: '#ffffff',
                        borderWidth: 3
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                        },
                        title: {
                            display: true,
                            text: data.chartData.title,
                            font: {
                                size: 14,
                                weight: '600'
                            }
                        }
                    },
                    cutout: '60%'
                }
            });
        }

        function init() {
            Object.keys(planData).forEach(week => {
                const btn = document.createElement('button');
                btn.id = `week-btn-${week}`;
                btn.className = 'week-btn px-4 py-2 md:px-6 md:py-3 rounded-full bg-white text-gray-700';
                btn.textContent = `Week ${week}`;
                btn.onclick = () => renderWeek(week);
                weekNavContainer.appendChild(btn);
            });
            renderWeek(1);
        }

        init();