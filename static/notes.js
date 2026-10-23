window.NETWORK_PLUS = {
  "format": 1,
  "chapters": [
    {
      "id": 1,
      "number": 1,
      "title": "Networking Concepts",
      "summary": "How networks move data: models, devices, cloud, ports, media, topologies, and IP addressing.",
      "exam_percent": 23,
      "sort_order": 0,
      "sections": [
        {
          "id": 1,
          "chapter_id": 1,
          "code": "1.1",
          "title": "OSI Model",
          "summary": "Explain concepts related to the OSI reference model.",
          "sort_order": 0,
          "categories": [],
          "terms": [
            {
              "id": 1,
              "section_id": 1,
              "name": "OSI Model",
              "definition": "A conceptual framework that breaks network communication down into seven distinct layers. It is designed for teaching, conceptualizing, and troubleshooting—not a protocol stack you install.\n\n**Network+ Tip**: Use this model to quickly determine which layer a device, address, or network symptom belongs to.",
              "image_url": "https://blog.rarecrew.com/image.axd?picture=/OSI%20model/RC_CNE_Blog_930x620px_01.png",
              "sort_order": 0,
              "category_id": null
            },
            {
              "id": 2,
              "section_id": 1,
              "name": "Layer 1 - Physical",
              "definition": "**Core Function**: Moves raw bits across physical media (copper, fiber, or radio frequencies).\n\n**Key Components**: Cables, connectors, signaling, wireless frequencies, network adapter cards, and hubs.\n\n**Addressing**: None (no MAC or IP addresses live here).\n\n**Troubleshooting & Action**: \"You have a physical layer problem.\" Fix cabling, punch-downs, run loopback tests, test or replace cables, and swap adapter cards.",
              "image_url": "https://www.lifewire.com/thmb/g2w4_fzKLA47R4wGCsJAYnQQDzw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/layers-of-the-osi-model-illustrated-818017-finalv1-2-ct-ed94d33e885a41748071ca15289605c9.png",
              "sort_order": 1,
              "category_id": null
            },
            {
              "id": 3,
              "section_id": 1,
              "name": "Layer 2 - Data link",
              "definition": "**Core Function**: Moves frames between devices on the same local network (LAN).\n**\nKey Component**s: Ethernet, MAC addresses, network switches, and VLANs.\n\n**Analogy / Role**: The switching layer. Switches use MAC addresses to forward frames locally.",
              "image_url": "https://www.lifewire.com/thmb/zPGFUYqE7hR9f4EQpeh-DyGFqvc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/layers-of-the-osi-model-illustrated-818017-finalv1-3-ct-9d3e1bf44a554e3db31f706201fc69f6.png",
              "sort_order": 2,
              "category_id": null
            },
            {
              "id": 4,
              "section_id": 1,
              "name": "Layer 3 - Network",
              "definition": "**Core Function**: Moves packets from one network to another.\n\n**Key Components**: IP addresses, routers, and subnets. Traffic headed to a different subnet must pass through Layer 3.\n\n**Analogy / Role**: The routing layer. Handles packet forwarding and fragments frames to traverse different network types.",
              "image_url": "https://www.lifewire.com/thmb/TSScK6WTSLEnjNToI1AwzBXZbYo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/layers-of-the-osi-model-illustrated-818017-finalv1-4-ct-9ffde2c7142849819c3fcf5e305a242f.png",
              "sort_order": 3,
              "category_id": null
            },
            {
              "id": 5,
              "section_id": 1,
              "name": "Layer 4 - Transport",
              "definition": "**Core Function**: Handles reliable or unreliable delivery between applications on host computers.\n\n**Key Components**: TCP, UDP, and port numbers.\n\n**Analogy / Role:** The post office layer (parcels and letters). Port numbers separate different services (like web requests vs. email) on the same computer.",
              "image_url": "https://www.lifewire.com/thmb/intF9AgvkoWdF0Gjpv8axHvd2Gw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/layers-of-the-osi-model-illustrated-818017-final-5-ct-373fc5a9edc74359819021555f37467d.png",
              "sort_order": 4,
              "category_id": null
            },
            {
              "id": 6,
              "section_id": 1,
              "name": "Layer 5 - Session",
              "definition": "**Core Function**: Manages communication sessions between devices—starting, stopping, and restarting connections.\n\n**Key Components**: Control protocols and tunneling protocols.",
              "image_url": "https://www.lifewire.com/thmb/TQKEwc82_JOcIHTJeLtrxFnLBOU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/layers-of-the-osi-model-illustrated-818017-finalv1-6-ct-f21bdae22e54415b881d77babe8ca51d.png",
              "sort_order": 5,
              "category_id": null
            },
            {
              "id": 7,
              "section_id": 1,
              "name": "Layer 6 - Presentation",
              "definition": "**Core Function**: Translates data between the application layer and the network format.\n\n**Key Components**: Character encoding, data compression, and application-level encryption.\n\n**Note**: Often combined with the Application Layer in modern networking models.",
              "image_url": "https://www.lifewire.com/thmb/_A1JgeRLBGivNHpyS8eNfqqcjGg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/layers-of-the-osi-model-illustrated-818017-finalv1-7-ct-e102db1b79da4926b510f944183989f8.png",
              "sort_order": 6,
              "category_id": null
            },
            {
              "id": 8,
              "section_id": 1,
              "name": "Layer 7 - Application",
              "definition": "**Core Function**: The top-level layer closest to the end user where network services interact directly with software.\n\n**Key Protocols**: HTTP, FTP, DNS, and POP3.",
              "image_url": "https://www.lifewire.com/thmb/3esvjgGCZIWvnUx6lFXSU3Vxr40=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/layers-of-the-osi-model-illustrated-818017-finalv1-8-ct-089b2573bf47462d85f9343f50329f72.png",
              "sort_order": 7,
              "category_id": null
            }
          ]
        },
        {
          "id": 2,
          "chapter_id": 1,
          "code": "1.2",
          "title": "Networking Appliances, Applications, and Functions",
          "summary": "Compare and contrast networking appliances, applications, and functions.",
          "sort_order": 1,
          "categories": [
            {
              "id": 1,
              "section_id": 2,
              "name": "Physical and virtual appliances",
              "summary": "",
              "sort_order": 0,
              "parent_id": null
            },
            {
              "id": 2,
              "section_id": 2,
              "name": "Applications",
              "summary": "",
              "sort_order": 1,
              "parent_id": null
            },
            {
              "id": 3,
              "section_id": 2,
              "name": "Functions",
              "summary": "",
              "sort_order": 2,
              "parent_id": null
            }
          ],
          "terms": [
            {
              "id": 10,
              "section_id": 2,
              "name": "Router",
              "definition": "**Router**: Operates primarily at **Layer 3 (Network Layer)** of the OSI model. It connects distinct networks together and determines the best path for data packets using IP addresses.",
              "image_url": "https://www.avg.com/hs-fs/hubfs/Blog_Content/Avg/Signal/AVG%20Signal%20Images/what_is_a_router_and_what_does_it_do_signal/Signal-What-is-a-Router-and-What-Does-it-Do-Hero.jpg?width=1200&name=Signal-What-is-a-Router-and-What-Does-it-Do-Hero.jpg",
              "sort_order": 0,
              "category_id": 1
            },
            {
              "id": 11,
              "section_id": 2,
              "name": "Switch",
              "definition": "Operates primarily at **Layer 2 (Data Link Layer)** (though Layer 3 switches exist). It connects devices within the same local area network (LAN) and uses **MAC addresses** to forward frames directly to the intended destination port.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Lsd2N2AkFxd5ycfCQar97ujTs6keeQC-LwoMhszPX8z_W_omBasaaeju&s=10",
              "sort_order": 1,
              "category_id": 1
            },
            {
              "id": 23,
              "section_id": 2,
              "name": "Firewall",
              "definition": "Filters incoming and outgoing network traffic based on predefined security rules. It can be stateless (packet filtering) or stateful (tracking connection states), operating from **Layer 3 up to Layer 7 (Application Layer)**.",
              "image_url": "https://res.cloudinary.com/dq7c8oaav/image/upload/v1769581509/media/What_is_a_Firewall_How_Does_It_Work_y9grzm.webp",
              "sort_order": 2,
              "category_id": 1
            },
            {
              "id": 12,
              "section_id": 2,
              "name": "Intrusion detection system (IDS)/ intrusion prevention system (IPS)",
              "definition": "**IDS**: A **passive** monitoring system. It inspects traffic for malicious signatures or anomalies and generates alerts for administrators, but does not alter or drop traffic.\n**IPS**: An **active/inline** system. Positioned directly in the traffic flow, it detects threats and automatically blocks or drops malicious packets in real-time.",
              "image_url": "https://synchronet.net/wp-content/uploads/2025/01/ids-vs-ips.jpeg",
              "sort_order": 3,
              "category_id": 1
            },
            {
              "id": 13,
              "section_id": 2,
              "name": "Load balancer",
              "definition": "Distributes incoming network or application traffic across multiple backend servers. This prevents server overload, ensures high availability, and optimizes resource utilization.",
              "image_url": "https://media.geeksforgeeks.org/wp-content/uploads/20260112182015615865/load_balancer.webp",
              "sort_order": 4,
              "category_id": 1
            },
            {
              "id": 14,
              "section_id": 2,
              "name": "Proxy",
              "definition": "Acts as an intermediary between a client and a destination server.\n**Forward Proxy**: Protects and filters outgoing client requests (often used in corporate environments).\n**Reverse Proxy**: Protects and manages incoming requests to backend servers (often handling SSL termination and caching).",
              "image_url": "https://www.techbuyer.com/media/wysiwyg/Proxy_Server_Diagram_2_.png",
              "sort_order": 5,
              "category_id": 1
            },
            {
              "id": 15,
              "section_id": 2,
              "name": "Network-attached storage (NAS)",
              "definition": "File-level storage device connected directly to a TCP/IP network. Clients access files via protocols like SMB or NFS. It is generally cost-effective and easier to set up.",
              "image_url": "https://cdn.prod.website-files.com/672bdc2d5c21197424e41ee8/67cdaa65e7250808507ebcde_NAS-RAID-Storage-System-1.png",
              "sort_order": 6,
              "category_id": 1
            },
            {
              "id": 16,
              "section_id": 2,
              "name": "Storage area network (SAN)",
              "definition": "High-speed block-level storage network dedicated to servers. It connects via specialized high-performance fabrics (like Fibre Channel or iSCSI), making it ideal for high-throughput enterprise databases and virtualization.",
              "image_url": "https://images.ctfassets.net/aoyx73g9h2pg/3FWdrPoM4gST5RZKw1SHXY/86724b2ccded9a12b7e15615a3645faf/What-is-Storage-Area-Network-SAN-Diagram.jpg",
              "sort_order": 7,
              "category_id": 1
            },
            {
              "id": 17,
              "section_id": 2,
              "name": "Wireless Access Point",
              "definition": "An access point is a bridge. Extends the wired network onto the wireless network. OSI layer 2 device.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4yDuSLeuWxusiFQvjYARoobWxPTOHwCoZJv3n00MhgiuQ6TPtfXK5Z3A&s=10",
              "sort_order": 8,
              "category_id": 1
            },
            {
              "id": 18,
              "section_id": 2,
              "name": "Wireless Controller (WLC)",
              "definition": "Available as a physical hardware appliance or a virtual instance. The centralized management brain for an enterprise wireless network.\n**Primary Function**: Manages, configures, provisions, and monitors dozens or thousands of lightweight access points from a single pane of glass.",
              "image_url": "https://resource.fs.com/mall/mainImg/202509021604382bzxur.jpg.webp",
              "sort_order": 9,
              "category_id": 1
            },
            {
              "id": 19,
              "section_id": 2,
              "name": "Content delivery network (CDN)",
              "definition": "**Content Delivery Network (CDN)**: A geographically distributed network of proxy servers and data centers.",
              "image_url": "https://media.geeksforgeeks.org/wp-content/uploads/20260114170023021350/_content_delivery_network.webp",
              "sort_order": 10,
              "category_id": 2
            },
            {
              "id": 20,
              "section_id": 2,
              "name": "Virtual private network (VPN)",
              "definition": "Creates a secure, encrypted tunnel over a public network (like the Internet), allowing remote users or branch offices to securely access a private network as if they were physically connected.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLXe4T8Kcih9xxvVMcNBEiWTDcrGgv4OlYsMDER2UY489plJa_-nr_ZEr9&s=10",
              "sort_order": 11,
              "category_id": 3
            },
            {
              "id": 21,
              "section_id": 2,
              "name": "Quality of service (QoS)",
              "definition": "A set of technologies that manage network resources by prioritizing certain types of traffic (e.g., VoIP or video conferencing) over others (e.g., large file downloads) to minimize jitter, packet loss, and latency.",
              "image_url": "https://statics.mylandingpages.co/static/aaapycm22qmuab44/image/9455aaec8994419fa15307512f6652d5.webp",
              "sort_order": 12,
              "category_id": 3
            },
            {
              "id": 22,
              "section_id": 2,
              "name": "Time to live (TTL)",
              "definition": "A mechanism built into the IP packet header consisting of a hop limit counter. Each router that handles the packet decrements the TTL by 1. If the TTL reaches 0 before reaching the destination, the packet is dropped and an ICMP \"Time Exceeded\" message is sent back, preventing infinite routing loops.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDijC0oJaioLLfk9yWXg7PMeWE69pX-K1nedx-JoT--Hs6cZdkFVvb4hw&s=10",
              "sort_order": 13,
              "category_id": 3
            }
          ]
        },
        {
          "id": 3,
          "chapter_id": 1,
          "code": "1.3",
          "title": "Cloud Concepts and Connectivity",
          "summary": "Summarize cloud concepts and connectivity options.",
          "sort_order": 2,
          "categories": [
            {
              "id": 5,
              "section_id": 3,
              "name": "Core Cloud Concepts",
              "summary": "",
              "sort_order": 0,
              "parent_id": null
            },
            {
              "id": 4,
              "section_id": 3,
              "name": "Network Virtualization & Architecture",
              "summary": "",
              "sort_order": 1,
              "parent_id": null
            },
            {
              "id": 6,
              "section_id": 3,
              "name": "Network Security",
              "summary": "Broad firewall rules applied automatically to entire virtual cloud networks or subnets (e.g., allowing TCP port 443 or port 22 access across an entire network).",
              "sort_order": 2,
              "parent_id": null
            },
            {
              "id": 7,
              "section_id": 3,
              "name": "Cloud Connectivity Options",
              "summary": "",
              "sort_order": 3,
              "parent_id": null
            },
            {
              "id": 8,
              "section_id": 3,
              "name": "Deployment Models",
              "summary": "",
              "sort_order": 4,
              "parent_id": null
            },
            {
              "id": 9,
              "section_id": 3,
              "name": "Service Models",
              "summary": "",
              "sort_order": 5,
              "parent_id": null
            }
          ],
          "terms": [
            {
              "id": 24,
              "section_id": 3,
              "name": "Network functions virtualization (NFV)",
              "definition": "Replaces physical networking hardware (like routers, switches, and firewalls) with virtual appliances running in a hypervisor environment while maintaining the exact same functionality.",
              "image_url": "https://as2.ftcdn.net/jpg/04/20/14/97/1000_F_420149742_BUYn6O9eM4AE6hdg2E21msdRPayA81c9.jpg",
              "sort_order": 0,
              "category_id": 4
            },
            {
              "id": 25,
              "section_id": 3,
              "name": "Virtual private cloud (VPC)",
              "definition": "A secure, isolated private network environment inside a cloud infrastructure where web servers, databases, load balancers, and virtual routers operate.",
              "image_url": "https://www.logicmonitor.com/wp-content/uploads/2024/11/835_WhatisVPCinAWS_Socials_v1_Blog_1182x737.png",
              "sort_order": 1,
              "category_id": 4
            },
            {
              "id": 26,
              "section_id": 3,
              "name": "Cloud Gateways",
              "definition": "Internet Gateway, NAT Gatewat, and Transit Gateway / VPC Endpoints.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIu78HEXGRoB6EVEmod52BgTChn6LLnxXF_045CvnMTNqOXD_fMqlbXt-l&s=10",
              "sort_order": 2,
              "category_id": 4
            },
            {
              "id": 27,
              "section_id": 3,
              "name": "Internet Gateway",
              "definition": "Connects a VPC to the public internet, allowing users worldwide to access public application instances.",
              "image_url": "https://ubifi.net/wp-content/uploads/2025/10/what-is-internet-gateway.webp",
              "sort_order": 3,
              "category_id": 4
            },
            {
              "id": 28,
              "section_id": 3,
              "name": "NAT Gateway",
              "definition": "Enables outbound communication from private subnets to internet resources using Network Address Translation while restricting uninvited inbound access.",
              "image_url": "https://purvaco.com/wp-content/uploads/2026/01/nat-gateway-1024x1024.png",
              "sort_order": 4,
              "category_id": 4
            },
            {
              "id": 29,
              "section_id": 3,
              "name": "Transit Gateway / VPC Endpoints",
              "definition": "Acts as a cloud router to connect multiple VPCs together or allows direct cross-cloud/private subnet connectivity.",
              "image_url": "https://media2.dev.to/dynamic/image/width=1280,height=720,fit=cover,gravity=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ftd6c1ro4ayla24i8g3ep.webp",
              "sort_order": 5,
              "category_id": 4
            },
            {
              "id": 30,
              "section_id": 3,
              "name": "Scalability & Elasticity",
              "definition": "Cloud computing allows you to scale resources up or down dynamically. **Elasticity** specifically highlights the ability to automatically handle fluctuating demands by scaling up when demand is high and scaling back down when it subsides.",
              "image_url": "https://dtdsouza.dev/content/images/2025/09/image.png",
              "sort_order": 6,
              "category_id": 5
            },
            {
              "id": 31,
              "section_id": 3,
              "name": "Multitenancy",
              "definition": "Many different customers share the same underlying cloud infrastructure, maximizing efficiency and reducing costs.",
              "image_url": "https://marmelab.com/_astro/multitenancy.rjMiFEdr_Zoy3su.webp",
              "sort_order": 7,
              "category_id": 5
            },
            {
              "id": 32,
              "section_id": 3,
              "name": "Network Security Lists",
              "definition": "Broad firewall rules applied automatically to entire virtual cloud networks or subnets (e.g., allowing TCP port 443 or port 22 access across an entire network).",
              "image_url": "https://devopsprojects.com/wp-content/uploads/2020/10/oci_security_list.jpg",
              "sort_order": 8,
              "category_id": 6
            },
            {
              "id": 33,
              "section_id": 3,
              "name": "Network Security Groups",
              "definition": "Offer finer granularity than security lists by letting administrators assign specific firewall rules down to individual **virtual network interface cards (VNICs).**",
              "image_url": "https://darawtechie.com/wp-content/uploads/2019/09/fwnsg.png",
              "sort_order": 9,
              "category_id": 6
            },
            {
              "id": 34,
              "section_id": 3,
              "name": "VPN",
              "definition": "Establishes secure remote tunnels for users or remote sites to connect into private cloud environments and Transit Gateways.",
              "image_url": "https://play-lh.googleusercontent.com/zkuD1vMwIeYb9st1kSzZBS2ax3X3CvVlrbR7WMWmsXoXpioRDataIY_ROIZfNTzlxGMtpbgXMQLJIVZduZ_WXg=w240-h480-rw",
              "sort_order": 10,
              "category_id": 7
            },
            {
              "id": 35,
              "section_id": 3,
              "name": "Direct Connect",
              "definition": "(Referenced in general cloud networking architecture as dedicated interconnect options for secure, high-speed access).",
              "image_url": "https://digitalcloud.training/wp-content/uploads/2022/01/AWS-Direct-Connect-1-1024x652.png",
              "sort_order": 11,
              "category_id": 7
            },
            {
              "id": 36,
              "section_id": 3,
              "name": "Public Cloud",
              "definition": "Cloud-based applications and resources built for public internet access by anyone.",
              "image_url": "https://www.occloud9.com/wp-content/uploads/2021/01/Public-Cloud.png",
              "sort_order": 12,
              "category_id": 8
            },
            {
              "id": 37,
              "section_id": 3,
              "name": "Private Cloud",
              "definition": "Dedicated virtualized local data centers used exclusively for internal operations.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa_lhz8QI4AUHx6vSh00VHWsAzrFFUXtyNTyu71Dey8A&s=10",
              "sort_order": 13,
              "category_id": 8
            },
            {
              "id": 38,
              "section_id": 3,
              "name": "Hybrid Cloud",
              "definition": "A combination framework utilizing both public and private clouds depending on application requirements.",
              "image_url": "https://www.softwebsolutions.com/wp-content/uploads/2024/05/Blog_hybrid-cloud11.jpg",
              "sort_order": 14,
              "category_id": 8
            },
            {
              "id": 39,
              "section_id": 3,
              "name": "Infrastructure as a Service (IaaS)",
              "definition": "Provides fundamental computing resources (virtual hardware, storage, and networking). The customer installs and manages their own OS, data, and software applications.",
              "image_url": "https://media.geeksforgeeks.org/wp-content/uploads/20240506190058/What-is-IaaS.webp",
              "sort_order": 15,
              "category_id": 9
            },
            {
              "id": 40,
              "section_id": 3,
              "name": "Platform as a Service (PaaS)",
              "definition": "Provides a managed platform and development tools so customers can build, customize, and manage their own applications without worrying about underlying engine maintenance.",
              "image_url": "https://ik.imagekit.io/upgrad1/abroad-images/imageCompo/images/paas_in_cloud_computingEQH4CJ.png?pr-true",
              "sort_order": 16,
              "category_id": 9
            },
            {
              "id": 41,
              "section_id": 3,
              "name": "Software as a Service (SaaS)",
              "definition": "A complete, on-demand application delivered via a web browser login where the provider manages everything (software, data storage, and maintenance).",
              "image_url": "https://www.investopedia.com/thmb/FmHi2FYg-2nDq1JneTHLWNT6Z1w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Software-as-a-service-saas_final-5caef210a00b48f5ac5de4964f72a016.png",
              "sort_order": 17,
              "category_id": 9
            }
          ]
        },
        {
          "id": 4,
          "chapter_id": 1,
          "code": "1.4",
          "title": "Ports, Protocols, Services, and Traffic Types",
          "summary": "Explain common networking ports, protocols, services, and traffic types.",
          "sort_order": 3,
          "categories": [
            {
              "id": 10,
              "section_id": 4,
              "name": "Networking Ports, Protocols, and Services",
              "summary": "",
              "sort_order": 0,
              "parent_id": null
            },
            {
              "id": 11,
              "section_id": 4,
              "name": "Internet Protocol (IP) and Transport Protocols",
              "summary": "",
              "sort_order": 1,
              "parent_id": null
            },
            {
              "id": 12,
              "section_id": 4,
              "name": "Traffic Types",
              "summary": "",
              "sort_order": 2,
              "parent_id": null
            }
          ],
          "terms": [
            {
              "id": 42,
              "section_id": 4,
              "name": "File Transfer Protocol (FTP) – Ports 20/21 (TCP)",
              "definition": "Used for generic file transfers across operating systems. Port 20 handles the data transfer process itself, while port 21 transmits control information.",
              "image_url": "https://store-images.s-microsoft.com/image/apps.47186.14051379469879533.58284099-5ef3-4274-8846-f345593fc4d9.35c0513b-13d6-425d-b4aa-8ed6d9188c92",
              "sort_order": 0,
              "category_id": 10
            },
            {
              "id": 43,
              "section_id": 4,
              "name": "Secure Shell (SSH) & Secure File Transfer Protocol (SFTP) – Port 22 (TCP)",
              "definition": "SSH provides encrypted, text-based remote command-line management. SFTP leverages the underlying SSH protocol to allow secure, encrypted file transfers and file management.",
              "image_url": "https://www.tenfold-security.com/wp-content/uploads/ssh.png",
              "sort_order": 1,
              "category_id": 10
            },
            {
              "id": 44,
              "section_id": 4,
              "name": "Telnet – Port 23 (TCP)",
              "definition": "A legacy, non-encrypted terminal communication protocol. Because credentials and data are sent in the clear, it has been largely superseded by SSH.",
              "image_url": "https://images.seeklogo.com/logo-png/19/1/telnet-logo-png_seeklogo-190463.png",
              "sort_order": 2,
              "category_id": 10
            },
            {
              "id": 45,
              "section_id": 4,
              "name": "Simple Mail Transfer Protocol (SMTP) – Port 25 (TCP) (plain text) and Port 587 (TCP) (with TLS encryption)",
              "definition": "Used for server-to-server email delivery and by client devices to send mail to mail servers.",
              "image_url": "https://captainverify.com/blog/wp-content/uploads/2023/12/smtp-1-jpg.webp",
              "sort_order": 3,
              "category_id": 10
            },
            {
              "id": 46,
              "section_id": 4,
              "name": "Domain Name System (DNS) – Port 53 (UDP/TCP)",
              "definition": "Translates fully qualified domain names (FQDNs) into IP addresses. UDP port 53 is used for standard queries, while TCP port 53 is used for large zone transfers between DNS servers.",
              "image_url": "https://www.itarian.com/blog/wp-content/uploads/2025/06/what-is-dns.png",
              "sort_order": 4,
              "category_id": 10
            },
            {
              "id": 47,
              "section_id": 4,
              "name": "Dynamic Host Configuration Protocol (DHCP) – Ports 67/68 (UDP)",
              "definition": "Automatically assigns IP address configurations and lease pools to devices connecting to a network.",
              "image_url": "https://habrastorage.org/getpro/habr/upload_files/627/92a/ec0/62792aec0626cf752c59cbf42c4786ba.jpg",
              "sort_order": 5,
              "category_id": 10
            },
            {
              "id": 48,
              "section_id": 4,
              "name": "Trivial File Transfer Protocol (TFTP) – Port 69 (UDP)",
              "definition": "A lightweight, unauthenticated protocol used for rapid file transfers, such as downloading configuration files onto VoIP devices.",
              "image_url": "https://journal.jadaptive.com/wp-content/uploads/2024/03/tftp.jpg",
              "sort_order": 6,
              "category_id": 10
            },
            {
              "id": 49,
              "section_id": 4,
              "name": "Hypertext Transfer Protocol (HTTP) & HTTPS – Port 80 (TCP) (HTTP, unencrypted) and Port 443 (TCP) (HTTPS, encrypted via SSL/TLS)",
              "definition": "Used for browser-based web server communication.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgjJV2ADwJIiu9ObRGmB9WgBAFTeuvQrcHyoVY3zcnQkwXAlmkbiCP0fo&s=10",
              "sort_order": 7,
              "category_id": 10
            },
            {
              "id": 50,
              "section_id": 4,
              "name": "Network Time Protocol (NTP) – Port 123 (UDP)",
              "definition": "Automatically synchronizes the system clocks of network devices down to the millisecond level to ensure accurate log correlation.",
              "image_url": "https://netdata.cloud/img/ntp.png",
              "sort_order": 8,
              "category_id": 10
            },
            {
              "id": 51,
              "section_id": 4,
              "name": "Simple Network Management Protocol (SNMP) – Port 161 (UDP) (queries) and Port 162 (UDP) (traps)",
              "definition": "Used to monitor and manage network hardware. Port 161 queries device performance data, while port 162 allows devices to proactively send event notifications (\"traps\") to a management station.",
              "image_url": "https://www.cloudns.net/blog/wp-content/uploads/2023/06/snmp.png",
              "sort_order": 9,
              "category_id": 10
            },
            {
              "id": 52,
              "section_id": 4,
              "name": "Lightweight Directory Access Protocol (LDAP) & LDAPS – Port 389 (TCP) (LDAP) and Port 636 (TCP) (LDAPS, secure)",
              "definition": "Maintains and queries hierarchical databases of network users and devices.",
              "image_url": "https://surepassid.com/hubfs/LDAP-Lightweight-Directory-Access-Protocol2.png",
              "sort_order": 10,
              "category_id": 10
            },
            {
              "id": 53,
              "section_id": 4,
              "name": "Server Message Block (SMB) – Port 445 (TCP)",
              "definition": "Used in Microsoft Windows environments for file shares, printer sharing, and network authentication.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNfasPJE1ueZo1QHuIYMxOSJKpPOJ4-LisVxesmDBcqJh0WYeao9VfO3E&s=10",
              "sort_order": 11,
              "category_id": 10
            },
            {
              "id": 54,
              "section_id": 4,
              "name": "Syslog – Port 514 (UDP)",
              "definition": "Consolidates log files from routers, firewalls, and servers into a central SIEM database.",
              "image_url": "https://cdn.mos.cms.futurecdn.net/WhnKp7GMrgNNtT7TThmzwG.jpg",
              "sort_order": 12,
              "category_id": 10
            },
            {
              "id": 55,
              "section_id": 4,
              "name": "Microsoft SQL Server (MS SQL) – Port 1433 (TCP)",
              "definition": "Used to query and retrieve data from Microsoft Structured Query Language databases.",
              "image_url": "https://upload.wikimedia.org/wikipedia/commons/b/b2/Database-mysql.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
              "sort_order": 13,
              "category_id": 10
            },
            {
              "id": 56,
              "section_id": 4,
              "name": "Remote Desktop Protocol (RDP) – Port 3389 (TCP)",
              "definition": "Enables remote graphical desktop sessions to Windows workstations and servers.",
              "image_url": "https://i0.wp.com/blog.oudel.com/wp-content/uploads/2022/07/RDP.png?fit=800%2C533&ssl=1",
              "sort_order": 14,
              "category_id": 10
            },
            {
              "id": 57,
              "section_id": 4,
              "name": "Session Initiation Protocol (SIP) – Ports 5060/5061 (TCP)",
              "definition": "Acts as the core control protocol for Voice over IP (VoIP) and video conferencing to set up, manage, and tear down sessions.",
              "image_url": "https://www.carrierbid.com/wp-content/uploads/2018/10/5.-SIP@250x250.png",
              "sort_order": 15,
              "category_id": 10
            },
            {
              "id": 58,
              "section_id": 4,
              "name": "Internet Control Message Protocol (ICMP)",
              "definition": "Operates directly via IP without TCP or UDP to verify device connectivity (e.g., via the ping command) and report network diagnostics like unreachable destinations or expired time-to-live (TTL) counters.",
              "image_url": "https://www.logsign.com/uploads/what_is_icmp_664d9661f5.png",
              "sort_order": 16,
              "category_id": 11
            },
            {
              "id": 59,
              "section_id": 4,
              "name": "Transmission Control Protocol (TCP)",
              "definition": "A connection-oriented, reliable Layer 4 transport protocol that establishes formal handshakes, provides delivery acknowledgments, handles error recovery/retransmissions, and enforces flow control.",
              "image_url": "https://www.a1.digital/uploads/Images/KnowledgeHub/16_A1-Digital-TCP-IP_Header_v2.jpg",
              "sort_order": 17,
              "category_id": 11
            },
            {
              "id": 60,
              "section_id": 4,
              "name": "User Datagram Protocol (UDP)",
              "definition": "A connectionless, unreliable (no acknowledgments) Layer 4 transport protocol that transmits data quickly with minimal overhead and no session setup.",
              "image_url": "https://www.emnify.com/hubfs/Title-udp.webp",
              "sort_order": 18,
              "category_id": 11
            },
            {
              "id": 61,
              "section_id": 4,
              "name": "Generic Routing Encapsulation (GRE)",
              "definition": "Encapsulates packets to build unencrypted tunnels across networks, frequently used in basic VPN deployments.",
              "image_url": "https://thumbs.dreamstime.com/z/gre-meaning-generic-routing-encapsulations-gre-abbreviation-generic-routing-encapsulations-337011446.jpg",
              "sort_order": 19,
              "category_id": 11
            },
            {
              "id": 62,
              "section_id": 4,
              "name": "Internet Protocol Security (IPSec)",
              "definition": "A robust security suite used to protect VPN tunnels. Key components include",
              "image_url": "https://www.emnify.com/hubfs/Title-ipsec.webp",
              "sort_order": 20,
              "category_id": 11
            },
            {
              "id": 63,
              "section_id": 4,
              "name": "Authentication Header (AH)",
              "definition": "Provides data integrity and digital signatures via hashing, though data is sent in the clear.",
              "image_url": "https://www.shutterstock.com/image-illustration/ah-authentication-headerahauthentication-header-acronym-260nw-2586639579.jpg",
              "sort_order": 21,
              "category_id": 11
            },
            {
              "id": 64,
              "section_id": 4,
              "name": "Encapsulating Security Payload (ESP)",
              "definition": "Encrypts the payload for confidentiality while also providing authentication.",
              "image_url": "https://www.konfirmity.com/images/glossary/esp-cyber-security/what-is-esp.webp",
              "sort_order": 22,
              "category_id": 11
            },
            {
              "id": 65,
              "section_id": 4,
              "name": "Internet Key Exchange (IKE) / ISAKMP",
              "definition": "Operates over UDP port 500 to negotiate security associations and cryptographic keys before secure communication begins.",
              "image_url": "https://sase.checkpoint.com/wp-content/uploads/2023/11/Internet-Key-Exchange-IKE.jpg",
              "sort_order": 23,
              "category_id": 11
            },
            {
              "id": 66,
              "section_id": 4,
              "name": "Unicast",
              "definition": "A one-to-one communication between two specific stations where traffic is sent directly between them without involving other network nodes (used for web browsing, file transfers, and email).",
              "image_url": "https://media.geeksforgeeks.org/wp-content/uploads/UNICAST-1.png",
              "sort_order": 24,
              "category_id": 12
            },
            {
              "id": 67,
              "section_id": 4,
              "name": "Multicast",
              "definition": "A one-to-many-of-many communication where data is transmitted simultaneously to multiple subscribed recipients (used for multimedia streams, financial feeds, and routing updates).",
              "image_url": "https://www.pynetlabs.com/wp-content/uploads/2024/01/what-is-multicast-routing-in-computer-networks.jpg",
              "sort_order": 25,
              "category_id": 12
            },
            {
              "id": 68,
              "section_id": 4,
              "name": "Anycast",
              "definition": "A one-to-one-of-many communication where a single destination IP address routes traffic to whichever participating device is topologically closest (commonly utilized in anycast DNS architectures).",
              "image_url": "https://media.geeksforgeeks.org/wp-content/uploads/20231024103350/Anycast.png",
              "sort_order": 26,
              "category_id": 12
            },
            {
              "id": 69,
              "section_id": 4,
              "name": "Broadcast",
              "definition": "A one-to-all communication where a single packet reaches every device within the local broadcast domain (used for ARP requests and routing updates; entirely omitted in IPv6 in favor of multicast).",
              "image_url": "https://broadcastpix.com/wp-content/uploads/2023/12/Broadcast-Blue.png",
              "sort_order": 27,
              "category_id": 12
            }
          ]
        },
        {
          "id": 5,
          "chapter_id": 1,
          "code": "1.5",
          "title": "Transmission Media and Transceivers",
          "summary": "Compare and contrast transmission media and transceivers.",
          "sort_order": 4,
          "categories": [
            {
              "id": 13,
              "section_id": 5,
              "name": "Transmission Media vs. Transceivers",
              "summary": "",
              "sort_order": 0,
              "parent_id": null
            },
            {
              "id": 14,
              "section_id": 5,
              "name": "Wired Transmission Media",
              "summary": "",
              "sort_order": 1,
              "parent_id": null
            },
            {
              "id": 15,
              "section_id": 5,
              "name": "Wireless Transmission Media",
              "summary": "",
              "sort_order": 2,
              "parent_id": null
            },
            {
              "id": 16,
              "section_id": 5,
              "name": "Transceivers",
              "summary": "",
              "sort_order": 3,
              "parent_id": null
            },
            {
              "id": 17,
              "section_id": 5,
              "name": "Fiber Connectors",
              "summary": "",
              "sort_order": 4,
              "parent_id": null
            },
            {
              "id": 18,
              "section_id": 5,
              "name": "Copper and Coaxil Connectors",
              "summary": "",
              "sort_order": 5,
              "parent_id": null
            }
          ],
          "terms": [
            {
              "id": 70,
              "section_id": 5,
              "name": "Transmission Media",
              "definition": "refers to the physical path or channel—such as twisted-pair copper, coaxial cable, fiber optic strands, or wireless airwaves—that carries signals from one point to another. The media itself does not have a built-in speed; rather, it supports signals governed by specific networking standards.",
              "image_url": "https://media.geeksforgeeks.org/wp-content/uploads/20260103160011297431/unshielded_twisted_pair.webp",
              "sort_order": 0,
              "category_id": 13
            },
            {
              "id": 71,
              "section_id": 5,
              "name": "Transceivers",
              "definition": "(combining a transmitter and receiver into a single component) are modular hardware devices that plug directly into network switches and routers. They bridge the physical media to the device's interface, allowing administrators to swap between copper and fiber media configurations on the fly.",
              "image_url": "https://www.cablify.ca/wp-content/uploads/2024/06/I3710432.jpg",
              "sort_order": 1,
              "category_id": 13
            },
            {
              "id": 72,
              "section_id": 5,
              "name": "IEEE 802.3 Standards",
              "definition": "Governs wired Ethernet networks, defining minimum cable categories, signaling types, and throughput expectations (e.g., 1000BASE-T and 10GBASE-T).",
              "image_url": "https://onlinestandart.com/wp-content/uploads/2024/10/ieee-802.3.webp",
              "sort_order": 2,
              "category_id": 14
            },
            {
              "id": 73,
              "section_id": 5,
              "name": "Single-mode fiber",
              "definition": "uses a tiny core that allows only a single mode of light to propagate, utilizing lasers or intense LEDs over long distances up to 100 kilometers.",
              "image_url": "https://mooreselectric.com/wp-content/uploads/2025/07/4e3c5dd3-f697-4f92-8d2d-8e4fc0d6621a.jpg",
              "sort_order": 3,
              "category_id": 14
            },
            {
              "id": 74,
              "section_id": 5,
              "name": "Multimode fiber",
              "definition": "features a larger core supporting multiple light modes via inexpensive LEDs over shorter ranges up to 2 kilometers.",
              "image_url": "https://mooreselectric.com/wp-content/uploads/2025/07/4e3c5dd3-f697-4f92-8d2d-8e4fc0d6621a.jpg",
              "sort_order": 4,
              "category_id": 14
            },
            {
              "id": 75,
              "section_id": 5,
              "name": "Direct Attach Copper (DAC) / Twinaxial Cable (Twin-axe)",
              "definition": "Consists of two conductors within a shared coaxial axis, frequently used for 10 Gigabit Ethernet links over short distances up to 5 meters with low latency and cost.",
              "image_url": "https://ascentoptics.com/blog/wp-content/uploads/2024/07/2-2.png",
              "sort_order": 5,
              "category_id": 14
            },
            {
              "id": 76,
              "section_id": 5,
              "name": "Coaxial Cable",
              "definition": "Comprises a central copper conductor surrounded by an insulator, shielding, and a jacket sharing a common axis (e.g., RG6 for cable modems and DOCSIS infrastructures).",
              "image_url": "https://i.ebayimg.com/images/g/scoAAOSw9ZlcroKO/s-l1200.jpg",
              "sort_order": 6,
              "category_id": 14
            },
            {
              "id": 77,
              "section_id": 5,
              "name": "Cable Speeds",
              "definition": "Cables themselves do not dictate network speed. Maximum throughput depends on the signal transmitted across the wire and the specific 802.3 Ethernet standard in use.",
              "image_url": "https://www.cablify.ca/wp-content/uploads/2024/01/Speeds-of-Cat5e-Cat6-Cat6a-Cat7-and-Cat8-Cables-Compared.jpg",
              "sort_order": 7,
              "category_id": 14
            },
            {
              "id": 78,
              "section_id": 5,
              "name": "Plenum-rated cables",
              "definition": "Are manufactured with FEP or low-smoke PVC and are designed for shared air ducts/drop ceilings to minimize hazardous smoke and toxic fumes during a fire.",
              "image_url": "https://www.electricallicenserenewal.com/Electrical-Continuing-Education-Courses/graphics/sectionPics/large/qid559.jpg",
              "sort_order": 8,
              "category_id": 14
            },
            {
              "id": 79,
              "section_id": 5,
              "name": "Non-plenum cables",
              "definition": "use standard PVC jackets and are not rated for shared environmental airflow spaces.",
              "image_url": "https://cdn.wirecare.com/system/product_images/images/000/013/953/wcdetail/6R234UTP-RD.jpg",
              "sort_order": 9,
              "category_id": 14
            },
            {
              "id": 80,
              "section_id": 5,
              "name": "802.11 Standards",
              "definition": "Managed by the IEEE and branded via the Wi-Fi Alliance, modern standards range from Wi-Fi 4 (802.11n) to Wi-Fi 7 (802.11be), utilizing the 2.4 GHz, 5 GHz, and 6 GHz frequency bands to achieve progressively higher link rates.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Q7tOySbdxgnpExWK-09tCW_SI4PVfIGKTgNt2IdzQEtrhUfp8G5SrUbe&s=10",
              "sort_order": 10,
              "category_id": 15
            },
            {
              "id": 81,
              "section_id": 5,
              "name": "Cellular",
              "definition": "Mobile networks utilizing 4G LTE (providing 150 to 300 Mbps) and 5G technology (targeting peak speeds up to 10 Gbps) to deliver high-bandwidth connectivity for mobile devices and IoT applications.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxFvxueg3RjOYc26Ss6JezUcv1FcXupDvGqkEPf50fhEo9WMQMYTFr76k3&s=10",
              "sort_order": 11,
              "category_id": 15
            },
            {
              "id": 82,
              "section_id": 5,
              "name": "Satellite",
              "definition": "Non-terrestrial connectivity used for remote locations lacking terrestrial options, offering typical download speeds around 100 Mbps and uploads around 5 Mbps. It introduces higher latency (ranging from 40 ms with Starlink to 250 ms traditionally) and requires direct line of sight, making it susceptible to \"rain fade\" during thunderstorms.",
              "image_url": "https://gsoa.space/wp-content/uploads/satellite_new-scaled.jpg",
              "sort_order": 12,
              "category_id": 15
            },
            {
              "id": 83,
              "section_id": 5,
              "name": "Protocols",
              "definition": "Transceivers are protocol-specific; for example, an Ethernet transceiver cannot be used in a Fibre Channel (FC) switch, and vice versa.",
              "image_url": "https://static.quickcreator.io/static/aaapycm22qmuab44/image/8a45fc9decd642a7a6eb9258a9dc0a2e.webp",
              "sort_order": 13,
              "category_id": 16
            },
            {
              "id": 84,
              "section_id": 5,
              "name": "Small Form-Factor Pluggable (SFP):",
              "definition": "Standard modular transceivers typically used for 1 Gbps connections, while enhanced SFP+ transceivers support speeds up to 16 Gbps for 10GbE.",
              "image_url": "https://www.baudcom.com.cn/wp-content/uploads/2025/11/What-is-SFP-and-QSFP-1024x630.jpg",
              "sort_order": 14,
              "category_id": 16
            },
            {
              "id": 85,
              "section_id": 5,
              "name": "Quad Small Form-Factor Pluggable (QSFP / QSFP+)",
              "definition": "Integrates four channels into a slightly larger form factor than a standard SFP, multiplying throughput capacity (such as supporting 40 Gbps aggregate throughput).",
              "image_url": "https://www.baudcom.com.cn/wp-content/uploads/2025/11/What-is-SFP-and-QSFP-1024x630.jpg",
              "sort_order": 15,
              "category_id": 16
            },
            {
              "id": 86,
              "section_id": 5,
              "name": "Subscriber Connector (SC)",
              "definition": "A square-shaped standard connector that uses a push-and-snap locking mechanism.",
              "image_url": "https://m.media-amazon.com/images/I/61PSWdvjc8L.jpg",
              "sort_order": 16,
              "category_id": 17
            },
            {
              "id": 87,
              "section_id": 5,
              "name": "Local Connector (LC)",
              "definition": "A smaller \"lucent\" connector featuring a retention clip on top to lock it securely into ports.",
              "image_url": "https://ascentoptics.com/blog/wp-content/uploads/2024/07/1.1.png",
              "sort_order": 17,
              "category_id": 17
            },
            {
              "id": 88,
              "section_id": 5,
              "name": "Straight Tip (ST)",
              "definition": "A bayonet-style connector that locks into place with a push and slight twist.",
              "image_url": "https://cc-globaltech.com/wp-content/uploads/st.jpg",
              "sort_order": 18,
              "category_id": 17
            },
            {
              "id": 89,
              "section_id": 5,
              "name": "Multi-fiber Push On (MPO / MTP)",
              "definition": "Houses 12 individual fibers within a single push-on connection to maximize density.",
              "image_url": "https://www.tiafotc.org/wp-content/uploads/2022/11/MPO-MTP-Male-Female-Connectors-Right-Facing-2.jpg",
              "sort_order": 19,
              "category_id": 17
            },
            {
              "id": 90,
              "section_id": 5,
              "name": "RJ11",
              "definition": "A 6-position, 2-conductor (6P2C) modular connector commonly used for analog telephones and DSL lines.",
              "image_url": "https://images.ctfassets.net/aoyx73g9h2pg/21DSu2utwStV9kBHDhJNjp/9de397ff7db8da36d195f770fc1ff3ab/RJ11-vs-RJ45-Diagram.jpg",
              "sort_order": 20,
              "category_id": 18
            },
            {
              "id": 91,
              "section_id": 5,
              "name": "RJ45",
              "definition": "An 8-position, 8-conductor modular connector used for wired local area network Ethernet connections.",
              "image_url": "https://images.ctfassets.net/aoyx73g9h2pg/21DSu2utwStV9kBHDhJNjp/9de397ff7db8da36d195f770fc1ff3ab/RJ11-vs-RJ45-Diagram.jpg",
              "sort_order": 21,
              "category_id": 18
            },
            {
              "id": 92,
              "section_id": 5,
              "name": "F-Type",
              "definition": "A threaded coaxial connector used for cable television and cable modems.",
              "image_url": "https://tejte.com/wp-content/uploads/2025/08/F-vs-bnc-connector-comparison.webp",
              "sort_order": 22,
              "category_id": 18
            },
            {
              "id": 93,
              "section_id": 5,
              "name": "Bayonet Neill–Concelman (BNC)",
              "definition": "A push-and-twist locking coaxial connector named after Paul Neil and Carl Concelman.",
              "image_url": "https://tejte.com/wp-content/uploads/2025/08/F-vs-bnc-connector-comparison.webp",
              "sort_order": 23,
              "category_id": 18
            }
          ]
        },
        {
          "id": 6,
          "chapter_id": 1,
          "code": "1.6",
          "title": "Network Topologies, Architectures, and Types",
          "summary": "Compare and contrast network topologies, architectures, and types.",
          "sort_order": 5,
          "categories": [
            {
              "id": 19,
              "section_id": 6,
              "name": "Network Topologies and Architectures",
              "summary": "",
              "sort_order": 0,
              "parent_id": null
            },
            {
              "id": 20,
              "section_id": 6,
              "name": "Enterprise Network Models",
              "summary": "",
              "sort_order": 1,
              "parent_id": null
            },
            {
              "id": 21,
              "section_id": 6,
              "name": "Traffic  Flows",
              "summary": "",
              "sort_order": 2,
              "parent_id": null
            }
          ],
          "terms": [
            {
              "id": 94,
              "section_id": 6,
              "name": "Star / Hub and Spoke",
              "definition": "A topology where all devices connect to a single central networking device (such as an Ethernet switch). If two spokes need to communicate, traffic must pass through the central hub.",
              "image_url": "https://www.cablify.ca/wp-content/uploads/2018/04/star-topology-1.jpg",
              "sort_order": 0,
              "category_id": 19
            },
            {
              "id": 95,
              "section_id": 6,
              "name": "Mesh",
              "definition": "A topology where devices or locations connect to one another over more than one network path. This redundancy allows traffic to automatically reroute if a link fails and enables load balancing across connections. While common in WANs, it can also be designed locally.",
              "image_url": "https://virima.com/wp-content/uploads/2024/07/image-15.png.webp",
              "sort_order": 1,
              "category_id": 19
            },
            {
              "id": 96,
              "section_id": 6,
              "name": "Hybrid",
              "definition": "A combined architecture formed by integrating multiple distinct topologies (such as star, point-to-point, and mesh networks) across different parts of a large enterprise network.",
              "image_url": "https://ic.nordcdn.com/v1/https://sb.nordcdn.com/m/3b51894da659e6e/original/infographic-hybrid-topology.svg",
              "sort_order": 2,
              "category_id": 19
            },
            {
              "id": 97,
              "section_id": 6,
              "name": "Spine and Leaf",
              "definition": "A modern data center architecture consisting of a \"spine\" tier of core switches connected to every \"leaf\" aggregation/access switch, while leaf switches do not connect directly to each other. Often deployed via top-of-rack switching, it ensures predictable low latency (no more than one switch away from another device) and high redundancy.",
              "image_url": "https://www.9tut.com/images/ccna_self_study/Spine_Leaf_Architecture/Spine_Leaf_West_East_Traffic.jpg",
              "sort_order": 3,
              "category_id": 19
            },
            {
              "id": 98,
              "section_id": 6,
              "name": "Point-to-Point",
              "definition": "A dedicated connection linking a single endpoint directly to another single endpoint. Historically common for WAN circuits (like T1/T3 lines), it is also used on local campuses to bridge buildings together.",
              "image_url": "https://d2cest1yk6hx2d.cloudfront.net/uninets-001/store/3057/article%20images/point-to-point-topology.png",
              "sort_order": 4,
              "category_id": 19
            },
            {
              "id": 99,
              "section_id": 6,
              "name": "Three-Tier Hierarchical Model",
              "definition": "A traditional and widely used enterprise network design separated into three distinct layers:",
              "image_url": "https://www.fibermall.com/blog/wp-content/uploads/2023/08/three-layers-1024x597.png",
              "sort_order": 5,
              "category_id": 20
            },
            {
              "id": 100,
              "section_id": 6,
              "name": "Core Layer",
              "definition": "The central backbone of the enterprise containing critical shared resources like servers, applications, and databases.",
              "image_url": "https://www.fibermall.com/blog/wp-content/uploads/2023/08/three-layers-1024x597.png",
              "sort_order": 6,
              "category_id": 20
            },
            {
              "id": 101,
              "section_id": 6,
              "name": "Distribution Layer",
              "definition": "The midpoint layer of switches acting as the bridge between user access switches and the core, providing redundancy and policy control.",
              "image_url": "https://www.fibermall.com/blog/wp-content/uploads/2023/08/three-layers-1024x597.png",
              "sort_order": 7,
              "category_id": 20
            },
            {
              "id": 102,
              "section_id": 6,
              "name": "Access Layer",
              "definition": "Switches located close to end-users (typically on each floor or building wing) where client devices plug into the network.",
              "image_url": "https://www.fibermall.com/blog/wp-content/uploads/2023/08/three-layers-1024x597.png",
              "sort_order": 8,
              "category_id": 20
            },
            {
              "id": 103,
              "section_id": 6,
              "name": "Collapsed Core Model",
              "definition": "A two-tier alternative to the three-tier model where the core and distribution layers are combined into a single unified layer, while the access layer remains unchanged. This reduces hardware costs and simplifies troubleshooting for smaller organizations, though it offers fewer redundancy options.",
              "image_url": "https://us1.discourse-cdn.com/spiceworks/original/4X/8/e/f/8efcb71adc520ec28654ba09c67145e90451b996.png",
              "sort_order": 9,
              "category_id": 20
            },
            {
              "id": 104,
              "section_id": 6,
              "name": "North-South Traffic",
              "definition": "Data traffic that flows vertically in and out of the data center, such as communications traveling between internal servers and external clients over the internet.",
              "image_url": "https://www.baeldung.com/wp-content/uploads/sites/4/2023/12/North-South-and-East-West-1024x823.png",
              "sort_order": 10,
              "category_id": 21
            },
            {
              "id": 105,
              "section_id": 6,
              "name": "East-West Traffic",
              "definition": "Data traffic that flows horizontally entirely within the same data center (e.g., a file server communicating with an image server). This traffic benefits from localized routing and generally lower response times.",
              "image_url": "https://www.baeldung.com/wp-content/uploads/sites/4/2023/12/North-South-and-East-West-1024x823.png",
              "sort_order": 11,
              "category_id": 21
            }
          ]
        },
        {
          "id": 7,
          "chapter_id": 1,
          "code": "1.7",
          "title": "IPv4 Addressing",
          "summary": "Given a scenario, use appropriate IPv4 network addressing.",
          "sort_order": 6,
          "categories": [
            {
              "id": 22,
              "section_id": 7,
              "name": "IPv4 Address Classes (Class A through E)",
              "summary": "",
              "sort_order": 0,
              "parent_id": null
            },
            {
              "id": 23,
              "section_id": 7,
              "name": "Public vs. Private IP Addressing (RFC 1918)",
              "summary": "",
              "sort_order": 1,
              "parent_id": null
            },
            {
              "id": 24,
              "section_id": 7,
              "name": "Special-Purpose IPv4 Addressing",
              "summary": "",
              "sort_order": 2,
              "parent_id": null
            },
            {
              "id": 25,
              "section_id": 7,
              "name": "Subnetting, VLSM, and CIDR",
              "summary": "To optimize address space and segment traffic efficiently, networks are divided into smaller subnetworks",
              "sort_order": 3,
              "parent_id": null
            }
          ],
          "terms": [
            {
              "id": 106,
              "section_id": 7,
              "name": "Class A through E Table",
              "definition": "Historically, IPv4 addresses were categorized into fixed classes based on their first octet or initial bits, which dictated their default subnet masks. Although classful subnetting was replaced by classless routing in 1993, these classes still serve as a foundational starting point for subnet calculations.",
              "image_url": "https://miro.medium.com/1*wbYRk65-lnwsWYSFJ656xw.png",
              "sort_order": 0,
              "category_id": 22
            },
            {
              "id": 107,
              "section_id": 7,
              "name": "Class A",
              "definition": "Large networks",
              "image_url": "https://www.firewallflow.com/wp-content/uploads/2025/08/IPv4-Address-Classes-1024x683.webp",
              "sort_order": 1,
              "category_id": 22
            },
            {
              "id": 108,
              "section_id": 7,
              "name": "Class B",
              "definition": "Medium-to-large networks",
              "image_url": "https://www.firewallflow.com/wp-content/uploads/2025/08/IPv4-Address-Classes-1024x683.webp",
              "sort_order": 2,
              "category_id": 22
            },
            {
              "id": 109,
              "section_id": 7,
              "name": "Class C",
              "definition": "Small local area networks",
              "image_url": "https://www.firewallflow.com/wp-content/uploads/2025/08/IPv4-Address-Classes-1024x683.webp",
              "sort_order": 3,
              "category_id": 22
            },
            {
              "id": 110,
              "section_id": 7,
              "name": "Class D",
              "definition": "Reserved for multicast communication; not assigned to individual devices.",
              "image_url": "https://www.firewallflow.com/wp-content/uploads/2025/08/IPv4-Address-Classes-1024x683.webp",
              "sort_order": 4,
              "category_id": 22
            },
            {
              "id": 111,
              "section_id": 7,
              "name": "Class E",
              "definition": "Reserved range for future use, testing, and experimental purposes.",
              "image_url": "https://www.firewallflow.com/wp-content/uploads/2025/08/IPv4-Address-Classes-1024x683.webp",
              "sort_order": 5,
              "category_id": 22
            },
            {
              "id": 112,
              "section_id": 7,
              "name": "Public IP Addresses",
              "definition": "Globally unique and fully routable across the public internet.",
              "image_url": "https://media.geeksforgeeks.org/wp-content/uploads/20260110121013231741/hnipo.webp",
              "sort_order": 6,
              "category_id": 23
            },
            {
              "id": 113,
              "section_id": 7,
              "name": "Private IP Addresses",
              "definition": "Restricted to internal corporate or home networks and cannot be routed directly across the public internet. Devices use Network Address Translation (NAT) to communicate externally via a public address.",
              "image_url": "https://media.geeksforgeeks.org/wp-content/uploads/20260113170728052410/gjfjhj.webp",
              "sort_order": 7,
              "category_id": 23
            },
            {
              "id": 114,
              "section_id": 7,
              "name": "RFC 1918 Standards",
              "definition": "Defines the three official private IP address blocks:",
              "image_url": "https://www.flackbox.com/wp-content/uploads/2020/04/word-image-16.png",
              "sort_order": 8,
              "category_id": 23
            },
            {
              "id": 115,
              "section_id": 7,
              "name": "10.0.0.0 through 10.255.255.255 (10.0.0.0/8)",
              "definition": "Provides over 16 million addresses (single Class A block equivalent)",
              "image_url": "https://www.flackbox.com/wp-content/uploads/2020/04/word-image-16.png",
              "sort_order": 9,
              "category_id": 23
            },
            {
              "id": 116,
              "section_id": 7,
              "name": "172.16.0.0 through 172.31.255.255 (172.16.0.0/12)",
              "definition": "Provides over 1 million addresses across 16 contiguous Class B blocks.",
              "image_url": "https://www.flackbox.com/wp-content/uploads/2020/04/word-image-16.png",
              "sort_order": 10,
              "category_id": 23
            },
            {
              "id": 117,
              "section_id": 7,
              "name": "192.168.0.0 through 192.168.255.255 (192.168.0.0/16)",
              "definition": "Provides over 65,000 addresses across 256 contiguous Class C blocks.",
              "image_url": "https://www.flackbox.com/wp-content/uploads/2020/04/word-image-16.png",
              "sort_order": 11,
              "category_id": 23
            },
            {
              "id": 118,
              "section_id": 7,
              "name": "Loopback / Localhost",
              "definition": "Range: 127.0.0.1 through 127.255.255.254.\n\nUsed to reference the local device internally (e.g., pinging 127.0.0.1 verifies that the local network protocol stack is functioning properly).",
              "image_url": "https://thecustomizewindows.cachefly.net/wp-content/uploads/2023/11/Loopback-Address-in-the-Internet-Protocol.png",
              "sort_order": 12,
              "category_id": 24
            },
            {
              "id": 119,
              "section_id": 7,
              "name": "Automatic Private IP Addressing (APIPA)",
              "definition": "Range: 169.254.0.1 through 169.254.255.254 (with usable endpoints assigned dynamically between 169.254.1.0 and 169.254.254.255).\n\nAutomatically assigns a link-local address to a device when it cannot reach a DHCP server. These addresses are restricted to the local subnet and cannot communicate across routers or access the internet.",
              "image_url": "https://ipcisco.com/wp-content/uploads/2023/04/apipa-address-range-ipcisco.com_.jpg",
              "sort_order": 13,
              "category_id": 24
            },
            {
              "id": 120,
              "section_id": 7,
              "name": "Classless Inter-domain Routing (CIDR)",
              "definition": "Adopted in 1993 to eliminate rigid class boundaries, CIDR uses a shorthand slash notation (e.g., /24) to indicate the exact number of bits allocated to the subnet mask (matching decimal equivalents like 255.255.255.0)",
              "image_url": "https://pacificconnect.co/wp-content/uploads/2024/10/Classless-Inter-Domain-Routing.png",
              "sort_order": 14,
              "category_id": 25
            },
            {
              "id": 121,
              "section_id": 7,
              "name": "Variable Length Subnet Masks (VLSM)",
              "definition": "Allows network administrators to customize subnet mask lengths per network segment rather than being locked into fixed classful boundaries. This enables precise allocation of host counts and network segments to match exact infrastructure requirements.",
              "image_url": "https://cdn.networkacademy.io/sites/default/files/2023-03/what-is-vlsm.svg",
              "sort_order": 15,
              "category_id": 25
            }
          ]
        },
        {
          "id": 8,
          "chapter_id": 1,
          "code": "1.8",
          "title": "Modern Network Environments",
          "summary": "Summarize evolving use cases for modern network environments.",
          "sort_order": 7,
          "categories": [
            {
              "id": 26,
              "section_id": 8,
              "name": "Software-Defined Networking (SDN) and SD-WAN",
              "summary": "",
              "sort_order": 0,
              "parent_id": null
            },
            {
              "id": 27,
              "section_id": 8,
              "name": "Virtual Extensible Local Area Network (VXLAN)",
              "summary": "",
              "sort_order": 1,
              "parent_id": null
            },
            {
              "id": 28,
              "section_id": 8,
              "name": "Zero Trust Architecture (ZTA)",
              "summary": "",
              "sort_order": 2,
              "parent_id": null
            },
            {
              "id": 29,
              "section_id": 8,
              "name": "Secure Access Service Edge (SASE) / Security Service Edge (SSE)",
              "summary": "",
              "sort_order": 3,
              "parent_id": null
            },
            {
              "id": 30,
              "section_id": 8,
              "name": "Infrastructure as Code (IaC)",
              "summary": "",
              "sort_order": 4,
              "parent_id": null
            },
            {
              "id": 31,
              "section_id": 8,
              "name": "IPv6 Addressing",
              "summary": "",
              "sort_order": 5,
              "parent_id": null
            }
          ],
          "terms": [
            {
              "id": 122,
              "section_id": 8,
              "name": "Separation of Planes",
              "definition": "SDN decouples the control, data (infrastructure), and management planes from physical hardware into software-controlled environments.",
              "image_url": "https://mlfk3cv5yvnx.i.optimole.com/cb:HA53.300ea/w:800/h:418/q:mauto/f:best/https://www.ninjaone.com/wp-content/uploads/2024/01/software-defined-networking.jpg",
              "sort_order": 0,
              "category_id": 26
            },
            {
              "id": 123,
              "section_id": 8,
              "name": "SD-WAN (Software-Defined Wide Area Network)",
              "definition": "Built specifically to manage the architectural shift of moving corporate data and applications into the cloud. Key characteristics include:",
              "image_url": "https://www.fortinet.com/content/dam/fortinet/images/cyberglossary/sd-wan-architecture.png",
              "sort_order": 1,
              "category_id": 26
            },
            {
              "id": 124,
              "section_id": 8,
              "name": "SD-WAN: Application Aware",
              "definition": "Automatically identifies applications and routes their traffic to the closest available service (e.g., direct cloud routing for email or databases).",
              "image_url": "https://i.postimg.cc/qvZpPnt0/Gemini-Generated-Image-ans0k1ans0k1ans0.jpg",
              "sort_order": 2,
              "category_id": 26
            },
            {
              "id": 125,
              "section_id": 8,
              "name": "SD-WAN: Zero-Touch Provisioning",
              "definition": "Enables remote routers and switches to update configurations automatically without user intervention when network layouts or cloud locations change.",
              "image_url": "https://i.postimg.cc/qvZpPnt0/Gemini-Generated-Image-ans0k1ans0k1ans0.jpg",
              "sort_order": 3,
              "category_id": 26
            },
            {
              "id": 126,
              "section_id": 8,
              "name": "SD-WAN: Transport Agnostic",
              "definition": "Works across any underlying physical link type, whether high-speed fiber, 5G, or DSL.",
              "image_url": "https://i.postimg.cc/qvZpPnt0/Gemini-Generated-Image-ans0k1ans0k1ans0.jpg",
              "sort_order": 4,
              "category_id": 26
            },
            {
              "id": 127,
              "section_id": 8,
              "name": "SD-WAN: Central Policy Management",
              "definition": "Centralizes configuration changes on a single management console and pushes them automatically out to all SD-WAN routers.",
              "image_url": "https://i.postimg.cc/qvZpPnt0/Gemini-Generated-Image-ans0k1ans0k1ans0.jpg",
              "sort_order": 5,
              "category_id": 26
            },
            {
              "id": 128,
              "section_id": 8,
              "name": "Data Center Interconnect (DCI)",
              "definition": "Seamlessly connects workloads and applications distributed across multiple cloud or physical data centers worldwide without worrying about localized IP addressing schemes.",
              "image_url": "https://static.quickcreator.io/static/aaapycm22qmuab44/image/bf8cf055da894796b63bb20eb38e02ee.webp",
              "sort_order": 6,
              "category_id": 27
            },
            {
              "id": 129,
              "section_id": 8,
              "name": "Layer 2 Encapsulation",
              "definition": "Overcomes the 4,000-VLAN limit and non-routable nature of traditional VLANs by supporting up to 16 million virtual networks encapsulated over standard Layer 3 IP networks using UDP and VXLAN tunnels.",
              "image_url": "https://learningnetwork.cisco.com/sfc/servlet.shepherd/version/renditionDownload?rendition=THUMB720BY480&versionId=0683i000001rnUi&operationContext=CHATTER&contentId=05T3i00000ACKeH&page=0",
              "sort_order": 7,
              "category_id": 27
            },
            {
              "id": 130,
              "section_id": 8,
              "name": "Core Philosophy",
              "definition": "Treats every user, device, and application as inherently untrusted, replacing traditional perimeter defense models.",
              "image_url": "https://i.postimg.cc/Ss8hwv9Z/475f9d65-4612-46af-93fb-70803e8e47d1.jpg",
              "sort_order": 8,
              "category_id": 28
            },
            {
              "id": 131,
              "section_id": 8,
              "name": "Policy-Based Authentication",
              "definition": "Evaluates adaptive identities (such as employment tenure, geographic location, IP address, and connection risk factors) before granting access.",
              "image_url": "https://i.postimg.cc/Ss8hwv9Z/475f9d65-4612-46af-93fb-70803e8e47d1.jpg",
              "sort_order": 9,
              "category_id": 28
            },
            {
              "id": 132,
              "section_id": 8,
              "name": "Authorization",
              "definition": "Enforces strict permissions dynamically based on the verified user, their location, and device compliance (e.g., restricting help desk staff versus managers).",
              "image_url": "https://i.postimg.cc/Ss8hwv9Z/475f9d65-4612-46af-93fb-70803e8e47d1.jpg",
              "sort_order": 10,
              "category_id": 28
            },
            {
              "id": 133,
              "section_id": 8,
              "name": "Least Privilege Access",
              "definition": "Limits users and devices to the absolute minimum access rights required for their job functions, mitigating potential malware damage.",
              "image_url": "https://i.postimg.cc/Ss8hwv9Z/475f9d65-4612-46af-93fb-70803e8e47d1.jpg",
              "sort_order": 11,
              "category_id": 28
            },
            {
              "id": 134,
              "section_id": 8,
              "name": "Cloud-Native Security",
              "definition": "Acts as a next-generation virtual private network that pushes enterprise security services (such as Zero Trust Network Access, Firewall-as-a-Service, and DNS security) directly into the cloud close to distributed applications and users.",
              "image_url": "https://cdn.thinksys.com/wp-content/uploads/2023/07/Cloud-Native-Security.jpg",
              "sort_order": 12,
              "category_id": 29
            },
            {
              "id": 135,
              "section_id": 8,
              "name": "Unified Access",
              "definition": "Automatically secures connections for office, remote, and mobile users via a lightweight client without requiring manual user toggling.",
              "image_url": "https://i.postimg.cc/pX3wKt6C/2bd9c00d-26bd-42f4-b707-05aac5dc79e4.jpg",
              "sort_order": 13,
              "category_id": 29
            },
            {
              "id": 136,
              "section_id": 8,
              "name": "Automation & Playbooks",
              "definition": "Replaces manual device configurations with code-defined configuration files and automates operational or incident response workflows via playbooks (such as automated SOAR incident remediation)",
              "image_url": "https://i.postimg.cc/Qd0n0G66/5d7b5d00-f3ba-4935-b504-7dcf3bc61cce.png",
              "sort_order": 14,
              "category_id": 30
            },
            {
              "id": 137,
              "section_id": 8,
              "name": "Compliance & Upgrades",
              "definition": "Eliminates configuration drift by ensuring all deployments match strict template compliance, and simplifies software upgrades through code definition updates.",
              "image_url": "https://i.postimg.cc/pTpTpHS6/20f03b40-ec49-4a8a-aaf6-6b4253b4dfdf.png",
              "sort_order": 15,
              "category_id": 30
            },
            {
              "id": 138,
              "section_id": 8,
              "name": "Source Control",
              "definition": "Utilizes central repositories and version control systems (like Git) to handle branching, testing, collaborative building, and automated conflict resolution.",
              "image_url": "https://miro.medium.com/1*mtsk3fQ_BRemFidhkel3dA.png",
              "sort_order": 16,
              "category_id": 30
            },
            {
              "id": 139,
              "section_id": 8,
              "name": "Mitigating Address Exhaustion",
              "definition": "Replaces the limited 32-bit IPv4 space (which maxes out at ~4.29 billion addresses and relies heavily on NAT) with a massive 128-bit address space utilizing hexadecimal notation and compression rules.",
              "image_url": "https://www.ipxo.com/content/uploads/2020/11/What-Is-IPv4-Address-Exhaustion-and-How-Can-We-Alleviate-It_MAIN-min.png",
              "sort_order": 17,
              "category_id": 31
            },
            {
              "id": 140,
              "section_id": 8,
              "name": "Compatibility Requirements",
              "definition": "Because IPv6 and IPv4 cannot directly communicate, transition strategies include:",
              "image_url": "https://i.postimg.cc/tC1hL0CK/83f300af-9c39-4e9f-9ee9-2c724aa8fb98.png",
              "sort_order": 18,
              "category_id": 31
            },
            {
              "id": 141,
              "section_id": 8,
              "name": "Tunneling",
              "definition": "Encapsulating one protocol within another (though legacy methods like 6to4 are largely obsolete).",
              "image_url": "https://i.postimg.cc/tC1hL0CK/83f300af-9c39-4e9f-9ee9-2c724aa8fb98.png",
              "sort_order": 19,
              "category_id": 31
            },
            {
              "id": 142,
              "section_id": 8,
              "name": "Dual Stack",
              "definition": "Assigning both IPv4 and IPv6 protocol stacks and addresses concurrently to network interfaces and routing tables.",
              "image_url": "https://i.postimg.cc/tC1hL0CK/83f300af-9c39-4e9f-9ee9-2c724aa8fb98.png",
              "sort_order": 20,
              "category_id": 31
            },
            {
              "id": 143,
              "section_id": 8,
              "name": "NAT64 / DNS64",
              "definition": "Utilizing specialized translation routers and DNS servers to allow native IPv6 clients to communicate seamlessly with IPv4-only servers.",
              "image_url": "https://i.postimg.cc/tC1hL0CK/83f300af-9c39-4e9f-9ee9-2c724aa8fb98.png",
              "sort_order": 21,
              "category_id": 31
            }
          ]
        }
      ]
    },
    {
      "id": 2,
      "number": 2,
      "title": "Network Implementation",
      "summary": "Put a network together: routing, switching, wireless, and the physical install.",
      "exam_percent": 20,
      "sort_order": 1,
      "sections": [
        {
          "id": 9,
          "chapter_id": 2,
          "code": "2.1",
          "title": "Routing Technologies",
          "summary": "Explain characteristics of routing technologies.",
          "sort_order": 0,
          "categories": [
            {
              "id": 32,
              "section_id": 9,
              "name": "Static vs. Dynamic Routing",
              "summary": "",
              "sort_order": 0,
              "parent_id": null
            },
            {
              "id": 33,
              "section_id": 9,
              "name": "Route Selection",
              "summary": "When multiple routes are available in a routing table, a router evaluates them using a specific tie-breaking hierarchy:",
              "sort_order": 1,
              "parent_id": null
            },
            {
              "id": 34,
              "section_id": 9,
              "name": "Address Translation",
              "summary": "",
              "sort_order": 2,
              "parent_id": null
            },
            {
              "id": 35,
              "section_id": 9,
              "name": "First Hop Redundancy Protocol (FHRP) and Virtual IP (VIP)",
              "summary": "",
              "sort_order": 3,
              "parent_id": null
            },
            {
              "id": 36,
              "section_id": 9,
              "name": "Subinterfaces",
              "summary": "",
              "sort_order": 4,
              "parent_id": null
            }
          ],
          "terms": [
            {
              "id": 144,
              "section_id": 9,
              "name": "Static Routing",
              "definition": "Routes are manually configured by the network administrator on every router. It introduces zero dynamic protocol overhead (saving router CPU and memory cycles) and is secure and effective for stub networks. However, it does not scale well to large environments and requires manual updates whenever network layouts change.",
              "image_url": "https://www.scaler.com/topics/images/static-routing_thumbnail.webp",
              "sort_order": 0,
              "category_id": 32
            },
            {
              "id": 145,
              "section_id": 9,
              "name": "Dynamic Routing",
              "definition": "Routers automatically discover other routers, share network updates, and build their routing tables in real time. While it eliminates manual route configuration, it consumes router CPU and memory resources. Key dynamic routing protocols include:",
              "image_url": "https://cdn.educba.com/academy/wp-content/uploads/2019/06/Dynamic-Routing.jpg",
              "sort_order": 1,
              "category_id": 32
            },
            {
              "id": 146,
              "section_id": 9,
              "name": "Dynamic - Border Gateway Protocol (BGP)",
              "definition": "An exterior gateway protocol designed to route traffic between different autonomous systems across wide area networks and the public internet.",
              "image_url": "https://www.cloudns.net/blog/wp-content/uploads/2024/08/BGP-ClouDNS-1024x576.png",
              "sort_order": 2,
              "category_id": 32
            },
            {
              "id": 147,
              "section_id": 9,
              "name": "Dynamic - Enhanced Interior Gateway Routing Protocol (EIGRP)",
              "definition": "A fast-converging protocol that optimizes network bandwidth and is popular in Cisco-centric environments.",
              "image_url": "https://networkwalks.com/wp-content/uploads/2022/04/enhanced-interior-gateway-protocol-as-1.png",
              "sort_order": 3,
              "category_id": 32
            },
            {
              "id": 148,
              "section_id": 9,
              "name": "Dynamic - Open Shortest Path First (OSPF)",
              "definition": "An open standard, link-state routing protocol used within an autonomous system across various manufacturers' hardware, calculating optimal paths based on link costs.",
              "image_url": "https://s8185.pcdn.co/wp-content/uploads/2013/10/54.png",
              "sort_order": 4,
              "category_id": 32
            },
            {
              "id": 149,
              "section_id": 9,
              "name": "Prefix Length",
              "definition": "The router first looks for the most specific route by checking the subnet mask length. Longer prefix lengths (e.g., a /32 host route over a /24 network route) take precedence.",
              "image_url": "https://sps-support.honeywell.com/servlet/rtaImage?eid=ka0Hr000002aNQs&feoid=00N6A00000NdlS0&refid=0EM2G000002qxvF",
              "sort_order": 5,
              "category_id": 33
            },
            {
              "id": 150,
              "section_id": 9,
              "name": "Administrative Distance",
              "definition": "Measures the trustworthiness or priority of the route source. Lower administrative distances are preferred. For example, directly connected routes have an administrative distance of 0, static routes have 1, EIGRP is 90, and OSPF is 110.",
              "image_url": "https://www.flackbox.com/wp-content/uploads/2020/03/word-image-4.webp",
              "sort_order": 6,
              "category_id": 33
            },
            {
              "id": 151,
              "section_id": 9,
              "name": "Metric",
              "definition": "An internal value used by a specific routing protocol to rank paths (e.g., hop count in RIP or link cost in OSPF). Lower metrics are preferred, though metrics cannot be compared across different routing protocols.",
              "image_url": "https://i.pcmag.com/imagery/encyclopedia-terms/hop-count-hop.fit_lim.size_1050x.gif",
              "sort_order": 7,
              "category_id": 33
            },
            {
              "id": 152,
              "section_id": 9,
              "name": "Network Address Translation (NAT)",
              "definition": "Translates private, non-routable local IP addresses (defined under RFC 1918) into public IP addresses so internal devices can access the internet.",
              "image_url": "https://cibersafety.com/wp-content/uploads/2025/07/NAT.png",
              "sort_order": 8,
              "category_id": 34
            },
            {
              "id": 153,
              "section_id": 9,
              "name": "Port Address Translation (PAT) / NAT Overload",
              "definition": "Maps unique source port numbers along with private IP addresses to a single public IP address. This allows multiple internal hosts to share one public IP address simultaneously.",
              "image_url": "https://www.pynetlabs.com/wp-content/uploads/2025/02/pat-nat-overloaded-1024x729.jpg",
              "sort_order": 9,
              "category_id": 34
            },
            {
              "id": 154,
              "section_id": 9,
              "name": "First Hop Redundancy Protocol (FHRP)",
              "definition": "Provides router redundancy and high availability on a local network segment, ensuring continuous connectivity if a primary router goes offline.",
              "image_url": "https://www.pynetlabs.com/wp-content/uploads/2022/09/FHRP-First-Hop-Redundancy-Protocol-1024x597.jpeg",
              "sort_order": 10,
              "category_id": 35
            },
            {
              "id": 155,
              "section_id": 9,
              "name": "Virtual IP (VIP)",
              "definition": "A shared virtual IP address assigned as the default gateway for client workstations. If the active primary router fails, the VIP and traffic routing seamlessly fail over to a standby router without requiring reconfiguration on end-user devices.",
              "image_url": "https://as2.ftcdn.net/jpg/03/92/00/85/1000_F_392008533_QrGljlWQkUHoKpd902bUzZpr7FENGckW.jpg",
              "sort_order": 11,
              "category_id": 35
            },
            {
              "id": 156,
              "section_id": 9,
              "name": "Subinterfaces",
              "definition": "Logical virtual interfaces created by dividing a single physical router interface into multiple sub-interfaces (e.g., gigabitethernet 1/1.10). This allows a single physical port and cable to handle trunked traffic from multiple VLANs and separate IP subnets concurrently.",
              "image_url": "https://supportforums.cisco.com/sites/default/files/legacy/2/1/1/106112-no%20inter.bmp",
              "sort_order": 12,
              "category_id": 36
            }
          ]
        },
        {
          "id": 10,
          "chapter_id": 2,
          "code": "2.2",
          "title": "Switching Technologies and Features",
          "summary": "Given a scenario, configure switching technologies and features.",
          "sort_order": 1,
          "categories": [
            {
              "id": 37,
              "section_id": 10,
              "name": "Virtual Local Area Network (VLAN)",
              "summary": "",
              "sort_order": 0,
              "parent_id": null
            },
            {
              "id": 38,
              "section_id": 10,
              "name": "Interface Configuration",
              "summary": "",
              "sort_order": 1,
              "parent_id": null
            },
            {
              "id": 39,
              "section_id": 10,
              "name": "Spanning Tree Protocol (STP)",
              "summary": "",
              "sort_order": 2,
              "parent_id": null
            },
            {
              "id": 40,
              "section_id": 10,
              "name": "Maximum Transmission Unit (MTU) & Jumbo Frames",
              "summary": "",
              "sort_order": 3,
              "parent_id": null
            }
          ],
          "terms": [
            {
              "id": 157,
              "section_id": 10,
              "name": "VLAN Concepts",
              "definition": "VLANs logically segment devices into separate broadcast domains on the same physical switch, identifying them by numbers (e.g., VLAN 1, 2, 3) rather than physical location. This eliminates the need for separate switches for distinct groups of devices.",
              "image_url": "https://cdn.networkacademy.io/sites/default/files/2025-06/vlan-concept.gif",
              "sort_order": 0,
              "category_id": 37
            },
            {
              "id": 158,
              "section_id": 10,
              "name": "VLAN Database & Configuration",
              "definition": "Defined directly within the switch configuration to assign specific switch ports to designated VLAN IDs, ensuring only devices within the same VLAN can communicate.",
              "image_url": "https://www.letsconfig.com/wp-content/uploads/2018/08/Configure-VLAN-LAB-01-topology.png",
              "sort_order": 1,
              "category_id": 37
            },
            {
              "id": 159,
              "section_id": 10,
              "name": "Switch Virtual Interface (SVI)",
              "definition": "A logical interface configured on a Layer 3 switch that enables routing functionality between different VLANs within the same hardware device.",
              "image_url": "https://statics.mylandingpages.co/static/aaapycm22qmuab44/image/18064ddc91a440bd8c9cacf9f55e2cc5.webp",
              "sort_order": 2,
              "category_id": 37
            },
            {
              "id": 160,
              "section_id": 10,
              "name": "Native VLAN",
              "definition": "A designated VLAN that traverses a trunk link without a VLAN tag. It is used for administrative switch communications, management traffic, or legacy devices that do not support 802.1Q tags. Both connected switches must have identical native VLAN settings to avoid log errors.",
              "image_url": "https://cdn.educba.com/academy/wp-content/uploads/2019/12/What-is-Native-VLAN.jpg",
              "sort_order": 3,
              "category_id": 38
            },
            {
              "id": 161,
              "section_id": 10,
              "name": "Voice VLAN",
              "definition": "Separates Voice over IP (VoIP) traffic from standard computer data traffic over a single physical cable. This ensures consistent audio quality and prevents bursty data traffic from degrading voice calls.",
              "image_url": "https://cdn.networklessons.com/wp-content/uploads/2016/12/switch-ip-phone-host-two-cables.png",
              "sort_order": 4,
              "category_id": 38
            },
            {
              "id": 162,
              "section_id": 10,
              "name": "802.1Q Tagging",
              "definition": "Standardized trunking method that inserts a 12-bit VLAN tag into an Ethernet frame header. It supports up to 4,094 VLANs traversing a single shared physical connection between switches.",
              "image_url": "https://ipcisco.com/wp-content/uploads/2018/10/802.1Q-vlan-tagging-ipcisco.jpg",
              "sort_order": 5,
              "category_id": 38
            },
            {
              "id": 163,
              "section_id": 10,
              "name": "Link Aggregation (LAG / Port Bonding)",
              "definition": "Combines multiple physical switch interfaces into a single logical high-bandwidth channel. Protocols like LACP (Link Aggregation Control Protocol) automatically configure and manage these aggregated links between devices.",
              "image_url": "https://nybsys.com/wp-content/uploads/2024/11/What-is-link-Aggregation.webp",
              "sort_order": 6,
              "category_id": 38
            },
            {
              "id": 164,
              "section_id": 10,
              "name": "Speed",
              "definition": "Defines the data transfer rate of an interface (e.g., 10 Mbps, 100 Mbps, 1 Gbps, 10 Gbps). Speed settings must match on both connected devices or be set to auto-negotiate.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3wKtX_XGC7mq4iO5cfOfb8HzJezzonObHyqOZJfCQCmcBLXMeVfpnaN8&s=10",
              "sort_order": 7,
              "category_id": 38
            },
            {
              "id": 165,
              "section_id": 10,
              "name": "Duplex",
              "definition": "Configured as half-duplex or full-duplex. A duplex mismatch between connected devices does not drop link lights entirely, but it causes severe performance degradation and inefficiency.",
              "image_url": "https://images.ctfassets.net/aoyx73g9h2pg/31qM7EbiIPjzCdrzVuptKY/c664358a516851b76375b4985bf4d928/Half-Duplex-vs-Full-Duplex-Diagram.jpg",
              "sort_order": 8,
              "category_id": 38
            },
            {
              "id": 166,
              "section_id": 10,
              "name": "Loop Prevention",
              "definition": "Automatically detects and prevents catastrophic switching loops caused by redundant physical connections between switches. Without STP, broadcast storms and frame looping can overwhelm switch capacities within seconds.",
              "image_url": "https://miro.medium.com/1*Bfh8mdgB2jA0K3Ul4i03-Q.png",
              "sort_order": 9,
              "category_id": 39
            },
            {
              "id": 167,
              "section_id": 10,
              "name": "Port States",
              "definition": "Configures switch ports into operational states including blocking (to prevent loops), listening, learning, and forwarding.",
              "image_url": "https://media.geeksforgeeks.org/wp-content/uploads/20211018133105/Capture-660x433.PNG",
              "sort_order": 10,
              "category_id": 39
            },
            {
              "id": 168,
              "section_id": 10,
              "name": "Rapid Spanning Tree Protocol (RSTP / 802.1w)",
              "definition": "A modern evolution of STP that reduces network convergence times from 30–50 seconds down to approximately 6 seconds while remaining backward-compatible with original STP devices.",
              "image_url": "https://ipwithease.com/wp-content/uploads/2023/08/Rapid-Spanning-Tree-Protocol-RSTP.jpg.webp",
              "sort_order": 11,
              "category_id": 39
            },
            {
              "id": 169,
              "section_id": 10,
              "name": "MTU (Maximum Transmission Unit)",
              "definition": "Specifies the largest packet size that can be transmitted across a network medium.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK1UuGrGQI-eO753seNhzYeKpIkTHMorjHnOgkerjB_URC8yXYJJgppS4&s=10",
              "sort_order": 12,
              "category_id": 40
            },
            {
              "id": 170,
              "section_id": 10,
              "name": "Jumbo Frames",
              "definition": "Extends standard 1,500-byte Ethernet frames up to an MTU of 9,216 bytes (commonly configured at 9,000 bytes). This allows large data transfers to occur more efficiently with fewer packets.",
              "image_url": "https://mailave.wordpress.com/wp-content/uploads/2014/08/jumbo.png",
              "sort_order": 13,
              "category_id": 40
            },
            {
              "id": 171,
              "section_id": 10,
              "name": "Requirements",
              "definition": "Every device along the communication path—including all switches and routers—must support and be configured for jumbo frames; otherwise, mismatched devices will drop the frames entirely",
              "image_url": "https://usabilitygeek.com/wp-content/uploads/2018/05/requirements-gathering-ux-1-lead.jpg",
              "sort_order": 14,
              "category_id": 40
            }
          ]
        },
        {
          "id": 11,
          "chapter_id": 2,
          "code": "2.3",
          "title": "Wireless Devices and Technologies",
          "summary": "Given a scenario, select and configure wireless devices and technologies.",
          "sort_order": 2,
          "categories": [
            {
              "id": 41,
              "section_id": 11,
              "name": "Frequencies, Channels, and Bandwidth",
              "summary": "",
              "sort_order": 0,
              "parent_id": null
            },
            {
              "id": 42,
              "section_id": 11,
              "name": "Regulatory Impacts & Standards",
              "summary": "",
              "sort_order": 1,
              "parent_id": null
            },
            {
              "id": 43,
              "section_id": 11,
              "name": "Service Set Identifiers (SSIDs) and Identifiers",
              "summary": "",
              "sort_order": 2,
              "parent_id": null
            },
            {
              "id": 44,
              "section_id": 11,
              "name": "Network Types",
              "summary": "",
              "sort_order": 3,
              "parent_id": null
            },
            {
              "id": 45,
              "section_id": 11,
              "name": "Security, Encryption, and Access Control",
              "summary": "",
              "sort_order": 4,
              "parent_id": null
            },
            {
              "id": 46,
              "section_id": 11,
              "name": "Antennas and Access Point Management",
              "summary": "",
              "sort_order": 5,
              "parent_id": null
            }
          ],
          "terms": [
            {
              "id": 172,
              "section_id": 11,
              "name": "Frequency Options",
              "definition": "2.4 GHz: Offers wider coverage range but is more prone to interference and congestion due to fewer channels.   \n\n5 GHz: Provides higher throughput and more channels with shorter range compared to 2.4 GHz.   \n\n6 GHz: Introduced with Wi-Fi 6E/Wi-Fi 7, providing massive additional spectrum, minimal congestion, and wide channels.",
              "image_url": "https://www.centurylink.com/content/dam/home/help/internet/speed-infographics/2.4-vs-5_lg.png",
              "sort_order": 0,
              "category_id": 41
            },
            {
              "id": 173,
              "section_id": 11,
              "name": "Channels & Channel Width",
              "definition": "Frequencies are grouped into numbered channels for simplicity. Bandwidths range from 20 MHz up to 160 MHz (or higher in newer standards).",
              "image_url": "https://www.mbreviews.com/wp-content/uploads/2022/09/channel-bandwidth-5ghz-featured.jpg",
              "sort_order": 1,
              "category_id": 41
            },
            {
              "id": 174,
              "section_id": 11,
              "name": "Non-Overlapping Channels",
              "definition": "In the 2.4 GHz spectrum, there are only three completely non-overlapping 20 MHz channels (typically channels 1, 6, and 11), whereas 5 GHz and 6 GHz provide significantly more non-overlapping options.",
              "image_url": "https://accessagility.com/images/hubspot/37b464b2-5ghz-open-channels-40mhz-wide.png",
              "sort_order": 2,
              "category_id": 41
            },
            {
              "id": 175,
              "section_id": 11,
              "name": "Band Steering",
              "definition": "An access point feature that forces dual-band capable client devices away from congested 2.4 GHz frequencies and steers them onto the faster 5 GHz or 6 GHz bands.",
              "image_url": "https://resinc.com.au/wp-content/uploads/2024/04/What-is-it_-And-what-to-do_.webp",
              "sort_order": 3,
              "category_id": 41
            },
            {
              "id": 176,
              "section_id": 11,
              "name": "802.11h",
              "definition": "Adds interoperability features to harmonize wireless spectrum use across international boundaries.",
              "image_url": "https://assets.sutori.com/user-uploads/image/bb3c0612-64b0-4fe2-87b2-ba42116d3d47/802.11%20h.jpeg",
              "sort_order": 4,
              "category_id": 42
            },
            {
              "id": 177,
              "section_id": 11,
              "name": "Dynamic Frequency Selection (DFS)",
              "definition": "Automatically detects and shifts channels to avoid interfering with radar systems.",
              "image_url": "https://www.snbforums.com/attachments/idl_dfs-jpg.6269/",
              "sort_order": 5,
              "category_id": 42
            },
            {
              "id": 178,
              "section_id": 11,
              "name": "Transmit Power Control (TPC)",
              "definition": "Allows access points to dynamically manage and lower client transmit power levels to optimize performance and prevent interference.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-bBfQx4wVN0KctxxFeT657PxMWsuizxnHVp4eMs10pXitWmh4EmCo_oE&s=10",
              "sort_order": 6,
              "category_id": 42
            },
            {
              "id": 179,
              "section_id": 11,
              "name": "Service Set Identifier (SSID)",
              "definition": "The human-readable name of the wireless network broadcasted to clients.",
              "image_url": "https://i.ytimg.com/vi/8a7iNz14EcU/maxresdefault.jpg",
              "sort_order": 7,
              "category_id": 43
            },
            {
              "id": 180,
              "section_id": 11,
              "name": "Basic Service Set Identifier (BSSID)",
              "definition": "The unique hardware MAC address of a specific wireless access point interface.",
              "image_url": "https://www.shutterstock.com/image-illustration/bssid-meaning-basic-service-set-260nw-2669239085.jpg",
              "sort_order": 8,
              "category_id": 43
            },
            {
              "id": 181,
              "section_id": 11,
              "name": "Extended Service Set Identifier (ESSID)",
              "definition": "A shared SSID configured across multiple access points, allowing clients to roam seamlessly between them across a building or campus.",
              "image_url": "https://acronymsandslang.com/acronym_image/171/c9975b039af5900f9a12dc13241cc633.jpg",
              "sort_order": 9,
              "category_id": 43
            },
            {
              "id": 182,
              "section_id": 11,
              "name": "Mesh Networks",
              "definition": "Features multiple interconnected access points that communicate with each other to provide dynamic, self-healing coverage across a wide area.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBi3ZuPyC1HEg4H9oD0eo1HQbcKFi35eCP1GKlE4YJGMFXpr-KUTS94_py&s=10",
              "sort_order": 10,
              "category_id": 44
            },
            {
              "id": 183,
              "section_id": 11,
              "name": "Ad Hoc (Independent Basic Service Set / IBSS)",
              "definition": "A peer-to-peer wireless connection where two or more devices communicate directly with each other without using a centralized access point (often used for initial IoT configuration).",
              "image_url": "https://media.geeksforgeeks.org/wp-content/uploads/20201105190847/fffd2.png",
              "sort_order": 11,
              "category_id": 44
            },
            {
              "id": 184,
              "section_id": 11,
              "name": "Point-to-Point",
              "definition": "A dedicated bridge mode connecting two specific locations (such as bridging two buildings) using directional antennas over an extended distance.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSElfrE0s16FHmHbBYFb_fuO14kLGZ04prokQ1uOhud2gtrspO2BpinypRc&s=10",
              "sort_order": 12,
              "category_id": 44
            },
            {
              "id": 185,
              "section_id": 11,
              "name": "Infrastructure",
              "definition": "The standard operational mode where wireless clients connect to a centralized access point to access the local wired network and internet resources.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4yDuSLeuWxusiFQvjYARoobWxPTOHwCoZJv3n00MhgiuQ6TPtfXK5Z3A&s=10",
              "sort_order": 13,
              "category_id": 44
            },
            {
              "id": 186,
              "section_id": 11,
              "name": "WPA2 (Wi-Fi Protected Access 2)",
              "definition": "Uses the AES cipher combined with CCMP for robust data confidentiality and message integrity.",
              "image_url": "https://www.pandasecurity.com/en/mediacenter/src/uploads/2020/03/WPA2-icon.png",
              "sort_order": 14,
              "category_id": 45
            },
            {
              "id": 187,
              "section_id": 11,
              "name": "WPA3",
              "definition": "The modern standard utilizing GCMP (Galois Counter Mode Protocol) and AES for enhanced security, improved open-network data protection, and stronger resistance to offline brute-force attacks.",
              "image_url": "https://image.pngaaa.com/436/5264436-middle.png",
              "sort_order": 15,
              "category_id": 45
            },
            {
              "id": 188,
              "section_id": 11,
              "name": "Guest Networks & Captive Portals",
              "definition": "Guest networks isolate visitors from the internal corporate network. They often utilize a captive portal—a web page prompt requiring users to review terms of service or enter credentials before granting temporary internet access.",
              "image_url": "https://home-cdn.reolink.us/wp-content/uploads/2025/01/guest-wifi.jpg",
              "sort_order": 16,
              "category_id": 45
            },
            {
              "id": 189,
              "section_id": 11,
              "name": "Pre-Shared Key (PSK) / Personal",
              "definition": "Utilizes a single, shared password for all users connecting to the network.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjsHrJzSqIJcuz-S9tdYcwkzo_JU_fYi-0mYw_W-pwf6LT9zZupfs0TynR&s=10",
              "sort_order": 17,
              "category_id": 45
            },
            {
              "id": 190,
              "section_id": 11,
              "name": "Enterprise (802.1X)",
              "definition": "Requires individual user credentials (usernames, passwords, or certificates) authenticated against a centralized RADIUS or AAA server.",
              "image_url": "https://cloudradius.com/wp-content/uploads/2023/06/8021x-e1633710868877.jpg",
              "sort_order": 18,
              "category_id": 45
            },
            {
              "id": 191,
              "section_id": 11,
              "name": "Omnidirectional",
              "definition": "Radiates wireless signals evenly in a 360-degree horizontal pattern, ideal for centralized, open-room placement.",
              "image_url": "https://cdn.shopify.com/s/files/1/0935/3379/8699/files/omni-vs-directional-cellular-antennas_jpg.png?v=1757405131",
              "sort_order": 19,
              "category_id": 46
            },
            {
              "id": 192,
              "section_id": 11,
              "name": "Directional (e.g., Yagi, Parabolic)",
              "definition": "Focuses wireless transmission and reception into a specific beam path, providing high gain over long distances or point-to-point building links.",
              "image_url": "https://cdn.shopify.com/s/files/1/0935/3379/8699/files/omni-vs-directional-cellular-antennas_jpg.png?v=1757405131",
              "sort_order": 20,
              "category_id": 46
            },
            {
              "id": 193,
              "section_id": 11,
              "name": "Autonomous APs",
              "definition": "Standalone, independent devices that must be configured individually.",
              "image_url": "https://www.speaknetworks.com/wp-content/uploads/2016/06/CiscoAPLightweightAutonomous-1.jpeg",
              "sort_order": 21,
              "category_id": 46
            },
            {
              "id": 194,
              "section_id": 11,
              "name": "Lightweight APs",
              "definition": "Managed centrally by a Wireless LAN Controller (WLC) using protocols like CAPWAP (Control and Provisioning of Wireless Access Points), providing a \"single pane of glass\" for enterprise deployment, monitoring, and policy enforcement.",
              "image_url": "https://www.speaknetworks.com/wp-content/uploads/2016/06/CiscoAPLightweightAutonomous-1.jpeg",
              "sort_order": 22,
              "category_id": 46
            }
          ]
        },
        {
          "id": 12,
          "chapter_id": 2,
          "code": "2.4",
          "title": "Physical Installations",
          "summary": "Explain important factors of physical installations.",
          "sort_order": 3,
          "categories": [
            {
              "id": 47,
              "section_id": 12,
              "name": "Locations",
              "summary": "",
              "sort_order": 0,
              "parent_id": null
            },
            {
              "id": 48,
              "section_id": 12,
              "name": "Rack Size",
              "summary": "",
              "sort_order": 1,
              "parent_id": null
            },
            {
              "id": 49,
              "section_id": 12,
              "name": "Port-Side Intake / Exhaust & Airflow",
              "summary": "",
              "sort_order": 2,
              "parent_id": null
            },
            {
              "id": 50,
              "section_id": 12,
              "name": "Cabling",
              "summary": "",
              "sort_order": 3,
              "parent_id": null
            },
            {
              "id": 51,
              "section_id": 12,
              "name": "Lockable Racks",
              "summary": "",
              "sort_order": 4,
              "parent_id": null
            },
            {
              "id": 52,
              "section_id": 12,
              "name": "Power",
              "summary": "",
              "sort_order": 5,
              "parent_id": null
            },
            {
              "id": 53,
              "section_id": 12,
              "name": "Environmental Factors",
              "summary": "",
              "sort_order": 6,
              "parent_id": null
            }
          ],
          "terms": [
            {
              "id": 195,
              "section_id": 12,
              "name": "Main Distribution Frame (MDF)",
              "definition": "The central data center or primary distribution facility where wide area network (WAN) connections, internal local network connections, core routers, switches, and core servers terminate. It acts as an ideal testing point for both internal and external connections.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShULwh5JLw7ZVpFLA6yMcnGWwiybPG7SufoiGbkptQkWPB23RDs_IvICQw&s=10",
              "sort_order": 0,
              "category_id": 47
            },
            {
              "id": 196,
              "section_id": 12,
              "name": "Intermediate Distribution Frame (IDF)",
              "definition": "Located on separate floors or in separate buildings, IDFs house switches, routers, and equipment that connect local user areas back to the central MDF.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShULwh5JLw7ZVpFLA6yMcnGWwiybPG7SufoiGbkptQkWPB23RDs_IvICQw&s=10",
              "sort_order": 1,
              "category_id": 47
            },
            {
              "id": 197,
              "section_id": 12,
              "name": "Standard Width",
              "definition": "Most equipment racks are standardized at 19 inches wide.",
              "image_url": "https://payapress.com/wp-content/uploads/2026/08/Standard-Server-Rack-Dimensions-Width-Height-Depth-and-Hole-Pattern.webp",
              "sort_order": 2,
              "category_id": 48
            },
            {
              "id": 198,
              "section_id": 12,
              "name": "Height Units",
              "definition": "Rack height is measured in rack units (U), where 1U equals 1.75 inches. Standard floor racks are generally about 42U in height",
              "image_url": "https://payapress.com/wp-content/uploads/2026/08/Standard-Server-Rack-Dimensions-Width-Height-Depth-and-Hole-Pattern.webp",
              "sort_order": 3,
              "category_id": 48
            },
            {
              "id": 199,
              "section_id": 12,
              "name": "Depth",
              "definition": "While width and height standards are rigid, rack depth can vary and must be selected based on the depth requirements of the equipment being installed.",
              "image_url": "https://www.racksolutions.com/news//app/uploads/Average-Rack-Depth.png",
              "sort_order": 4,
              "category_id": 48
            },
            {
              "id": 200,
              "section_id": 12,
              "name": "Hot and Cold Aisles",
              "definition": "Data centers arrange equipment rows into designated hot aisles and cold aisles to optimize cooling.",
              "image_url": "https://www.upsite.com/wp-content/uploads/2022/07/hot-vs-cold-containment-v5.png",
              "sort_order": 5,
              "category_id": 49
            },
            {
              "id": 201,
              "section_id": 12,
              "name": "Airflow Management",
              "definition": "quipment should pull in cool air from the cold aisle into the front/intake side and exhaust heated air out the back into the hot aisle. HVAC systems circulate and cool this air through raised floors or ceiling returns.",
              "image_url": "https://www.upsite.com/wp-content/uploads/data-center-airflow-e1465965380613.webp",
              "sort_order": 6,
              "category_id": 49
            },
            {
              "id": 202,
              "section_id": 12,
              "name": "Patch Panel",
              "definition": "Permanent cabling runs from end-user desks to punch-down blocks (such as 110 blocks) on the back of a patch panel. The front features RJ45 modular connectors, making it easy to handle moves, adds, and changes by patching into nearby switches without re-running physical desk cables.",
              "image_url": "https://9233480.fs1.hubspotusercontent-na1.net/hubfs/9233480/tailwind-feat-whatisapatchpanel.jpg",
              "sort_order": 7,
              "category_id": 50
            },
            {
              "id": 203,
              "section_id": 12,
              "name": "Fiber Distribution Panel",
              "definition": "Used to terminate fiber optic runs coming from other floors or buildings. Installers must carefully respect the bend radius (using large loops) to avoid breaking the fiber, and can incorporate service loops for future flexibility and extensions.",
              "image_url": "https://www.gcabling.com/wp-content/uploads/2025/10/fiber-patch-panel-the-complete-guide.webp",
              "sort_order": 8,
              "category_id": 50
            },
            {
              "id": 204,
              "section_id": 12,
              "name": "Lockable Racks",
              "definition": "Enclosed racks feature lockable doors on the front (along with integrated ventilation) to give system administrators enhanced physical security and control over sensitive hardware",
              "image_url": "https://img.vevorstatic.com/us%2FWLJJ15UW155GJOIJAV0%2Fgoods_img-v7%2Fserver-rack-f4.jpg?timestamp=1724049817000&format=webp&format=webp",
              "sort_order": 9,
              "category_id": 51
            },
            {
              "id": 205,
              "section_id": 12,
              "name": "Voltage and Electrical Metrics",
              "definition": "Electricity is measured in amperes/amps (rate of electron flow), volts (electrical pressure), and watts (total power, calculated as volts multiplied by amps). \n\nWall outlets supply Alternating Current (AC) (typically 110V–120V at 60 Hz in North America; 220V–240V at 50 Hz in Europe), which internal or external power supplies convert into Direct Current (DC) for device components.",
              "image_url": "https://www.integraelectrical.co/hubfs/ampsvsvoltsvswatts.png",
              "sort_order": 10,
              "category_id": 52
            },
            {
              "id": 206,
              "section_id": 12,
              "name": "Uninterruptible Power Supply (UPS)",
              "definition": "Protects equipment against power outages, brownouts, and voltage surges by supplying temporary battery backup. Options range from standby/offline UPS units to line-interactive and online/double-conversion models.",
              "image_url": "https://www.iqsdirectory.com/articles/power-supply/uninterruptible-power-supply/uninterruptible-power-supply.jpg",
              "sort_order": 11,
              "category_id": 52
            },
            {
              "id": 207,
              "section_id": 12,
              "name": "Power Distribution Unit (PDU)",
              "definition": "Rack-mountable intelligent power strips that distribute power to devices and allow administrators to remotely monitor and power cycle individual outlets over an IP network.",
              "image_url": "https://marvel-b1-cdn.bc0a.com/f00000000057284/www.cyberpowersystems.com/wp-content/uploads/2022/08/New-Web-PDU-Series-1480x760-R1-1024x526.png",
              "sort_order": 12,
              "category_id": 52
            },
            {
              "id": 208,
              "section_id": 12,
              "name": "Temperature",
              "definition": "Maintained via engineered HVAC systems to keep the data center within an optimal range, commonly between 64°F and 81°F.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkd-9r5rJLxQYzpnzHEbgT-7CNldRXh7t9k7jgSZNAsFp4GqPR38DMqlY&s=10",
              "sort_order": 13,
              "category_id": 53
            },
            {
              "id": 209,
              "section_id": 12,
              "name": "Humidity",
              "definition": "Kept within an ideal range of 40% to 60%; levels that are too high cause harmful condensation, while levels that are too low risk excessive electrostatic discharge (ESD).",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkd-9r5rJLxQYzpnzHEbgT-7CNldRXh7t9k7jgSZNAsFp4GqPR38DMqlY&s=10",
              "sort_order": 14,
              "category_id": 53
            },
            {
              "id": 210,
              "section_id": 12,
              "name": "Fire Suppression",
              "definition": "Because water can damage electrical systems, data centers typically utilize inert gas or chemical agent suppression systems that remove oxygen or suppress flames when triggered, often integrated to automatically shut down the HVAC system.",
              "image_url": "https://kordfire.com/wp-content/uploads/2026/04/fire-suppression-system-for-server-room_featured-1.webp",
              "sort_order": 15,
              "category_id": 53
            }
          ]
        }
      ]
    },
    {
      "id": 3,
      "number": 3,
      "title": "Network Operations",
      "summary": "Run the network day to day: documentation, monitoring, recovery, services, and access.",
      "exam_percent": 19,
      "sort_order": 2,
      "sections": [
        {
          "id": 13,
          "chapter_id": 3,
          "code": "3.1",
          "title": "Organizational Processes and Procedures",
          "summary": "Explain the purpose of organizational processes and procedures.",
          "sort_order": 0,
          "categories": [
            {
              "id": 54,
              "section_id": 13,
              "name": "Documentation",
              "summary": "Documentation is essential for tracking network infrastructure, planning expansions, and recovering systems quickly after a disaster.",
              "sort_order": 0,
              "parent_id": null
            },
            {
              "id": 55,
              "section_id": 13,
              "name": "Life-Cycle Management",
              "summary": "Life-cycle management governs hardware and software from initial deployment through ongoing maintenance and final disposal.",
              "sort_order": 1,
              "parent_id": null
            },
            {
              "id": 56,
              "section_id": 13,
              "name": "Change Management",
              "summary": "Change management ensures that modifications to computing environments—such as OS updates, device patching, application rollouts, and firewall configurations—are handled through a controlled, trackable process rather than unmanaged ad-hoc changes.",
              "sort_order": 2,
              "parent_id": null
            },
            {
              "id": 57,
              "section_id": 13,
              "name": "Configuration Management",
              "summary": "Configuration management maintains the integrity and standardization of network devices, applications, and operating systems.",
              "sort_order": 3,
              "parent_id": null
            }
          ],
          "terms": [
            {
              "id": 211,
              "section_id": 13,
              "name": "Physical network maps",
              "definition": "show the physical layout of equipment, physical cabling, and direct connections to hardware devices.",
              "image_url": "https://blog.rsisecurity.com/wp-content/uploads/2020/09/cyber1.png",
              "sort_order": 0,
              "category_id": 54
            },
            {
              "id": 212,
              "section_id": 13,
              "name": "Logical network maps",
              "definition": "Provide a high-level view of connectivity, focusing on how the broader network connects (such as wide area network clouds linking headquarters) rather than individual interface cables.",
              "image_url": "https://blog.rsisecurity.com/wp-content/uploads/2020/09/cyber1.png",
              "sort_order": 1,
              "category_id": 54
            },
            {
              "id": 213,
              "section_id": 13,
              "name": "Rack Diagrams",
              "definition": "Provide a front-facing physical view of data center racks, allowing remote support personnel or individuals with limited access to pinpoint exact locations (such as specific rack units or rows) for troubleshooting or hardware reboots.",
              "image_url": "https://graphicalnetworks.com/wp-content/uploads/2023/08/rack-cabinet-diagram-example.png",
              "sort_order": 2,
              "category_id": 54
            },
            {
              "id": 214,
              "section_id": 13,
              "name": "Cable Maps and Diagrams",
              "definition": "Illustrate where physical cables run through floors or ceilings, correlating office network drops with patch panels in wiring closets (IDF/MDF) for installation and troubleshooting.",
              "image_url": "https://conceptdraw.com/a2477c3/p1/preview/640/pict--network-layout-floorplan-ethernet-cable-layout.png--diagram-flowchart-example.png",
              "sort_order": 3,
              "category_id": 54
            },
            {
              "id": 215,
              "section_id": 13,
              "name": "Network Diagrams (Layer 1, Layer 2, Layer 3)",
              "definition": "Combine multiple layers of network visibility:",
              "image_url": "https://images.squarespace-cdn.com/content/v1/5d3c73c906ac510001158d1b/1618528223782-MLF9Q4FKTBOQPWQKR93O/Understanding+VLANs+and+Network+Layers.png",
              "sort_order": 4,
              "category_id": 54
            },
            {
              "id": 216,
              "section_id": 13,
              "name": "Layer 1",
              "definition": "covers physical interfaces and cabling connections.",
              "image_url": "https://images.squarespace-cdn.com/content/v1/5d3c73c906ac510001158d1b/1618528223782-MLF9Q4FKTBOQPWQKR93O/Understanding+VLANs+and+Network+Layers.png",
              "sort_order": 5,
              "category_id": 54
            },
            {
              "id": 217,
              "section_id": 13,
              "name": "Layer 2",
              "definition": "overlays data link details, including MAC addresses.",
              "image_url": "https://images.squarespace-cdn.com/content/v1/5d3c73c906ac510001158d1b/1618528223782-MLF9Q4FKTBOQPWQKR93O/Understanding+VLANs+and+Network+Layers.png",
              "sort_order": 6,
              "category_id": 54
            },
            {
              "id": 218,
              "section_id": 13,
              "name": "Layer 3",
              "definition": "overlays network layer details, mapping IP addresses to specific MAC and physical addresses.",
              "image_url": "https://images.squarespace-cdn.com/content/v1/5d3c73c906ac510001158d1b/1618528223782-MLF9Q4FKTBOQPWQKR93O/Understanding+VLANs+and+Network+Layers.png",
              "sort_order": 7,
              "category_id": 54
            },
            {
              "id": 219,
              "section_id": 13,
              "name": "Asset Inventory",
              "definition": "Tracks organization equipment (laptops, desktops, routers, switches) using visible tags, barcodes, or RFID tags. A centralized asset database links device components, assigned users, financial depreciation, purchase dates, warranty status, and software licensing requirements.",
              "image_url": "https://www.enerpize.com/files/business_templates/asset_inventory_template.webp",
              "sort_order": 8,
              "category_id": 54
            },
            {
              "id": 220,
              "section_id": 13,
              "name": "IP Address Management (IPAM)",
              "definition": "Tracks organization equipment (laptops, desktops, routers, switches) using visible tags, barcodes, or RFID tags. A centralized asset database links device components, assigned users, financial depreciation, purchase dates, warranty status, and software licensing requirements.",
              "image_url": "https://www.cloudns.net/blog/wp-content/uploads/2023/07/IPAM.png",
              "sort_order": 9,
              "category_id": 54
            },
            {
              "id": 221,
              "section_id": 13,
              "name": "Service-Level Agreement (SLA)",
              "definition": "A contractual agreement defining the minimum level of service required from a third-party vendor or service provider, such as maintaining 99.99% uptime or enforcing maximum unscheduled downtime limits.",
              "image_url": "https://infraon.io/blog/wp-content/uploads/2025/03/Service-Level-Agreement-SLA-Learn-About-it-in-2023.png.webp",
              "sort_order": 10,
              "category_id": 54
            },
            {
              "id": 222,
              "section_id": 13,
              "name": "Wireless Survey / Heat Map",
              "definition": "Site surveys identify active access points and radio frequencies to minimize interference. Heat maps visually document how wireless signals propagate throughout a building using mobile measurement tools.",
              "image_url": "https://www.bdsinc.com/wp-content/uploads/2021/02/Wireless-Network-Site-Survey-Heat-Mapping-Services.jpg",
              "sort_order": 11,
              "category_id": 54
            },
            {
              "id": 223,
              "section_id": 13,
              "name": "End-of-Life (EOL)",
              "definition": "Occurs when a manufacturer stops actively supporting a product or producing new feature versions, though security patches may temporarily continue.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKB-gdEfRro2Ld8XS0ymjofPiXp01ki45HY4_jfXwThF5b5HUq5Dft7Dc&s=10",
              "sort_order": 12,
              "category_id": 55
            },
            {
              "id": 224,
              "section_id": 13,
              "name": "End-of-Support (EOS)",
              "definition": "Occurs when a product receives no further updates, patches, or security fixes whatsoever, presenting a major security concern that requires hardware or software replacement.",
              "image_url": "https://www.orbit365.co.uk/cdn/shop/articles/W10EOS.BLOG_eb60c42e-673f-49c0-b52c-f51ba3e4c981.png?v=1757348621",
              "sort_order": 13,
              "category_id": 55
            },
            {
              "id": 225,
              "section_id": 13,
              "name": "Software Management - Patches and bug fixes",
              "definition": "Crucial for maintaining device uptime, stability, and closing security vulnerabilities.",
              "image_url": "https://testgrid.io/blog/wp-content/uploads/2021/05/3982705.jpg",
              "sort_order": 14,
              "category_id": 55
            },
            {
              "id": 226,
              "section_id": 13,
              "name": "Software Management - Operating system (OS)",
              "definition": "Managed via scheduled monthly updates or emergency zero-day fixes across operating systems (such as Windows, Linux, iOS, and Android), alongside custom configuration adjustments like password complexity rules and built-in firewall updates.",
              "image_url": "https://www.trentonsystems.com/hs-fs/hubfs/Operating%20System%20.jpeg?width=3099&name=Operating%20System%20.jpeg",
              "sort_order": 15,
              "category_id": 55
            },
            {
              "id": 227,
              "section_id": 13,
              "name": "Software Management - Firmware",
              "definition": "Updates embedded software on purpose-built devices like printers, modems, and thermostats to close security gaps, requiring fallback binaries and backup plans in case an update fails.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEdmVXNASjyUDJgfDqm9y_8MxUJnlHfyFQ3cqeK88GvZTEyOASGqv02o8&s=10",
              "sort_order": 16,
              "category_id": 55
            },
            {
              "id": 228,
              "section_id": 13,
              "name": "Decommissioning",
              "definition": "The secure disposal process for outdated assets that involves sanitizing media or physically destroying hardware to protect data confidentiality and comply with legal requirements",
              "image_url": "https://www.networkworld.com/wp-content/uploads/2023/11/bulldozer_wrecking-ball_deconstruct_tear-down_decommission-data-center-100811435-orig.jpg?quality=50&strip=all&w=1024",
              "sort_order": 17,
              "category_id": 55
            },
            {
              "id": 229,
              "section_id": 13,
              "name": "Request Process Tracking / Service Request",
              "definition": "Handled through help desks where incoming issues or requests are entered into a centralized ticket tracking system, triaged, assigned for resolution, and closed.",
              "image_url": "https://tkahub.s3.eu-west-2.amazonaws.com/uploads/blog/8875bcb3-9cf4-43eb-a0e3-1b1ad03affc3.png",
              "sort_order": 18,
              "category_id": 56
            },
            {
              "id": 230,
              "section_id": 13,
              "name": "Production Configuration",
              "definition": "The standard, thoroughly tested configuration deployed to live production devices (such as routers, switches, and firewalls) that establishes a standard for hardware, firmware, and software versions.",
              "image_url": "https://brandnewmd.com/wp-content/uploads/2024/10/unnamed-8-1.png",
              "sort_order": 19,
              "category_id": 57
            },
            {
              "id": 231,
              "section_id": 13,
              "name": "Backup Configuration",
              "definition": "Taking a configuration file backup or virtual machine snapshot prior to making changes so administrators can quickly revert production back to a previous working state if a failure occurs.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQaBKeligEtJU6zm7jcRk_619mTOfdTvDQ3hBCZuxHnXMngYxLGMErJfI&s=10",
              "sort_order": 20,
              "category_id": 57
            },
            {
              "id": 232,
              "section_id": 13,
              "name": "Baseline / Golden Configuration:",
              "definition": "A fully documented specification of an optimal system or application setup used to run integrity checks, verify proper configurations, and align production environments against standard baselines.",
              "image_url": "https://cloudtruth.com/wp-content/uploads/2025/06/CT-Blog-Golden-Configs-no-text-1024x512-v1.png",
              "sort_order": 21,
              "category_id": 57
            }
          ]
        },
        {
          "id": 14,
          "chapter_id": 3,
          "code": "3.2",
          "title": "Network Monitoring Technologies",
          "summary": "Given a scenario, use network monitoring technologies.",
          "sort_order": 1,
          "categories": [
            {
              "id": 58,
              "section_id": 14,
              "name": "Monitoring Methods",
              "summary": "",
              "sort_order": 0,
              "parent_id": null
            },
            {
              "id": 59,
              "section_id": 14,
              "name": "Monitoring Solutions",
              "summary": "",
              "sort_order": 1,
              "parent_id": null
            }
          ],
          "terms": [
            {
              "id": 233,
              "section_id": 14,
              "name": "Simple Network Management Protocol (SNMP)",
              "definition": "A protocol used to query infrastructure devices from a central management station.",
              "image_url": "https://www.multitel.com/wp-content/uploads/2025/09/SNMP-1024x576.jpg",
              "sort_order": 0,
              "category_id": 58
            },
            {
              "id": 234,
              "section_id": 14,
              "name": "Traps",
              "definition": "Proactive alarms sent automatically from a device to the management station over UDP port 162 when specific thresholds (such as an increase in CRC errors) are met, without waiting for a query.",
              "image_url": "https://www.10-strike.com/network-monitor/help/images/snmp-trap-monitoring.png",
              "sort_order": 1,
              "category_id": 58
            },
            {
              "id": 235,
              "section_id": 14,
              "name": "Management Information Base (MIB)",
              "definition": "A central database of parameters stored on remote devices. Specific variables within the MIB are accessed via Object Identifiers (OIDs).",
              "image_url": "https://ih1.dpstele.com/images/manager-agent-mib2-350.webp",
              "sort_order": 2,
              "category_id": 58
            },
            {
              "id": 236,
              "section_id": 14,
              "name": "Version v2c",
              "definition": "An efficient version capable of querying large blocks of data, though transmissions are sent in the clear without encryption.",
              "image_url": "https://ipcisco.com/wp-content/uploads/2018/10/snmp-versions-compariosn-snmpv1-snmpv2c-snmpv3-ipcisco.jpg",
              "sort_order": 3,
              "category_id": 58
            },
            {
              "id": 237,
              "section_id": 14,
              "name": "Version v3",
              "definition": "Provides secure cryptographic capabilities, including authentication, message integrity, and encryption.",
              "image_url": "https://ipcisco.com/wp-content/uploads/2018/10/snmp-versions-compariosn-snmpv1-snmpv2c-snmpv3-ipcisco.jpg",
              "sort_order": 4,
              "category_id": 58
            },
            {
              "id": 238,
              "section_id": 14,
              "name": "Community Strings",
              "definition": "Simple password-like strings (such as read-only \"public\" or read-write \"private\") used for authentication in SNMPv1 and v2c.",
              "image_url": "https://ipcisco.com/wp-content/uploads/2024/06/snmp-community-string-ipcisco.jpg",
              "sort_order": 5,
              "category_id": 58
            },
            {
              "id": 239,
              "section_id": 14,
              "name": "Flow Data",
              "definition": "Summarized metadata statistics based on traffic flows traversing the network (such as NetFlow), gathered by probes and sent to a central collector for traffic analysis and reporting.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3piGs6dXnZmr2n301GHq7SWfitK8ARuyIJ_UDlz0dnmz1j36paFa5K4o&s=10",
              "sort_order": 6,
              "category_id": 58
            },
            {
              "id": 240,
              "section_id": 14,
              "name": "Packet Capture",
              "definition": "Using a protocol analyzer to capture and inspect the exact bits, bytes, and frames traversing wired or wireless networks for deep troubleshooting and forensics.",
              "image_url": "https://miro.medium.com/1*sOhbhWnnmBx7TxHddLPW0Q.png",
              "sort_order": 7,
              "category_id": 58
            },
            {
              "id": 241,
              "section_id": 14,
              "name": "Baseline Metrics",
              "definition": "Compiling historical performance data to define what a \"normal\" day looks like on the network, enabling administrators to compare current metrics and use anomaly alerting/notification to flag unusual behavior.",
              "image_url": "https://i.postimg.cc/SKydVKrL/614d92a7-d61c-4c07-901f-a123958cbbc8.jpg",
              "sort_order": 8,
              "category_id": 58
            },
            {
              "id": 242,
              "section_id": 14,
              "name": "Log Aggregation",
              "definition": "Collecting log files from disparate infrastructure devices into a centralized location:",
              "image_url": "https://nxlog.co/news-and-blog/posts/log-aggregation-the-benefits-and-requirements/images/aggregation.webp",
              "sort_order": 9,
              "category_id": 58
            },
            {
              "id": 243,
              "section_id": 14,
              "name": "Syslog collector",
              "definition": "Gathers standardized system log files sent across the network from routers, switches, and firewalls.",
              "image_url": "https://networkwalks.com/wp-content/uploads/2022/05/syslog.png",
              "sort_order": 10,
              "category_id": 58
            },
            {
              "id": 244,
              "section_id": 14,
              "name": "Security Information and Event Management (SIEM)",
              "definition": "Aggregates logs, provides real-time dashboards, runs advanced correlation queries (such as detecting brute-force password attempts), and stores long-term data for security forensics.",
              "image_url": "https://cdn.prod.website-files.com/6a020fca21245d64af2c19d8/6a020fca21245d64af2c2c69_13%20%D0%BF%D1%80%D0%B5%D0%B2%D1%8C%D1%8E.jpg",
              "sort_order": 11,
              "category_id": 58
            },
            {
              "id": 245,
              "section_id": 14,
              "name": "Application Programming Interface (API) Integration",
              "definition": "Allows automation scripts and central management consoles to communicate directly with devices in their native language to execute commands and configuration changes without manual SSH logins.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFHYLVSJEOzCKxJCojAa2x5AovkxsRds-97917Pq5zvMzGBo5p1NzsPw0&s=10",
              "sort_order": 12,
              "category_id": 58
            },
            {
              "id": 246,
              "section_id": 14,
              "name": "Port Mirroring",
              "definition": "Also known as a Switched Port Analyzer (SPAN) or physical network tap, this method copies traffic from one switch port or VLAN and redirects it to a monitoring device, such as an IDS/IPS or NetFlow collector.",
              "image_url": "https://www.websentra.com/wp-content/uploads/port-mirroring-explanation-and-howto-tutorial-and-lab.jpg",
              "sort_order": 13,
              "category_id": 58
            },
            {
              "id": 247,
              "section_id": 14,
              "name": "Network Discovery",
              "definition": "Tools used to discover and map active devices on a network.",
              "image_url": "https://www.alloysoftware.com/wp-content/uploads/2025/06/discovery-635x400-txt.png",
              "sort_order": 14,
              "category_id": 59
            },
            {
              "id": 248,
              "section_id": 14,
              "name": "Ad hoc",
              "definition": "Manual scans run on-demand during troubleshooting.",
              "image_url": "https://brand.adhoc.team/assets/images/logo-green-full-mark.svg",
              "sort_order": 15,
              "category_id": 59
            },
            {
              "id": 249,
              "section_id": 14,
              "name": "Scheduled",
              "definition": "Automated scans (using ping sweeps, port scans, LLDP, or CDP) run routinely—often nightly—to maintain an updated inventory of network devices and traffic.",
              "image_url": "https://www.guidingtech.com/wp-content/uploads/Schedule-Windows-Defender-Scan_1.jpg",
              "sort_order": 16,
              "category_id": 59
            },
            {
              "id": 250,
              "section_id": 14,
              "name": "Traffic Analysis",
              "definition": "Detailed, packet-by-packet or flow-by-flow descriptions of traffic streams (such as firewall logs showing timestamps, source/destination IPs, ports, protocols, and transferred byte counts) utilized for reporting and forensics.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKl1GANyX3bdtjUpIxREtGFrYAYLYMwnADOA051ViXYSZD10Ke7PbcfBo&s=10",
              "sort_order": 17,
              "category_id": 59
            },
            {
              "id": 251,
              "section_id": 14,
              "name": "Performance Monitoring",
              "definition": "Tracking overall device utilization, error rates, and metrics using SNMP, NetFlow, protocol analysis, or software agents to locate network bottlenecks.",
              "image_url": "https://www.xenonstack.com/hubfs/xenonstack-performance-monitoring-tools.png",
              "sort_order": 18,
              "category_id": 59
            },
            {
              "id": 252,
              "section_id": 14,
              "name": "Availability Monitoring",
              "definition": "Real-time tracking (often displayed as green for active or red for down) that immediately triggers alerts, emails, or help desk tickets if a device drops off the network.",
              "image_url": "https://miro.medium.com/1*40A1RqLr7K1ZbDUI3v1cAw.jpeg",
              "sort_order": 19,
              "category_id": 59
            },
            {
              "id": 253,
              "section_id": 14,
              "name": "Configuration Monitoring",
              "definition": "Backing up, storing, and tracking device configuration files, ensuring compatibility with software/firmware versions, and alerting administrators immediately if unauthorized configuration modifications occur.",
              "image_url": "https://www.dnsstuff.com/wp-content/uploads/2025/05/Configuration-management.png",
              "sort_order": 20,
              "category_id": 59
            }
          ]
        },
        {
          "id": 15,
          "chapter_id": 3,
          "code": "3.3",
          "title": "Disaster Recovery",
          "summary": "Explain disaster recovery (DR) concepts.",
          "sort_order": 2,
          "categories": [
            {
              "id": 60,
              "section_id": 15,
              "name": "Disaster Recovery (DR) Metrics",
              "summary": "Metrics help organizations quantify outage impacts, recovery expectations, and hardware reliability.",
              "sort_order": 0,
              "parent_id": null
            },
            {
              "id": 61,
              "section_id": 15,
              "name": "Disaster Recovery Sites",
              "summary": "When a primary data center is completely disabled, operations may shift to an alternate facility.",
              "sort_order": 1,
              "parent_id": null
            },
            {
              "id": 62,
              "section_id": 15,
              "name": "High-Availability Approaches",
              "summary": "To maintain network uptime and prevent single points of failure, organizations implement redundant hardware configurations.",
              "sort_order": 2,
              "parent_id": null
            },
            {
              "id": 63,
              "section_id": 15,
              "name": "Testing",
              "summary": "Regular testing ensures that disaster recovery plans are practical and that staff know how to respond during a real crisis.",
              "sort_order": 3,
              "parent_id": null
            }
          ],
          "terms": [
            {
              "id": 254,
              "section_id": 15,
              "name": "Recovery Point Objective (RPO)",
              "definition": "Measured as an amount of time, RPO represents how much data is lost when an outage occurs, spanning from the last data backup or replication point to the moment of failure.\n\nCritical systems (such as banking or patient records) require a very short RPO (often less than an hour) to minimize data loss.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC4DtJI58OtJt8xD3m2E0dp6Y5TAA4IItMxWZyEjF6eWQQKMyil8QYglI&s=10",
              "sort_order": 0,
              "category_id": 60
            },
            {
              "id": 255,
              "section_id": 15,
              "name": "Recovery Time Objective (RTO)",
              "definition": "Measured as an amount of time, RTO is the measurement of how quickly services and normal operation levels can be restored after an outage occurs.\n\nOrganizations aim to keep RTO as close to zero as possible.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC4DtJI58OtJt8xD3m2E0dp6Y5TAA4IItMxWZyEjF6eWQQKMyil8QYglI&s=10",
              "sort_order": 1,
              "category_id": 60
            },
            {
              "id": 256,
              "section_id": 15,
              "name": "Mean Time to Repair (MTTR)",
              "definition": "The average time it takes to troubleshoot, resolve an issue, or replace a failed component to get a system back online.",
              "image_url": "https://resco.net/app/uploads/a-graph-explaining-mean-time-to-repair-mttr-failure-metric.jpg",
              "sort_order": 2,
              "category_id": 60
            },
            {
              "id": 257,
              "section_id": 15,
              "name": "Mean Time Between Failures (MTBF)",
              "definition": "The predicted average time frame that a hardware component or device is expected to operate before failing, assisting with long-term replacement planning.",
              "image_url": "https://resco.net/app/uploads/a-graph-explaining-mean-time-between-failures-mtbf-failure-metric.jpg",
              "sort_order": 3,
              "category_id": 60
            },
            {
              "id": 258,
              "section_id": 15,
              "name": "Cold Site",
              "definition": "An inexpensive, empty building with no pre-installed equipment or data.   \n\nRecovering at a cold site requires transporting hardware, restoring data from backup tapes or offsite storage, and relocating personnel.",
              "image_url": "https://blog.vrad.com/hs-fs/hubfs/Imported_Blog_Media/Cold-Warm-Hot.png?width=600&height=400&name=Cold-Warm-Hot.png",
              "sort_order": 4,
              "category_id": 61
            },
            {
              "id": 259,
              "section_id": 15,
              "name": "Warm Site",
              "definition": "A middle-ground facility equipped with baseline infrastructure such as power, racks, and sometimes partial hardware.   \n\nTo become fully operational, administrators must bring in current data and complete software/hardware setups.",
              "image_url": "https://blog.vrad.com/hs-fs/hubfs/Imported_Blog_Media/Cold-Warm-Hot.png?width=600&height=400&name=Cold-Warm-Hot.png",
              "sort_order": 5,
              "category_id": 61
            },
            {
              "id": 260,
              "section_id": 15,
              "name": "Hot Site",
              "definition": "An exact duplicate of the primary data center featuring identical hardware, applications, and real-time data replication.   \n\nBecause everything is mirrored and staged, an organization can transition to a hot site rapidly with minimal downtime.",
              "image_url": "https://blog.vrad.com/hs-fs/hubfs/Imported_Blog_Media/Cold-Warm-Hot.png?width=600&height=400&name=Cold-Warm-Hot.png",
              "sort_order": 6,
              "category_id": 61
            },
            {
              "id": 261,
              "section_id": 15,
              "name": "Active-Passive",
              "definition": "Two devices are deployed, but only one is active at any given time while continuously sharing status updates with the passive (standby) unit.   \n\nIf the primary device fails, the passive unit detects the outage and automatically assumes the primary role.",
              "image_url": "https://media.geeksforgeeks.org/wp-content/uploads/20240423165007/Active-Active-vs-Active-Passive-Architecture.webp",
              "sort_order": 7,
              "category_id": 62
            },
            {
              "id": 262,
              "section_id": 15,
              "name": "Active-Active",
              "definition": "Both devices operate simultaneously and share the workload to maximize computing power.   \n\nThis approach requires careful design and engineering of traffic flows, session tables, and routing configurations to ensure seamless operation across multiple active devices.",
              "image_url": "https://media.geeksforgeeks.org/wp-content/uploads/20240423165007/Active-Active-vs-Active-Passive-Architecture.webp",
              "sort_order": 8,
              "category_id": 62
            },
            {
              "id": 263,
              "section_id": 15,
              "name": "Tabletop Exercises",
              "definition": "Cost-effective, discussion-based meetings where key personnel and IT management sit around a conference room table to step through a simulated disaster scenario and outline their logistical responses.",
              "image_url": "https://www.everbridge.com/wp-content/uploads/2024/11/ISO-audit-1000.jpg.optimal.jpg",
              "sort_order": 9,
              "category_id": 63
            },
            {
              "id": 264,
              "section_id": 15,
              "name": "Validation Tests",
              "definition": "Full-scale operational drills that simulate specific disaster scenarios (such as a building fire or mandatory evacuation) to test actual system failovers, evaluate performance, and identify areas for improvement.",
              "image_url": "https://testsigma.com/blog/wp-content/uploads/validation-testing.png",
              "sort_order": 10,
              "category_id": 63
            }
          ]
        },
        {
          "id": 16,
          "chapter_id": 3,
          "code": "3.4",
          "title": "IPv4 and IPv6 Network Services",
          "summary": "Given a scenario, implement IPv4 and IPv6 network services.",
          "sort_order": 3,
          "categories": [
            {
              "id": 64,
              "section_id": 16,
              "name": "Dynamic Addressing",
              "summary": "",
              "sort_order": 0,
              "parent_id": null
            },
            {
              "id": 65,
              "section_id": 16,
              "name": "Name Resolution",
              "summary": "",
              "sort_order": 1,
              "parent_id": null
            },
            {
              "id": 66,
              "section_id": 16,
              "name": "Record Types",
              "summary": "",
              "sort_order": 2,
              "parent_id": null
            },
            {
              "id": 67,
              "section_id": 16,
              "name": "Hosts File",
              "summary": "",
              "sort_order": 3,
              "parent_id": null
            },
            {
              "id": 68,
              "section_id": 16,
              "name": "Time Protocols",
              "summary": "",
              "sort_order": 4,
              "parent_id": null
            }
          ],
          "terms": [
            {
              "id": 265,
              "section_id": 16,
              "name": "DHCP Process (DORA)",
              "definition": "DHCP automatically provisions IP configuration settings for devices on a network. The negotiation follows four distinct phases: Discover (client broadcasts to find DHCP servers), Offer (server offers an available IP address), Request (client requests an offered IP address), and Acknowledgment (server confirms and finalizes the lease).",
              "image_url": "https://miro.medium.com/1*sDQaM6sO0nhcENpMear5MQ.jpeg",
              "sort_order": 0,
              "category_id": 64
            },
            {
              "id": 266,
              "section_id": 16,
              "name": "Scope",
              "definition": "A contiguous range of IP addresses and subnet masks defined on the DHCP server for a specific subnet pool.",
              "image_url": "https://itingredients.com/wp-content/uploads/2015/07/Dhcpconfigure-7.png",
              "sort_order": 1,
              "category_id": 64
            },
            {
              "id": 267,
              "section_id": 16,
              "name": "Exclusions",
              "definition": "Specific IP addresses within a scope that are set aside and withheld from being automatically assigned by the DHCP pool.",
              "image_url": "https://learn-attachment.microsoft.com/api/attachments/18584-51.png?platform=QnA",
              "sort_order": 2,
              "category_id": 64
            },
            {
              "id": 268,
              "section_id": 16,
              "name": "Lease Time",
              "definition": "The temporary duration an IP address is assigned to a device. Clients attempt renewal at the T1 timer (50% of the lease time) with their original server, and at the T2 timer (87.5% of the lease time) with any available DHCP server if the primary is unreachable.",
              "image_url": "https://images.ctfassets.net/xwxknivhjv1b/5vLP5tvzdDFGrnXKS1HjIl/d6bd2e2477997c60e72c171dfa67300d/dhcp_lease_3.png?q=80&w=1000&h=750&fm=png&fl=png8",
              "sort_order": 3,
              "category_id": 64
            },
            {
              "id": 269,
              "section_id": 16,
              "name": "Reservations",
              "definition": "Static IP assignments configured on the DHCP server that bind a specific device's MAC address to a permanent IP address so it always receives the exact same configuration.",
              "image_url": "https://packetpushers.net/wp-content/uploads/2024/04/dhcp-add-reservation.png",
              "sort_order": 4,
              "category_id": 64
            },
            {
              "id": 270,
              "section_id": 16,
              "name": "Options",
              "definition": "Additional TCP/IP configuration parameters defined by RFC numbers (such as DNS servers, default gateways, VoIP call servers like option 129, or HTTP proxies like option 135) delivered alongside IP details.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_YmwxsQawAneNI-UWPJYlDk5jGF-ytt1miXd3kFsTqJ40HiXYAwaKExg&s=10",
              "sort_order": 5,
              "category_id": 64
            },
            {
              "id": 271,
              "section_id": 16,
              "name": "Relay / IP Helper",
              "definition": "A router feature that captures local DHCP broadcast requests and translates them into unicast packets so they can be forwarded across routers to a DHCP server on a different subnet.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyVRNJMb_Q3UFnR9Cbk_LsYEdCZnZbfdXlkoq7qvO-Ww&s=10",
              "sort_order": 6,
              "category_id": 64
            },
            {
              "id": 272,
              "section_id": 16,
              "name": "SLAAC Overview",
              "definition": "In IPv6, stateless address autoconfiguration enables devices to generate their own routable IPv6 addresses without requiring a DHCPv6 server or tracking lease times.",
              "image_url": "https://ipcisco.com/wp-content/uploads/2019/02/SLAAC-IPv6-Stateless-Auto-Configuration-1.jpg",
              "sort_order": 7,
              "category_id": 64
            },
            {
              "id": 273,
              "section_id": 16,
              "name": "Process and NDP",
              "definition": "Devices use the Neighbor Discovery Protocol (NDP) to send router solicitations and receive 64-bit subnet prefixes via router advertisements. The device then generates its own 64-bit interface ID (using a randomized value or modified MAC address) and runs Duplicate Address Detection (DAD) to verify uniqueness on the network.",
              "image_url": "https://ipcisco.com/wp-content/uploads/ndp/neighbour-discovery-protocols.jpg",
              "sort_order": 8,
              "category_id": 64
            },
            {
              "id": 274,
              "section_id": 16,
              "name": "DNS Hierarchy and FQDN",
              "definition": "DNS resolves hostnames to IP addresses using a hierarchical database structure that starts at root servers and top-level domains (.com, .org, country codes like .us) down to fully qualified domain names (FQDNs).",
              "image_url": "https://www.cloudns.net/blog/wp-content/uploads/2023/06/Fully-Qualified-Domain-Name-FQDN.png",
              "sort_order": 9,
              "category_id": 65
            },
            {
              "id": 275,
              "section_id": 16,
              "name": "Zone Types",
              "definition": "**Forward zone**: Resolves hostnames to IP addresses.\n**\nReverse zone:** Resolves IP addresses back to hostnames.",
              "image_url": "https://activedirectorypro.com/images/posts/configure-dns-reverse-lookup-zones-ptr-records/new-reverse-lookup-zone.jpg",
              "sort_order": 10,
              "category_id": 65
            },
            {
              "id": 276,
              "section_id": 16,
              "name": "Authoritative vs. Non-Authoritative",
              "definition": "An authoritative DNS server holds the official primary zone data for a domain, whereas a non-authoritative server relies on cached data or secondary copies.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK-dSoy1kDS6ikhOizUHWPBx8Ja_ygV3OK1yfZlEcfHMmKG2IrjkD4_uU&s=10",
              "sort_order": 11,
              "category_id": 65
            },
            {
              "id": 277,
              "section_id": 16,
              "name": "Primary vs. Secondary",
              "definition": "The primary DNS server is where all zone configurations and updates occur, while the secondary server receives read-only zone transfers from the primary.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJwJVvL7bukY6lxqErjsv_zArE17XvE1fry9ER08HAPD015-cQU0OdqhI&s=10",
              "sort_order": 12,
              "category_id": 65
            },
            {
              "id": 278,
              "section_id": 16,
              "name": "Recursive Queries",
              "definition": "A process where a local DNS server performs all necessary upstream queries (root, TLD, authoritative) on behalf of a resolver to find and cache a name resolution.",
              "image_url": "https://www.cloudns.net/blog/wp-content/uploads/2018/04/Recursive-DNS-server.png",
              "sort_order": 13,
              "category_id": 65
            },
            {
              "id": 279,
              "section_id": 16,
              "name": "Security Extensions (DNSSEC)",
              "definition": "Uses digital signatures to authenticate DNS responses and ensure that data has not been spoofed or modified in transit.",
              "image_url": "https://media.geeksforgeeks.org/wp-content/uploads/20240710183219/DNSSEC-VALIDATION-PROCESS-copy.webp",
              "sort_order": 14,
              "category_id": 65
            },
            {
              "id": 280,
              "section_id": 16,
              "name": "DNS over HTTPS (DoH) and DNS over TLS (DoT)",
              "definition": "Encrypt DNS traffic to prevent eavesdropping on queried hostnames. DoT sends queries over TCP port 853, while DoH encapsulates DNS queries inside standard encrypted HTTPS traffic (TCP port 443).",
              "image_url": "https://www.cloudns.net/blog/wp-content/uploads/2023/04/DoT-and-DoH-1024x577.png",
              "sort_order": 15,
              "category_id": 65
            },
            {
              "id": 281,
              "section_id": 16,
              "name": "Address (A)",
              "definition": "Maps a hostname to an IPv4 address.",
              "image_url": "https://easydmarc.com/blog/wp-content/uploads/2022/08/A-Record-vs-AAAA-Record-1.jpg",
              "sort_order": 16,
              "category_id": 66
            },
            {
              "id": 282,
              "section_id": 16,
              "name": "AAAA (Quad A)",
              "definition": "Maps a hostname to an IPv6 address",
              "image_url": "https://easydmarc.com/blog/wp-content/uploads/2022/08/A-Record-vs-AAAA-Record-1.jpg",
              "sort_order": 17,
              "category_id": 66
            },
            {
              "id": 283,
              "section_id": 16,
              "name": "Canonical name (CNAME)",
              "definition": "Creates an alias pointing multiple alternative hostnames to a single target record.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgvcOK9MLH7o8WtAWpLynf3krvp3rLO4eh8clhSYRP0FsiWumMdXWdghvm&s=10",
              "sort_order": 18,
              "category_id": 66
            },
            {
              "id": 284,
              "section_id": 16,
              "name": "Mail exchange (MX)",
              "definition": "Identifies the mail servers responsible for receiving email for a domain.",
              "image_url": "https://cdn.prod.website-files.com/645258dee17c72222bca47d8/689b32a248b853f922c99c95_4bf99b02-3e3a-4a67-8b30-6595694b1138.webp",
              "sort_order": 19,
              "category_id": 66
            },
            {
              "id": 285,
              "section_id": 16,
              "name": "Text (TXT)",
              "definition": "Stores human-readable text data, frequently utilized for email security standards like SPF (Sender Policy Framework) and DKIM (DomainKeys Identified Mail) public keys.",
              "image_url": "https://www.adobe.com/uk/acrobat/resources/document-files/text-files/media_1e2bc14683602dee9fc14b87fec22b249d2cf18a4.png?width=750&format=png&optimize=medium",
              "sort_order": 20,
              "category_id": 66
            },
            {
              "id": 286,
              "section_id": 16,
              "name": "Nameserver (NS)",
              "definition": "Designates the authoritative name servers for a specific domain.",
              "image_url": "https://mailprovider.com/wp-content/uploads/2024/11/what-is-a-name-server.png",
              "sort_order": 21,
              "category_id": 66
            },
            {
              "id": 287,
              "section_id": 16,
              "name": "Pointer (PTR)",
              "definition": "Maps an IP address to a hostname for reverse DNS lookups.",
              "image_url": "https://cdn.ewskills.com/articles/pointer/cardimg/Pointer.webp",
              "sort_order": 22,
              "category_id": 66
            },
            {
              "id": 288,
              "section_id": 16,
              "name": "SOA — Start of Authority",
              "definition": "Start of Authority records define overall zone parameters, serial numbers, and refresh timers.",
              "image_url": "https://www.valimail.com/wp-content/uploads/2026/04/WhatIsDNSSOARecord-scaled.png",
              "sort_order": 23,
              "category_id": 66
            },
            {
              "id": 289,
              "section_id": 16,
              "name": "Local Name Resolution",
              "definition": "A local plain-text file **(hosts located in Windows\\System32\\drivers\\etc\\) **that manually maps IP addresses to hostnames on a local machine, overriding standard DNS server queries.",
              "image_url": "https://pressidium.com/wp-content/uploads/2020/09/hosts-file-1-1440x1180.png",
              "sort_order": 24,
              "category_id": 67
            },
            {
              "id": 290,
              "section_id": 16,
              "name": "NTP (Network Time Protocol)",
              "definition": "Automatically synchronizes clocks across network infrastructure and endpoints over UDP port 123 to ensure consistent log timestamps.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSahNlBExTU-utT4q9Ut23ZuD7DP4WPHqi94ZyGlRCSQ37Za_HSHLxcOQ&s=10",
              "sort_order": 25,
              "category_id": 68
            },
            {
              "id": 291,
              "section_id": 16,
              "name": "Network Time Security (NTS)",
              "definition": "Adds cryptographic authentication and key exchange (via a TLS handshake and secure cookies) to NTP to prevent time-manipulation attacks that could otherwise break protocols like Kerberos.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQRmdgLypfoQG8RGNwP7_nC2cVLmQi3YHeaCiG2GTN8eNNvJGWm-cE7wEo&s=10",
              "sort_order": 26,
              "category_id": 68
            },
            {
              "id": 292,
              "section_id": 16,
              "name": "Precision Time Protocol (PTP)",
              "definition": "A hardware-based time synchronization protocol offering sub-nanosecond precision for industrial and specialized environments requiring exact timing independent of operating system delays.",
              "image_url": "https://ipcisco.com/wp-content/uploads/2023/03/Precision-Time-Protocol-ptp-ipcisco.png",
              "sort_order": 27,
              "category_id": 68
            }
          ]
        },
        {
          "id": 17,
          "chapter_id": 3,
          "code": "3.5",
          "title": "Network Access and Management",
          "summary": "Compare and contrast network access and management methods.",
          "sort_order": 4,
          "categories": [
            {
              "id": 69,
              "section_id": 17,
              "name": "Virtual Private Network (VPN) Access",
              "summary": "VPNs encrypt data normally sent in the clear so it can be transmitted securely over public networks like the internet to a VPN concentrator (often built into modern firewalls).",
              "sort_order": 0,
              "parent_id": null
            },
            {
              "id": 70,
              "section_id": 17,
              "name": "Connection Methods",
              "summary": "",
              "sort_order": 1,
              "parent_id": null
            },
            {
              "id": 71,
              "section_id": 17,
              "name": "Jump Box / Host",
              "summary": "",
              "sort_order": 2,
              "parent_id": null
            },
            {
              "id": 72,
              "section_id": 17,
              "name": "In-Band vs. Out-of-Band Management",
              "summary": "",
              "sort_order": 3,
              "parent_id": null
            }
          ],
          "terms": [
            {
              "id": 293,
              "section_id": 17,
              "name": "Site-to-Site VPN",
              "definition": "Connects two distinct networks/sites together. It is commonly implemented as an always-on encrypted tunnel built into firewalls at each location, allowing users at either site to communicate transparently without managing individual client software.",
              "image_url": "https://help.firewalla.com/hc/article_attachments/8133843071507",
              "sort_order": 0,
              "category_id": 69
            },
            {
              "id": 294,
              "section_id": 17,
              "name": "Client-to-Site VPN",
              "definition": "Connects an individual remote workstation (such as a laptop at a coffee shop) back to a corporate network concentrator. It can be initiated manually or configured as an always-on connection.",
              "image_url": "https://symlexvpn.com/wp-content/uploads/2024/10/Site-to-site-vs-Client-to-site-VPNs_-Key-Differences-1.jpg",
              "sort_order": 1,
              "category_id": 69
            },
            {
              "id": 295,
              "section_id": 17,
              "name": "Clientless VPN",
              "definition": "Eliminates the need to install separate client software by running directly inside an HTML5-compliant browser via APIs (such as the web cryptography API).",
              "image_url": "https://images.ctfassets.net/aoyx73g9h2pg/4SCWO5fPTazYEEikPFdUQH/e49ad32998ae0f50021018da1bccfb5f/What_is_a_Clientless_VPN_-Blog.jpg?w=3840&q=100",
              "sort_order": 2,
              "category_id": 69
            },
            {
              "id": 296,
              "section_id": 17,
              "name": "Full Tunnel",
              "definition": "Routes and encrypts all outbound traffic from the client machine through the VPN tunnel to the corporate concentrator.",
              "image_url": "https://www.privateinternetaccess.com/blog/wp-content/uploads/2026/01/image-18-1024x682.png",
              "sort_order": 3,
              "category_id": 69
            },
            {
              "id": 297,
              "section_id": 17,
              "name": "Split Tunnel",
              "definition": "Intelligently splits traffic so that corporate-bound data traverses the encrypted VPN tunnel, while third-party internet traffic (such as visiting an external website) bypasses the VPN and goes directly to the internet for greater efficiency.",
              "image_url": "https://www.privateinternetaccess.com/blog/wp-content/uploads/2026/01/image-19-1024x682.png",
              "sort_order": 4,
              "category_id": 69
            },
            {
              "id": 298,
              "section_id": 17,
              "name": "SSH (Secure Shell)",
              "definition": "An encrypted command-line terminal protocol operating over TCP port 22, serving as the secure replacement for unencrypted Telnet (TCP port 23).",
              "image_url": "https://www.sectorlink.com/img/blog/ssh.jpg",
              "sort_order": 5,
              "category_id": 70
            },
            {
              "id": 299,
              "section_id": 17,
              "name": "Graphical User Interface (GUI)",
              "definition": "Remote desktop software used to control a graphical operating system environment. Examples include Microsoft Remote Desktop Protocol (RDP) for Windows systems and Virtual Network Computing (VNC), which utilizes the Remote Frame Buffer (RFB) protocol across multiple operating systems.",
              "image_url": "https://www.computerhope.com/jargon/g/gui.png",
              "sort_order": 6,
              "category_id": 70
            },
            {
              "id": 300,
              "section_id": 17,
              "name": "API (Application Programming Interface)",
              "definition": "A programmatic method that allows scripts and central management systems to communicate directly with devices in their native language to automate configurations and manage large fleets of devices.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFHYLVSJEOzCKxJCojAa2x5AovkxsRds-97917Pq5zvMzGBo5p1NzsPw0&s=10",
              "sort_order": 7,
              "category_id": 70
            },
            {
              "id": 301,
              "section_id": 17,
              "name": "Console",
              "definition": "A direct physical connection (using serial cables, RJ45/DB9 serial adapters, or USB connections) to a device's console port. It provides text-based command-line access and is essential when network connectivity fails and SSH or ping are unavailable.",
              "image_url": "https://resource.fs.com/mall/mainImg/20250903095049oc7akp.jpg.webp",
              "sort_order": 8,
              "category_id": 70
            },
            {
              "id": 302,
              "section_id": 17,
              "name": "jump box",
              "definition": "A jump box is a heavily hardened, single-entry server exposed to external connections.\n\nAdministrators connect securely to the jump box first (via VPN or SSH) using strict multi-factor authentication, and from there pivot to manage other internal network devices without exposing those backend systems directly to the internet.",
              "image_url": "https://pinggy.io/images/what_is_a_jumpbox_and_how_it_helps_in_remote_access/what_is_a_jumpbox_and_how_it_helps_in_remote_access.png",
              "sort_order": 9,
              "category_id": 71
            },
            {
              "id": 303,
              "section_id": 17,
              "name": "In-Band Management",
              "definition": "Connects to a device over the existing network infrastructure by assigning it a management IP address and accessing it via SSH or a web-based GUI.",
              "image_url": "https://ipwithease.com/wp-content/uploads/2020/07/IN-BAND-AND-OUT-OF-BAND-DP.jpg",
              "sort_order": 10,
              "category_id": 72
            },
            {
              "id": 304,
              "section_id": 17,
              "name": "Out-of-Band Management",
              "definition": "Utilizes a separate management path that does not rely on the primary network. This typically involves a dedicated serial/COM port, USB connection, or a modem connected to a phone line, allowing administrators to dial in and manage devices even when the production network is completely down.",
              "image_url": "https://ipwithease.com/wp-content/uploads/2020/07/IN-BAND-AND-OUT-OF-BAND-DP.jpg",
              "sort_order": 11,
              "category_id": 72
            }
          ]
        }
      ]
    },
    {
      "id": 4,
      "number": 4,
      "title": "Network Security",
      "summary": "Protect the network: core ideas, attack types, and the defenses you apply.",
      "exam_percent": 14,
      "sort_order": 3,
      "sections": [
        {
          "id": 18,
          "chapter_id": 4,
          "code": "4.1",
          "title": "Network Security Concepts",
          "summary": "Explain the importance of basic network security concepts.",
          "sort_order": 0,
          "categories": [
            {
              "id": 73,
              "section_id": 18,
              "name": "Logical Security",
              "summary": "Logical security relies on software-based controls, cryptographic mechanisms, and access policies to protect digital assets.",
              "sort_order": 0,
              "parent_id": null
            },
            {
              "id": 74,
              "section_id": 18,
              "name": "Identity and Access Management (IAM)",
              "summary": "",
              "sort_order": 1,
              "parent_id": null
            },
            {
              "id": 75,
              "section_id": 18,
              "name": "Physical Security",
              "summary": "Physical security measures protect the tangible hardware facilities housing network infrastructure.",
              "sort_order": 2,
              "parent_id": null
            },
            {
              "id": 76,
              "section_id": 18,
              "name": "Deception Technologies",
              "summary": "Deception technologies are proactive mechanisms deployed to detect and mislead malicious actors.",
              "sort_order": 3,
              "parent_id": null
            },
            {
              "id": 77,
              "section_id": 18,
              "name": "Common Security Terminology",
              "summary": "",
              "sort_order": 4,
              "parent_id": null
            },
            {
              "id": 78,
              "section_id": 18,
              "name": "Audits and Regulatory Compliance",
              "summary": "",
              "sort_order": 5,
              "parent_id": null
            },
            {
              "id": 79,
              "section_id": 18,
              "name": "Network Segmentation Enforcement",
              "summary": "Network segmentation divides networks into logical or physical partitions to improve performance and contain security breaches.",
              "sort_order": 6,
              "parent_id": null
            }
          ],
          "terms": [
            {
              "id": 305,
              "section_id": 18,
              "name": "Encryption - Data in transit (in motion)",
              "definition": "Information traveling across wired or wireless networks is protected from eavesdropping using encryption protocols like Transport Layer Security (TLS) and Internet Protocol Security (IPsec).",
              "image_url": "https://static.wixstatic.com/media/904900_d6a1ef03c6734270a1c99bcde21a2690~mv2.png/v1/fill/w_961,h_720,al_c,q_90/904900_d6a1ef03c6734270a1c99bcde21a2690~mv2.png",
              "sort_order": 0,
              "category_id": 73
            },
            {
              "id": 306,
              "section_id": 18,
              "name": "Encryption - Data at rest",
              "definition": "Information stored on storage drives (HDDs, SSDs) or databases is protected—often via full disk encryption or file-level encryption—so unauthorized users cannot read the raw files.",
              "image_url": "https://static.wixstatic.com/media/904900_d6a1ef03c6734270a1c99bcde21a2690~mv2.png/v1/fill/w_961,h_720,al_c,q_90/904900_d6a1ef03c6734270a1c99bcde21a2690~mv2.png",
              "sort_order": 1,
              "category_id": 73
            },
            {
              "id": 307,
              "section_id": 18,
              "name": "Public Key Infrastructure (PKI)",
              "definition": "The comprehensive set of policies, controls, and management structures used to create, distribute, and manage digital certificates and encryption keys across an organization.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJlYt4FMyNdU2jLlPWHLG-qAO_NpBZ60yM4uT-b8URRJTOoue95eGiu8s&s=10",
              "sort_order": 2,
              "category_id": 73
            },
            {
              "id": 308,
              "section_id": 18,
              "name": "Self-signed certificates",
              "definition": "Certificates signed internally by an organization's own internal Certificate Authority (CA) rather than an independent third-party public CA.",
              "image_url": "https://sslinsights.com/wp-content/uploads/2024/02/what-is-self-signed-certificate-guide.webp",
              "sort_order": 3,
              "category_id": 73
            },
            {
              "id": 309,
              "section_id": 18,
              "name": "Authentication",
              "definition": "The process of proving a user's identity (using the AAA framework: Authentication, Authorization, and Accounting).",
              "image_url": "https://media.geeksforgeeks.org/wp-content/uploads/20251118155234894382/10.webp",
              "sort_order": 4,
              "category_id": 74
            },
            {
              "id": 310,
              "section_id": 18,
              "name": "Multifactor Authentication (MFA)",
              "definition": "Requiring two or more independent authentication factors (something you know, have, are, or somewhere you are).",
              "image_url": "https://www.xcitium.com/images/multi-factor-authentication-mfa.png",
              "sort_order": 5,
              "category_id": 74
            },
            {
              "id": 311,
              "section_id": 18,
              "name": "Single Sign-On (SSO)",
              "definition": "Allowing a user to authenticate once per day to gain access to multiple authorized network resources without repeated logins.",
              "image_url": "https://media.geeksforgeeks.org/wp-content/uploads/20200611114248/ssologin.png",
              "sort_order": 6,
              "category_id": 74
            },
            {
              "id": 312,
              "section_id": 18,
              "name": "RADIUS",
              "definition": "A standard AAA protocol frequently used to authenticate users connecting to VPN servers, network equipment, and wireless networks (802.1X).",
              "image_url": "https://images.ctfassets.net/aoyx73g9h2pg/7tZuPzBWiTawuNOXrstJS5/1fc7e01a8f842fbba9f7ccc4adea91f0/What-is-RADIUS-Remote-Authentication-Dial-In-User-Service-Diagram.jpg",
              "sort_order": 7,
              "category_id": 74
            },
            {
              "id": 313,
              "section_id": 18,
              "name": "LDAP",
              "definition": "A protocol (leveraging X.500 attributes) used to read and write information from a centralized directory to provide contextual user and device attributes.",
              "image_url": "https://discover.strongdm.com/hubfs/ldap-vs-active-directory.jpg",
              "sort_order": 8,
              "category_id": 74
            },
            {
              "id": 314,
              "section_id": 18,
              "name": "SAML",
              "definition": "An open standard utilizing resource servers, clients, and authorization servers for web-based authentication and authorization.",
              "image_url": "https://freescout.net/wp-content/uploads/edd/2022/05/freescout-saml-sso-module-1000x750.png",
              "sort_order": 9,
              "category_id": 74
            },
            {
              "id": 315,
              "section_id": 18,
              "name": "TACACS+",
              "definition": "An authentication protocol commonly utilized for administrative access control on network devices like routers and switches.",
              "image_url": "https://instasafe.com/blog/content/images/2024/02/What-is-TACACS-Authentication.webp",
              "sort_order": 10,
              "category_id": 74
            },
            {
              "id": 316,
              "section_id": 18,
              "name": "Time-based authentication",
              "definition": "Algorithms (like TOTP) that use synchronized time (via NTP) and secret keys to generate rotating one-time codes on mobile apps.",
              "image_url": "https://miro.medium.com/v2/da:true/resize:fit:1200/0*8JVjUs6FtoEe5wVt",
              "sort_order": 11,
              "category_id": 74
            },
            {
              "id": 317,
              "section_id": 18,
              "name": "Authorization",
              "definition": "Ensuring that authenticated users are granted the proper, restricted permissions to access files or directories.",
              "image_url": "https://www.paubox.com/hubfs/What%20to%20do%20when%20an%20individual%20revokes%20authorization.jpg",
              "sort_order": 12,
              "category_id": 74
            },
            {
              "id": 318,
              "section_id": 18,
              "name": "Least privilege",
              "definition": "The security principle of granting users and applications only the minimum rights necessary to perform their jobs, preventing excessive exposure.",
              "image_url": "https://f.hubspotusercontent30.net/hubfs/21126185/Imported_Blog_Media/6143858cdf2c9913cabc013b_principle-of-least-privilege-polp-3.jpeg",
              "sort_order": 13,
              "category_id": 74
            },
            {
              "id": 319,
              "section_id": 18,
              "name": "Role-based access control (RBAC)",
              "definition": "Assigning permissions to organizational roles or groups rather than individuals, simplifying access management.",
              "image_url": "https://cdn.prod.website-files.com/6a020fca21245d64af2c19d8/6a020fca21245d64af2c3c8f_67ab6226372b182be4e12169_60a23b06b2d3123baf7c305d_RBAC.png",
              "sort_order": 14,
              "category_id": 74
            },
            {
              "id": 320,
              "section_id": 18,
              "name": "Geofencing",
              "definition": "Restricting or granting access to sensitive data and network resources based on a user's physical geographic location determined via IP addresses, GPS, or wireless access point locations.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxdH0pGRsCNuqoWlyejaVTpGLojRBHGh0-T3oKG33mG3lcWWvz7b25EsA&s=10",
              "sort_order": 15,
              "category_id": 73
            },
            {
              "id": 321,
              "section_id": 18,
              "name": "Cameras (CCTV)",
              "definition": "Closed-circuit television systems deployed to monitor facilities, detect motion, record historical video feeds, read license plates, or perform facial recognition.",
              "image_url": "https://cdn4.volusion.store/not95-tcan2/v/vspfiles/photos/HD-Q7-2.jpg?v-cache=1774443801",
              "sort_order": 16,
              "category_id": 75
            },
            {
              "id": 322,
              "section_id": 18,
              "name": "Locks",
              "definition": "Traditional physical keys/deadbolts, electronic PIN keypads, RFID badge tokens, and biometric scanners (fingerprint, retina scans) used individually or in combination to restrict entry to sensitive spaces.",
              "image_url": "https://m.media-amazon.com/images/I/717AxaLcJrL.jpg",
              "sort_order": 17,
              "category_id": 75
            },
            {
              "id": 323,
              "section_id": 18,
              "name": "Honeypot",
              "definition": "A single virtual server or isolated system built to look attractive to attackers, allowing administrators to study attack scripts and tactics.",
              "image_url": "https://ipwithease.com/wp-content/uploads/2022/07/honeypot-vs-honeynet.jpg",
              "sort_order": 18,
              "category_id": 76
            },
            {
              "id": 324,
              "section_id": 18,
              "name": "Honeynet",
              "definition": "A larger, multi-node deception framework consisting of interconnected virtual workstations, servers, and routers designed to simulate a full network environment and observe attacker behavior.",
              "image_url": "https://ipwithease.com/wp-content/uploads/2022/07/honeypot-vs-honeynet.jpg",
              "sort_order": 19,
              "category_id": 76
            },
            {
              "id": 325,
              "section_id": 18,
              "name": "Risk",
              "definition": "The quantified exposure or likelihood of facing harm, danger, or loss when making business or network configuration decisions.",
              "image_url": "https://i0.wp.com/riskacademy.blog/wp-content/uploads/2021/06/Risk.png?fit=900%2C479&ssl=1",
              "sort_order": 20,
              "category_id": 77
            },
            {
              "id": 326,
              "section_id": 18,
              "name": "Vulnerability",
              "definition": "A software flaw, bug, or security misconfiguration in an operating system or application that could be exploited.",
              "image_url": "https://images.squarespace-cdn.com/content/v1/5b242857cef372c3ce9a4932/1541376294702-QEOKU4YPEZ8A9EPCWSPY/vulnerability.jpg",
              "sort_order": 21,
              "category_id": 77
            },
            {
              "id": 327,
              "section_id": 18,
              "name": "Exploit",
              "definition": "An action or data breach where an attacker successfully takes advantage of a vulnerability to gain unauthorized access.",
              "image_url": "https://cdn.prod.website-files.com/6a020fca21245d64af2c19d8/6a020fca21245d64af2c3544_185%20Preview.png",
              "sort_order": 22,
              "category_id": 77
            },
            {
              "id": 328,
              "section_id": 18,
              "name": "Threat",
              "definition": "An external or internal agent (such as malware, threat actors, or natural disasters like floods and fires) capable of carrying out a threat action against a vulnerability.",
              "image_url": "https://eu-images.contentstack.com/v3/assets/blt6d90778a997de1cd/bltf158954dabe4bd9f/64f15650f169c55b98886d65/threats-_Stuart_Miles-alamy.jpg?width=1280&auto=webp&quality=80&disable=upscale",
              "sort_order": 23,
              "category_id": 77
            },
            {
              "id": 329,
              "section_id": 18,
              "name": "CIA Triad",
              "definition": "The three core foundational principles of information security: Confidentiality (restricting access and encrypting data), Integrity (ensuring data is unmodified using digital signatures), and Availability (ensuring systems remain online and accessible to authorized users).",
              "image_url": "https://cdn.prod.website-files.com/6a020fca21245d64af2c19d8/6a020fca21245d64af2c3767_66a372b4a3d814c4fc284041_63fdd44daa2d3e1f527b40e7_CIA%252520Triad.jpeg",
              "sort_order": 24,
              "category_id": 77
            },
            {
              "id": 330,
              "section_id": 18,
              "name": "Data Locality",
              "definition": "Legal requirements mandating that data collected within a specific country must be stored within that country's borders (such as EU citizen data under GDPR).",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNR7dIx7exRRnp6HAEudbVznxBkeT-rtMBf1cuGAvqB1FI2CmQJMz8-EI&s=10",
              "sort_order": 25,
              "category_id": 78
            },
            {
              "id": 331,
              "section_id": 18,
              "name": "Payment Card Industry Data Security Standard (PCI DSS)",
              "definition": "A regulatory framework established to secure networks, protect cardholder data, maintain vulnerability programs, enforce access controls, and conduct regular audits.",
              "image_url": "https://cdn.prod.website-files.com/67c76d11e5810e680022e21f/68ae055ee0858d42db933e79_what-is-pci-dss.jpg",
              "sort_order": 26,
              "category_id": 78
            },
            {
              "id": 332,
              "section_id": 18,
              "name": "General Data Protection Regulation (GDPR)",
              "definition": "An EU privacy regulation granting individuals strict control over their personal data, including the right to data protection and removal.",
              "image_url": "https://www.investopedia.com/thmb/j-Te5s88JZF_96k1qCoB2RwoNtU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/general-data-protection-regulation-gdpr.asp-final-1b12e02aa4d149b9af4fcd8aec409a89.png",
              "sort_order": 27,
              "category_id": 78
            },
            {
              "id": 333,
              "section_id": 18,
              "name": "IoT and IIoT",
              "definition": "Isolating smart home/office devices (IoT) and connected industrial machinery (IIoT) onto dedicated networks to prevent inherent security flaws from compromising critical assets.",
              "image_url": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhL_GWlBET-xdRn6tB_WM6NmoAC24O52sZJSRbUT-3tpSAVTZifKq_ympDX_rve_QEjeJVMPcw7Rkmklw_pv538r1bvpN_5BRJWaXV3N6_VK0FiRYWZLHldruJVAkGfS_8mbBybil5jB9I/s1600/IoT_vs_IIoT.jpg",
              "sort_order": 28,
              "category_id": 79
            },
            {
              "id": 334,
              "section_id": 18,
              "name": "SCADA, ICS, and OT",
              "definition": "Segmenting large-scale industrial control systems (SCADA/ICS) and operational technology (OT)—such as power grids, traffic control, and manufacturing plants—to guarantee maximum uptime and availability.",
              "image_url": "https://miro.medium.com/0*btFAHNopgpDf0dzH.png",
              "sort_order": 29,
              "category_id": 79
            },
            {
              "id": 335,
              "section_id": 18,
              "name": "Guest Networks",
              "definition": "Providing visitors with isolated internet access while blocking all communication paths to internal corporate network services.",
              "image_url": "https://home-cdn.reolink.us/wp-content/uploads/2025/01/guest-wifi.jpg",
              "sort_order": 30,
              "category_id": 79
            },
            {
              "id": 336,
              "section_id": 18,
              "name": "Bring Your Own Device (BYOD)",
              "definition": "Segmenting personal employee devices so that corporate data remains secure and centrally manageable while personal user data remains entirely private.",
              "image_url": "https://www.cynergytech.com/wp-content/uploads/2025/09/BYOD-1080x675.jpg",
              "sort_order": 31,
              "category_id": 79
            }
          ]
        },
        {
          "id": 19,
          "chapter_id": 4,
          "code": "4.2",
          "title": "Attacks and Their Impact",
          "summary": "Summarize various types of attacks and their impact to the network.",
          "sort_order": 1,
          "categories": [
            {
              "id": 80,
              "section_id": 19,
              "name": "Denial-of-Service (DoS) and Distributed Denial-of-Service (DDoS)",
              "summary": "",
              "sort_order": 0,
              "parent_id": null
            },
            {
              "id": 81,
              "section_id": 19,
              "name": "VLAN Hopping",
              "summary": "",
              "sort_order": 1,
              "parent_id": null
            },
            {
              "id": 82,
              "section_id": 19,
              "name": "Media Access Control (MAC) Flooding",
              "summary": "",
              "sort_order": 2,
              "parent_id": null
            },
            {
              "id": 83,
              "section_id": 19,
              "name": "Address Resolution Protocol (ARP) Poisoning and Spoofing",
              "summary": "",
              "sort_order": 3,
              "parent_id": null
            },
            {
              "id": 84,
              "section_id": 19,
              "name": "DNS Poisoning and Spoofing",
              "summary": "",
              "sort_order": 4,
              "parent_id": null
            },
            {
              "id": 85,
              "section_id": 19,
              "name": "Rogue Devices and Services",
              "summary": "",
              "sort_order": 5,
              "parent_id": null
            },
            {
              "id": 86,
              "section_id": 19,
              "name": "Evil Twin",
              "summary": "",
              "sort_order": 6,
              "parent_id": null
            },
            {
              "id": 87,
              "section_id": 19,
              "name": "On-Path Attack (Man-in-the-Middle)",
              "summary": "",
              "sort_order": 7,
              "parent_id": null
            },
            {
              "id": 88,
              "section_id": 19,
              "name": "Social Engineering",
              "summary": "",
              "sort_order": 8,
              "parent_id": null
            },
            {
              "id": 89,
              "section_id": 19,
              "name": "Malware",
              "summary": "",
              "sort_order": 9,
              "parent_id": null
            }
          ],
          "terms": [
            {
              "id": 337,
              "section_id": 19,
              "name": "Mechanism",
              "definition": "A DoS attack overloads a system's resources, exploits operating system or application vulnerabilities, or introduces network loops (e.g., disabling Spanning Tree Protocol) to cause service failure. A DDoS attack scales this by coordinating multiple devices—such as a botnet or utilizing reflection/amplification techniques (like DNS amplification)—to flood a single target with massive amounts of traffic.",
              "image_url": "https://assets.gcore.pro/site-media/uploads/what_is_denial_of_service_attack_fi_d460d1a989.png",
              "sort_order": 0,
              "category_id": 80
            },
            {
              "id": 338,
              "section_id": 19,
              "name": "Mechanism",
              "definition": "Renders target systems or servers completely unavailable, exhausts bandwidth resources, disrupts normal business operations, and can serve as a distraction while attackers target other parts of the network.",
              "image_url": "https://assets.gcore.pro/site-media/uploads/what_is_denial_of_service_attack_fi_d460d1a989.png",
              "sort_order": 1,
              "category_id": 80
            },
            {
              "id": 339,
              "section_id": 19,
              "name": "Mechanism",
              "definition": "Bypasses network segmentation without needing a router. This is achieved either through switch spoofing (tricking a switch into auto-negotiating a trunk link) or double tagging (crafting frames with two 802.1Q tags to exploit native VLAN configurations).",
              "image_url": "https://www.imperva.com/learn/wp-content/uploads/sites/13/2024/11/Vlan-Hopping.svg",
              "sort_order": 2,
              "category_id": 81
            },
            {
              "id": 340,
              "section_id": 19,
              "name": "Impact:",
              "definition": "Allows attackers to transmit data directly onto a restricted VLAN to which they should not normally have access, potentially aiding in denial-of-service or breaching network boundaries.",
              "image_url": "https://www.imperva.com/learn/wp-content/uploads/sites/13/2024/11/Vlan-Hopping.svg",
              "sort_order": 3,
              "category_id": 81
            },
            {
              "id": 341,
              "section_id": 19,
              "name": "Mechanism",
              "definition": "An attacker floods a network switch with numerous frames containing random, fake source MAC addresses until the switch’s MAC address table is entirely full.",
              "image_url": "https://app.trustline.sa/media/blog/2024/10/09/scrnn4.jpeg",
              "sort_order": 4,
              "category_id": 82
            },
            {
              "id": 342,
              "section_id": 19,
              "name": "Impact",
              "definition": "Exhausts the switch's table capacity, forcing it to fall back to hub-like behavior where all inbound traffic is broadcasted to every interface. This enables the attacker to capture traffic not originally intended for their workstation.",
              "image_url": "https://app.trustline.sa/media/blog/2024/10/09/scrnn4.jpeg",
              "sort_order": 5,
              "category_id": 82
            },
            {
              "id": 343,
              "section_id": 19,
              "name": "Mechanism",
              "definition": "An attacker sends unsolicited, forged ARP responses across the network, falsely claiming a specific IP address (such as a default gateway router) is associated with the attacker’s MAC address.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBFwbHu5MSjafpN-taQGe8nMhk3R9oXSO_mmy-KbKhcZAcC0XD6yRsP20Y&s=10",
              "sort_order": 6,
              "category_id": 83
            },
            {
              "id": 344,
              "section_id": 19,
              "name": "Impact",
              "definition": "Corrupts the local ARP caches of target devices, causing all outbound traffic meant for the gateway to flow through the attacker's machine first. This facilitates on-path attacks where traffic can be intercepted, viewed, or modified without the victim's knowledge.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBFwbHu5MSjafpN-taQGe8nMhk3R9oXSO_mmy-KbKhcZAcC0XD6yRsP20Y&s=10",
              "sort_order": 7,
              "category_id": 83
            },
            {
              "id": 345,
              "section_id": 19,
              "name": "Mechanism",
              "definition": "Involves modifying entries directly on a DNS server, altering local client host files, or injecting fake, poisoned responses in real time during a DNS lookup (often aided by on-path attacks).",
              "image_url": "https://www.varonis.com/hs-fs/hubfs/Imported_Blog_Media/dns-cache-poisoning-vs-dns-spoofing.png?width=1240&height=926&name=dns-cache-poisoning-vs-dns-spoofing.png",
              "sort_order": 8,
              "category_id": 84
            },
            {
              "id": 346,
              "section_id": 19,
              "name": "Impact",
              "definition": "Redirects user traffic destined for legitimate websites (such as a corporate web portal) to a malicious server controlled by the attacker.",
              "image_url": "https://www.varonis.com/hs-fs/hubfs/Imported_Blog_Media/dns-cache-poisoning-vs-dns-spoofing.png?width=1240&height=926&name=dns-cache-poisoning-vs-dns-spoofing.png",
              "sort_order": 9,
              "category_id": 84
            },
            {
              "id": 347,
              "section_id": 19,
              "name": "DHCP",
              "definition": "**Mechanism**: An unauthorized DHCP server is plugged into the network, handing out invalid network configurations or duplicate IP addresses.   \n\n**Impact**: Disrupts client connectivity, creates IP address conflicts, and can effectively shut down local network communications.",
              "image_url": "https://www.ipxo.com/app/uploads/2022/02/DHCP-featured-640x364.png",
              "sort_order": 10,
              "category_id": 85
            },
            {
              "id": 348,
              "section_id": 19,
              "name": "AP (Access Point)",
              "definition": "**Mechanism**: An unauthorized wireless access point or software-shared hotspot is connected to the network environment.  \n\n**Impact**: Creates severe security vulnerabilities, allowing unauthorized users to bypass network perimeter controls and access internal resources.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4yDuSLeuWxusiFQvjYARoobWxPTOHwCoZJv3n00MhgiuQ6TPtfXK5Z3A&s=10",
              "sort_order": 11,
              "category_id": 85
            },
            {
              "id": 349,
              "section_id": 19,
              "name": "Mechanism",
              "definition": "A malicious wireless access point configured to mimic a legitimate network’s SSID and captive portal, frequently using high transmission power to drown out genuine access points.",
              "image_url": "https://ic.nordcdn.com/v1/https://sb.nordcdn.com/m/aeb37cab05357e24/original/blog-featured-evil-twin-attack-svg.svg",
              "sort_order": 12,
              "category_id": 86
            },
            {
              "id": 350,
              "section_id": 19,
              "name": "Impact",
              "definition": "Tricks users into connecting to the rogue network, allowing attackers to harvest credentials or execute on-path attacks to monitor traffic.",
              "image_url": "https://ic.nordcdn.com/v1/https://sb.nordcdn.com/m/aeb37cab05357e24/original/blog-featured-evil-twin-attack-svg.svg",
              "sort_order": 13,
              "category_id": 86
            },
            {
              "id": 351,
              "section_id": 19,
              "name": "Mechanism",
              "definition": "An attacker positions themselves between two communicating nodes (using ARP poisoning, evil twins, session hijacking, etc.) to intercept, view, and potentially modify data packets.",
              "image_url": "https://cdn.prod.website-files.com/6a020fca21245d64af2c19d8/6a020fca21245d64af2c2c24_10.1.jpg",
              "sort_order": 14,
              "category_id": 87
            },
            {
              "id": 352,
              "section_id": 19,
              "name": "Impact",
              "definition": "Compromises data confidentiality and integrity, allowing attackers to manipulate communications while remaining completely transparent to both endpoints.",
              "image_url": "https://cdn.prod.website-files.com/6a020fca21245d64af2c19d8/6a020fca21245d64af2c2c24_10.1.jpg",
              "sort_order": 15,
              "category_id": 87
            },
            {
              "id": 353,
              "section_id": 19,
              "name": "Phishing",
              "definition": "**Mechanism**: Deceptive emails using spoofed sender addresses and fake replica websites designed to trick users.   \n\n**Impact**: Trays users into disclosing sensitive credentials and personal data directly to attackers.",
              "image_url": "https://www.malwarebytes.com/wp-content/uploads/sites/2/2024/05/phishing.webp?w=1024",
              "sort_order": 16,
              "category_id": 88
            },
            {
              "id": 354,
              "section_id": 19,
              "name": "Dumpster Diving",
              "definition": "**Mechanism**: Rummaging through corporate trash bins or dumpsters to find discarded sensitive documents.   \n\n**Impact**: Exposes internal phone lists, naming conventions, and confidential data that can be weaponized for secondary phishing or impersonation attacks.",
              "image_url": "https://townsquare.media/site/1140/files/2024/02/attachment-happened-near-Highway-2-between-mile-markers-611-and-612.-1.jpg",
              "sort_order": 17,
              "category_id": 88
            },
            {
              "id": 355,
              "section_id": 19,
              "name": "Shoulder Surfing",
              "definition": "**Mechanism**: Directly observing a user's screen in a public place or using visual aids/malware-enabled cameras.\n\n**Impact**: Compromises sensitive information, corporate financial details, or login credentials displayed on screens.",
              "image_url": "https://rublon.com/wp-content/uploads/2023/09/shoulder-surfing-1024x683.jpg",
              "sort_order": 18,
              "category_id": 88
            },
            {
              "id": 356,
              "section_id": 19,
              "name": "Tailgating (and Piggybacking)",
              "definition": "**Mechanism**: Gaining unauthorized physical building access by closely following an authorized employee through a door or tricking them into holding it open.   \n\n**Impact**: Bypasses physical security controls, granting attackers direct physical access to internal offices, equipment, and network jacks.",
              "image_url": "https://timely-benefit-e63d540317.media.strapiapp.com/Difference_between_Tailgating_and_Piggybacking_3bf628502d_35d16ba75f.jpeg",
              "sort_order": 19,
              "category_id": 88
            },
            {
              "id": 357,
              "section_id": 19,
              "name": "Mechanism",
              "definition": "A broad category of malicious software—including viruses (requiring human action to spread), worms (self-replicating without human intervention), ransomware (encrypts data for a financial payout), Trojans, rootkits, keyloggers, adware, spyware, and logic bombs.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR885ADftBNTrExNaRCf_QdRFxWQ-geOW4LtYvIge4JDyDuoTswoiYmiKA&s=10",
              "sort_order": 20,
              "category_id": 89
            },
            {
              "id": 358,
              "section_id": 19,
              "name": "Impact",
              "definition": "Causes system instability, resource degradation, encryption and loss of critical corporate files, credential theft via keylogging, and remote system commandeering through botnets.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR885ADftBNTrExNaRCf_QdRFxWQ-geOW4LtYvIge4JDyDuoTswoiYmiKA&s=10",
              "sort_order": 21,
              "category_id": 89
            }
          ]
        },
        {
          "id": 20,
          "chapter_id": 4,
          "code": "4.3",
          "title": "Security Features, Defense, and Solutions",
          "summary": "Given a scenario, apply network security features, defense techniques, and solutions.",
          "sort_order": 2,
          "categories": [
            {
              "id": 90,
              "section_id": 20,
              "name": "Device Hardening",
              "summary": "",
              "sort_order": 0,
              "parent_id": null
            },
            {
              "id": 91,
              "section_id": 20,
              "name": "Network Access Control (NAC)",
              "summary": "",
              "sort_order": 1,
              "parent_id": null
            },
            {
              "id": 92,
              "section_id": 20,
              "name": "Key Management",
              "summary": "",
              "sort_order": 2,
              "parent_id": null
            },
            {
              "id": 93,
              "section_id": 20,
              "name": "Security Rules",
              "summary": "",
              "sort_order": 3,
              "parent_id": null
            },
            {
              "id": 94,
              "section_id": 20,
              "name": "Zones",
              "summary": "",
              "sort_order": 4,
              "parent_id": null
            }
          ],
          "terms": [
            {
              "id": 359,
              "section_id": 20,
              "name": "Disable unused ports and services",
              "definition": "Network-based services running on a system expose open ports that act as potential entry points. Services that are no longer active should be shut down to make their ports inaccessible. Similarly, physical switch ports (such as wall jacks in common areas) should be disabled until explicitly needed.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvuotuwJVymPx0CU9lu1k5hSoO3s2IB9_38-0xIAdVEeduxvNexL33-qo&s=10",
              "sort_order": 0,
              "category_id": 90
            },
            {
              "id": 360,
              "section_id": 20,
              "name": "Change default passwords",
              "definition": "Many network devices ship with standard default credentials providing administrative access. These must be changed immediately to prevent unauthorized users from gaining complete control of the system.",
              "image_url": "https://www.lifewire.com/thmb/chrSpUZN-Cm29bJs0voDQDY-VT0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-change-your-wireless-routers-admin-password-2487652-e08d14d16c8c42a399c927c26680a7ec.png",
              "sort_order": 1,
              "category_id": 90
            },
            {
              "id": 361,
              "section_id": 20,
              "name": "Port security",
              "definition": "A switch feature that prevents an unauthorized device from being plugged into an interface previously occupied by an authorized system. By registering expected MAC addresses, the switch can immediately disable the port and alert administrators if a mismatch occurs.",
              "image_url": "https://www.pynetlabs.com/wp-content/uploads/2023/05/Port-Security-in-Computer-Network-1.jpeg",
              "sort_order": 2,
              "category_id": 91
            },
            {
              "id": 362,
              "section_id": 20,
              "name": "802.1X",
              "definition": "A Network Access Control mechanism that mandates user or device authentication (such as providing a username and password) before any communication access is granted on the network.",
              "image_url": "https://cloudradius.com/wp-content/uploads/2023/06/8021x-e1633710868877.jpg",
              "sort_order": 3,
              "category_id": 91
            },
            {
              "id": 363,
              "section_id": 20,
              "name": "MAC filtering",
              "definition": "Restricts network access based on hardware MAC addresses. Because MAC addresses can easily be spoofed or changed administratively, it is considered \"security through obscurity\" and can be circumvented.",
              "image_url": "https://media.geeksforgeeks.org/wp-content/uploads/20260207100727825445/mac_filtering.webp",
              "sort_order": 4,
              "category_id": 91
            },
            {
              "id": 364,
              "section_id": 20,
              "name": "Centralized Key Management Systems",
              "definition": "Software tools used to manage authentication details, digital certificates, SSL keys, and SSH keys from a single dashboard. They enable administrators to track expiration dates, renew or revoke keys, audit user/device access, and generate compliance reports.",
              "image_url": "https://www.aihr.com/wp-content/uploads/Centralized-Management-Blog-1024x1024.png",
              "sort_order": 5,
              "category_id": 92
            },
            {
              "id": 365,
              "section_id": 20,
              "name": "Access Control List (ACL)",
              "definition": "A rule set utilized by firewalls, routers, and operating systems to permit or deny traffic based on source/destination IP addresses, port numbers, applications, or time of day. Firewalls process rules from top to bottom, applying an implicit deny to any traffic that fails to match a specified rule.",
              "image_url": "https://networkwalks.com/wp-content/uploads/2022/03/acl-access-control-lists-2.jpg",
              "sort_order": 6,
              "category_id": 93
            },
            {
              "id": 366,
              "section_id": 20,
              "name": "Uniform Resource Locator (URL) filtering",
              "definition": "Enables organizations to restrict web traffic by specifying individual URLs or broad content categories (such as hacking, auction, or travel sites) into allow lists and block lists.",
              "image_url": "https://www.checkpoint.com/wp-content/uploads/url-filtering-floating-hero-image.png",
              "sort_order": 7,
              "category_id": 93
            },
            {
              "id": 367,
              "section_id": 20,
              "name": "Content filtering",
              "definition": "Software or hardware inspection mechanisms that evaluate internal data payloads to prevent the leakage of sensitive documents or financial details, block unsafe or inappropriate web content, or detect malicious payloads via antivirus and anti-malware systems.",
              "image_url": "https://cdn.prod.website-files.com/60e615980cab093e6f2db3c3/60f5ae0f9b298e035bcd9a9f_content-filtering.png",
              "sort_order": 8,
              "category_id": 93
            },
            {
              "id": 368,
              "section_id": 20,
              "name": "Trusted vs. Untrusted Zones",
              "definition": "Segmenting a network into broad logical zones (such as a trusted internal network versus an untrusted external internet zone) to streamline and simplify firewall policy creation without relying on complex IP address ranges.",
              "image_url": "https://cyburanus.com/wp-content/uploads/What-is-trust-boundary-1024x683.jpg",
              "sort_order": 9,
              "category_id": 94
            },
            {
              "id": 369,
              "section_id": 20,
              "name": "Screened Subnet",
              "definition": "A dedicated, isolated section of the network designed to house publicly accessible services (such as web or email servers). This exposes public-facing resources while keeping external traffic safely separated from sensitive internal network services.",
              "image_url": "https://blog.greencloudvps.com/wp-content/uploads/2025/04/screened-subnet-1.jpg",
              "sort_order": 10,
              "category_id": 94
            }
          ]
        }
      ]
    },
    {
      "id": 5,
      "number": 5,
      "title": "Network Troubleshooting",
      "summary": "Find and fix problems: the methodology, cabling, services, performance, and tools.",
      "exam_percent": 24,
      "sort_order": 4,
      "sections": [
        {
          "id": 21,
          "chapter_id": 5,
          "code": "5.1",
          "title": "Troubleshooting Methodology",
          "summary": "Explain the troubleshooting methodology.",
          "sort_order": 0,
          "categories": [
            {
              "id": 95,
              "section_id": 21,
              "name": "Identify the Problem",
              "summary": "",
              "sort_order": 0,
              "parent_id": null
            },
            {
              "id": 96,
              "section_id": 21,
              "name": "Establish a Theory of Probable Cause",
              "summary": "",
              "sort_order": 1,
              "parent_id": null
            },
            {
              "id": 97,
              "section_id": 21,
              "name": "Test the Theory to Determine the Cause",
              "summary": "",
              "sort_order": 2,
              "parent_id": null
            },
            {
              "id": 98,
              "section_id": 21,
              "name": "Establish a Plan of Action to Resolve the Problem and Identify Potential Effects",
              "summary": "",
              "sort_order": 3,
              "parent_id": null
            },
            {
              "id": 99,
              "section_id": 21,
              "name": "Implement the Solution or Escalate as Necessary",
              "summary": "",
              "sort_order": 4,
              "parent_id": null
            },
            {
              "id": 100,
              "section_id": 21,
              "name": "Verify Full System Functionality and Implement Preventive Measures",
              "summary": "",
              "sort_order": 5,
              "parent_id": null
            },
            {
              "id": 101,
              "section_id": 21,
              "name": "Document Findings, Actions, Outcomes, and Lessons Learned",
              "summary": "",
              "sort_order": 6,
              "parent_id": null
            }
          ],
          "terms": [
            {
              "id": 370,
              "section_id": 21,
              "name": "Gather information and question users",
              "definition": "Ask users what they are experiencing and what they have seen associated with the problem. Combine these user experiences with statistics and metrics gathered from routers and switches.",
              "image_url": "https://guides.uxtweak.com/wp-content/uploads/2023/05/UXT_user_feedback_question_02.png",
              "sort_order": 0,
              "category_id": 95
            },
            {
              "id": 371,
              "section_id": 21,
              "name": "Identify symptoms",
              "definition": "Recognize that an issue may involve multiple symptoms working together rather than just a single isolated symptom.",
              "image_url": "https://obkio.com/blog/how-to-identify-network-performance-issues/identify-network-issues.png",
              "sort_order": 1,
              "category_id": 95
            },
            {
              "id": 372,
              "section_id": 21,
              "name": "Determine if anything has changed",
              "definition": "Investigate what has changed recently, such as configuration updates, powered-off systems, or physical changes in the wiring closet.",
              "image_url": "https://www.news-medical.net/image-handler/picture/2021/9/shutterstock_739797655.jpg",
              "sort_order": 2,
              "category_id": 95
            },
            {
              "id": 373,
              "section_id": 21,
              "name": "Duplicate the problem, if possible",
              "definition": "Build a lab environment to replicate the issue, making it easier to find the root cause.",
              "image_url": "https://www.bigstarcopywriting.com/wp-content/uploads/2024/05/5-1024x658.jpg",
              "sort_order": 3,
              "category_id": 95
            },
            {
              "id": 374,
              "section_id": 21,
              "name": "Approach multiple problems individually",
              "definition": "If the scope of a problem is too large, break it down into smaller pieces and tackle one component at a time.",
              "image_url": "https://cdn.prod.website-files.com/63e10f20140d9cbf73f9b946/64903e8f18828135d87b3d02_Art-Smalley-on-his-new-book-Four-types-of-problems.jpeg",
              "sort_order": 4,
              "category_id": 95
            },
            {
              "id": 375,
              "section_id": 21,
              "name": "Question the obvious:",
              "definition": "Start with simple, quick-to-solve problems, such as checking and swapping a faulty cable.",
              "image_url": "https://jevondangeli.com/wp-content/uploads/2020/11/how_to_ask_questions2.png",
              "sort_order": 5,
              "category_id": 96
            },
            {
              "id": 376,
              "section_id": 21,
              "name": "Consider multiple approaches",
              "definition": "Utilize structured models to narrow down the issue:",
              "image_url": "https://unikahypolite.wordpress.com/wp-content/uploads/2013/05/approach.jpg",
              "sort_order": 6,
              "category_id": 96
            },
            {
              "id": 377,
              "section_id": 21,
              "name": "Top-to-bottom or bottom-to-top OSI model",
              "definition": "Start from the application layer down to the network layer, or work from the bottom up (especially useful for new network implementations).",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO1C3F-xJm-018-dkW3IcXjFtyUO0e4FcnOJ2x9ZEquIz4YhdccozaZY6d&s=10",
              "sort_order": 7,
              "category_id": 96
            },
            {
              "id": 378,
              "section_id": 21,
              "name": "Divide and conquer",
              "definition": "Eliminate different aspects of the environment to simplify troubleshooting (e.g., checking if an issue persists across multiple operating systems).",
              "image_url": "https://teeturtle.com/cdn/shop/files/GIL-TT-SHIRT-Divide_Conquer_179c3dc5-e146-439e-8b7d-996cd2ab5f56.jpg?v=1724230784&width=1946",
              "sort_order": 8,
              "category_id": 96
            },
            {
              "id": 379,
              "section_id": 21,
              "name": "Test the hypothesis",
              "definition": "Create a series of steps or make configuration changes in a lab to see if they have a positive effect on the issue.",
              "image_url": "https://www.statisticsteacher.org/wp-content/uploads/2021/03/HypothesisTesting_ST.jpg",
              "sort_order": 9,
              "category_id": 97
            },
            {
              "id": 380,
              "section_id": 21,
              "name": "Confirm or pivot",
              "definition": "If the theory is confirmed, determine the next steps for resolution. If the theory is not confirmed, establish a new theory or escalate the problem.",
              "image_url": "https://entrepreneurship.ncsu.edu/wp-content/uploads/2024/06/pivot-research.jpg",
              "sort_order": 10,
              "category_id": 97
            },
            {
              "id": 381,
              "section_id": 21,
              "name": "Plan the implementation",
              "definition": "Outline how the fix will be introduced into the production environment and schedule a formal change control window if required.",
              "image_url": "https://www.cpcs-training-courses.co.uk/wp-content/uploads/2023/06/The-essential-steps-in-planning-the-implementation-of-a-public-building.jpg",
              "sort_order": 11,
              "category_id": 98
            },
            {
              "id": 382,
              "section_id": 21,
              "name": "Prepare contingencies",
              "definition": "Anticipate potential complications by designing a Plan B, a Plan C, and a rollback process to revert changes if necessary.",
              "image_url": "https://www.investopedia.com/thmb/O8BN8ZQL1VVl_n8s3oGw1FXllz0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/contingency.asp-final-8badad7ddfa14433bb92c18a044edf46.png",
              "sort_order": 12,
              "category_id": 98
            },
            {
              "id": 383,
              "section_id": 21,
              "name": "Execute the fix",
              "definition": "Apply the solution during the designated change control window (this may be executed by an operations team rather than the troubleshooting team). Escalate the issue if further resources or expertise are required.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-CtL-p9pJY4JB74fOYN3M7mj3-DzBxhR4IlcQ3TYvuN36UxuMIgAtoynB&s=10",
              "sort_order": 13,
              "category_id": 99
            },
            {
              "id": 384,
              "section_id": 21,
              "name": "Verify functionality",
              "definition": "Engage the end users or original reporters to confirm that the previous problem is fully resolved and system functionality is restored.",
              "image_url": "https://assets.testmuai.com/resources/uploads/2023/07/unnamed2520-25202023-07-03T153525.582.png",
              "sort_order": 14,
              "category_id": 100
            },
            {
              "id": 385,
              "section_id": 21,
              "name": "Implement preventive measures",
              "definition": "Discuss and deploy technological or procedural changes to prevent the issue from recurring in the future.",
              "image_url": "https://cdn.prod.website-files.com/64be2237ec69631e314cb518/665e126a940e51aa71767e73_65c5b1d9ae6b6dab56365004_SafetyMeasures.webp",
              "sort_order": 15,
              "category_id": 100
            },
            {
              "id": 386,
              "section_id": 21,
              "name": "Record details",
              "definition": "Document the troubleshooting process followed, the precise fix that resolved the issue, and the final outcomes.",
              "image_url": "https://www.armedia.com/wp-content/uploads/2010/03/Screen-Shot-2012-05-11-at-1.17.38-PM.png",
              "sort_order": 16,
              "category_id": 101
            },
            {
              "id": 387,
              "section_id": 21,
              "name": "Store in a knowledge base:",
              "definition": "Save the documentation in a help desk database or knowledge base so it can be easily referenced if the same problem occurs in the future.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV0-r8NqiX8VzcIAU2J1g-1Hyrpchw3zfOdvc4qstAmKIJv3zZFXgdEBhb&s=10",
              "sort_order": 17,
              "category_id": 101
            }
          ]
        },
        {
          "id": 22,
          "chapter_id": 5,
          "code": "5.2",
          "title": "Cabling and Physical Interface Issues",
          "summary": "Given a scenario, troubleshoot common cabling and physical interface issues.",
          "sort_order": 1,
          "categories": [
            {
              "id": 102,
              "section_id": 22,
              "name": "Cable Issues",
              "summary": "",
              "sort_order": 0,
              "parent_id": null
            },
            {
              "id": 103,
              "section_id": 22,
              "name": "Incorrect Cable",
              "summary": "",
              "sort_order": 0,
              "parent_id": 102
            },
            {
              "id": 109,
              "section_id": 22,
              "name": "Increasing Interface Counters",
              "summary": "",
              "sort_order": 0,
              "parent_id": 108
            },
            {
              "id": 112,
              "section_id": 22,
              "name": "Power over Ethernet (PoE)",
              "summary": "",
              "sort_order": 0,
              "parent_id": 111
            },
            {
              "id": 104,
              "section_id": 22,
              "name": "Signal Degradation",
              "summary": "",
              "sort_order": 1,
              "parent_id": 102
            },
            {
              "id": 108,
              "section_id": 22,
              "name": "Interface Issues",
              "summary": "",
              "sort_order": 1,
              "parent_id": null
            },
            {
              "id": 110,
              "section_id": 22,
              "name": "Port Status",
              "summary": "",
              "sort_order": 1,
              "parent_id": 108
            },
            {
              "id": 113,
              "section_id": 22,
              "name": "Transceivers",
              "summary": "",
              "sort_order": 1,
              "parent_id": 111
            },
            {
              "id": 107,
              "section_id": 22,
              "name": "Other",
              "summary": "",
              "sort_order": 2,
              "parent_id": 102
            },
            {
              "id": 111,
              "section_id": 22,
              "name": "Hardware Issues",
              "summary": "",
              "sort_order": 2,
              "parent_id": null
            }
          ],
          "terms": [
            {
              "id": 388,
              "section_id": 22,
              "name": "Single-mode vs. Multimode Fiber",
              "definition": "Mixing these fiber types or using the wrong core size (e.g., single-mode ~9 micron vs. multimode 50/62.5 micron core within a 125-micron cladding) results in severe signal errors and communication failure. Always verify markings on the outer jacket.",
              "image_url": "https://images.ctfassets.net/aoyx73g9h2pg/2akZ34C0SwKh3lRZg3u0M5/bbdbf30bbe3d7f6939a78d50df925a28/Single-Mode-vs-Multimode-Fiber-Diagram.jpg",
              "sort_order": 0,
              "category_id": 103
            },
            {
              "id": 389,
              "section_id": 22,
              "name": "Category Standards",
              "definition": "Using copper below the IEEE standard requirement (e.g., Cat 5 for gigabit vs. Cat 6/6A for 10GBASE-T) or exceeding maximum distance limits (e.g., 100 meters for Cat 5/6 gigabit, 55 meters for Cat 6 10G) causes signal degradation and reduced link speeds.",
              "image_url": "https://files.cablewholesale.com/mailimages/articles/2011-09/cat_cables.jpg",
              "sort_order": 1,
              "category_id": 103
            },
            {
              "id": 390,
              "section_id": 22,
              "name": "STP vs. UTP",
              "definition": "Unshielded Twisted Pair (UTP) is prone to electromagnetic interference (EMI), whereas Shielded Twisted Pair (STP) provides foil or braided shielding (with a grounding wire) to resist external noise. Damaged shields reintroduce interference.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdEcMAfapUAFFCGx_TvNHOBTfGvufxMvcGGzEbQa6lyxWx_CfQyt58jxX0&s=10",
              "sort_order": 2,
              "category_id": 103
            },
            {
              "id": 391,
              "section_id": 22,
              "name": "Crosstalk (XT)",
              "definition": "Signal leakage between adjacent wire pairs. Measured as Near-End Crosstalk (NEXT) or Far-End Crosstalk (FEXT), and aggravated by untwisting wires too far during termination. Alien crosstalk refers to interference coming from neighboring cables.",
              "image_url": "https://cabling.crxconec.com/Templates/pic/CRX-Blog-What%20is%20Alien%20Crosstalk.JPG?v=3636549e",
              "sort_order": 3,
              "category_id": 104
            },
            {
              "id": 392,
              "section_id": 22,
              "name": "Interference",
              "definition": "Electromagnetic interference (EMI) caused by running cables too close to power cords, fluorescent lights, or generators.",
              "image_url": "https://www.networktechinc.com/images/article-diagram-motor.gif",
              "sort_order": 4,
              "category_id": 104
            },
            {
              "id": 393,
              "section_id": 22,
              "name": "Attenuation",
              "definition": "Gradual loss of signal strength over distance in both copper and fiber optics, requiring adherence to strict maximum length standards.",
              "image_url": "https://statics.mylandingpages.co/static/aaapycm22qmuab44/image/e15ca6cf847b4b7cae1dc911a8ec44aa.webp",
              "sort_order": 5,
              "category_id": 104
            },
            {
              "id": 394,
              "section_id": 22,
              "name": "Improper Termination",
              "definition": "Errors during crimping or punch-down (such as swapped pins or split pairs) can cause link speeds to drop from 1 Gbps down to 100 Mbps, or cause total link failure.",
              "image_url": "https://msbjustice.com/wp-content/uploads/2022/02/wrongful-termination-case-e1644318335271.jpg",
              "sort_order": 6,
              "category_id": 107
            },
            {
              "id": 395,
              "section_id": 22,
              "name": "Transmitter (TX) / Receiver (RX) Transposed",
              "definition": "Reversing the transmit and receive fibers or wires results in a \"no link\" condition because data is sent into another transmitter instead of a receiver.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReKvCZAsQfLKLZjWlQc99PSNNU4YnkJxb0djjcmFegkGg1NZfbYX31R-g3&s=10",
              "sort_order": 7,
              "category_id": 107
            },
            {
              "id": 396,
              "section_id": 22,
              "name": "Cyclic Redundancy Check (CRC)",
              "definition": "Increments when a received frame's calculated checksum does not match its frame check sequence (FCS), indicating signal corruption, bad cables, or faulty transceivers.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4O58a-oDiPB4L_e4rghVWDpNmMxDIKMEwigKXisRkuMvM4BlW8493eMio&s=10",
              "sort_order": 8,
              "category_id": 109
            },
            {
              "id": 397,
              "section_id": 22,
              "name": "Runts",
              "definition": "Frames smaller than the minimum 64-byte Ethernet standard, often caused by collisions on half-duplex links.",
              "image_url": "https://cdn11.bigcommerce.com/s-jzmamplsrc/images/stencil/1500x1500/products/5848/14523/image-of-runts-theater-box-candy__02391.1782766537.jpg?c=1&imbypass=on",
              "sort_order": 9,
              "category_id": 109
            },
            {
              "id": 398,
              "section_id": 22,
              "name": "Giants",
              "definition": "Frames larger than the standard 1,518 bytes (or configured jumbo frame size)",
              "image_url": "https://storage.ghost.io/c/49/77/497795e8-85fb-4775-848e-ee5126597212/content/images/2018/10/image1-2.png",
              "sort_order": 10,
              "category_id": 109
            },
            {
              "id": 399,
              "section_id": 22,
              "name": "Drops",
              "definition": "Frames lost due to buffer exhaustion or network congestion when devices cannot process incoming traffic fast enough.",
              "image_url": "https://cdn.arstechnica.net/wp-content/uploads/2014/04/Water.jpg",
              "sort_order": 11,
              "category_id": 109
            },
            {
              "id": 400,
              "section_id": 22,
              "name": "Error Disabled",
              "definition": "An automated safety state where a switch shuts down an interface due to issues like port security violations or interface \"flapping\" (rapidly cycling up and down). Requires manual re-enablement.",
              "image_url": "https://www.ioshacker.com/wp-content/uploads/2016/07/iPhone-is-disbaled-error-Apple.jpg",
              "sort_order": 12,
              "category_id": 110
            },
            {
              "id": 401,
              "section_id": 22,
              "name": "Administratively Down",
              "definition": "A port explicitly turned off manually by an administrator.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcDSyWbi7bHZco6-ycyeVFpgSqBGy20QP5hd0159aM3a1_G_yBFMgkuLY&s=10",
              "sort_order": 13,
              "category_id": 110
            },
            {
              "id": 402,
              "section_id": 22,
              "name": "Suspended",
              "definition": "A port put into a suspended state immediately upon activation due to a configuration mismatch (such as mismatched LACP/EtherChannel settings on either end).",
              "image_url": "https://www.gabriellawteam.com/wp-content/uploads/2019/06/suspended-license.jpg",
              "sort_order": 14,
              "category_id": 110
            },
            {
              "id": 403,
              "section_id": 22,
              "name": "Power Budget Exceeded",
              "definition": "Connecting too many high-draw devices (such as PTZ cameras or access points) to a switch that exceeds its total wattage capacity.",
              "image_url": "https://statics.mylandingpages.co/static/aaapycm22qmuab44/image/aa1aa168507049f496a0039819ab41c3.webp",
              "sort_order": 15,
              "category_id": 112
            },
            {
              "id": 404,
              "section_id": 22,
              "name": "Incorrect Standard",
              "definition": "Mismatch between equipment standards—for example, attempting to power a PoE++ (Type 3/4) device using a lower-spec PoE+ switch.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJrCs-WFZKqPmMoPy_hSh6PlO92tAGFIZeLuXZFW0YLLonZuadyGa6GPY&s=10",
              "sort_order": 16,
              "category_id": 112
            },
            {
              "id": 405,
              "section_id": 22,
              "name": "Mismatch",
              "definition": "Using incompatible modular transceivers (e.g., mixing up 850nm and 1310nm wavelengths) across a fiber link, causing immediate signal loss and incrementing error counters.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB2KAlOmeUAw-8nF9xwalD5suVbqlnpaV8Sq2toYvDs0wa0bGDXGuMj9o&s=10",
              "sort_order": 17,
              "category_id": 113
            },
            {
              "id": 406,
              "section_id": 22,
              "name": "Signal Strength / Power Budget",
              "definition": "Failing to calculate total link loss (attenuation across media length, splices, and connectors) against the receiver sensitivity threshold of the transceiver (measured in dBm), resulting in dropped packets or total signal loss.",
              "image_url": "https://gablmedia.com/wp-content/uploads/2023/05/POE-power-budget-planning-1.jpeg",
              "sort_order": 18,
              "category_id": 113
            }
          ]
        },
        {
          "id": 23,
          "chapter_id": 5,
          "code": "5.3",
          "title": "Network Service Issues",
          "summary": "Given a scenario, troubleshoot common issues with network services.",
          "sort_order": 2,
          "categories": [
            {
              "id": 114,
              "section_id": 23,
              "name": "Switching Issues",
              "summary": "",
              "sort_order": 0,
              "parent_id": null
            },
            {
              "id": 115,
              "section_id": 23,
              "name": "STP (Spanning Tree Protocol)",
              "summary": "",
              "sort_order": 0,
              "parent_id": 114
            },
            {
              "id": 116,
              "section_id": 23,
              "name": "other",
              "summary": "",
              "sort_order": 1,
              "parent_id": 114
            },
            {
              "id": 117,
              "section_id": 23,
              "name": "Route Selection",
              "summary": "",
              "sort_order": 1,
              "parent_id": null
            },
            {
              "id": 118,
              "section_id": 23,
              "name": "Address Pool Exhaustion",
              "summary": "",
              "sort_order": 2,
              "parent_id": null
            },
            {
              "id": 119,
              "section_id": 23,
              "name": "Incorrect Default Gateway, IP Address, & Subnet Mask",
              "summary": "",
              "sort_order": 3,
              "parent_id": null
            }
          ],
          "terms": [
            {
              "id": 407,
              "section_id": 23,
              "name": "Network loops",
              "definition": "Without STP, broadcast and multicast frames circle endlessly around redundant switch connections until devices are overwhelmed and the network halts. STP uses Bridge Protocol Data Units (BPDUs) sent every two seconds to detect topology changes and prevent loops.",
              "image_url": "https://quogroup.com.au/wp-content/uploads/2025/09/network-look-in-router.png",
              "sort_order": 0,
              "category_id": 115
            },
            {
              "id": 408,
              "section_id": 23,
              "name": "Root bridge selection",
              "definition": "When a network starts, bridges participate in an election and choose the root bridge based on the lowest bridge ID (between 0 and 61,440) or the lowest MAC address if IDs are identical. All other switches configure their settings to communicate back to this root bridge.",
              "image_url": "https://www.networkacademy.io/sites/default/files/inline-images/root-bridge-election-process-step-1.svg",
              "sort_order": 1,
              "category_id": 115
            },
            {
              "id": 409,
              "section_id": 23,
              "name": "Port roles",
              "definition": "witches establish designated ports (active paths), root ports (the path back to the root bridge), and blocked ports to prevent loops.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9dWlGmSKa15pnvK5HOBTBSs1xrpNjxRPI3m1kjwVrlKO-bYiR79lTxhjY&s=10",
              "sort_order": 2,
              "category_id": 115
            },
            {
              "id": 410,
              "section_id": 23,
              "name": "Port states:",
              "definition": "Interfaces transition through blocking/discarding, listening (listening for other switches), learning (adding info to the MAC table), forwarding, or disabled modes.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9dWlGmSKa15pnvK5HOBTBSs1xrpNjxRPI3m1kjwVrlKO-bYiR79lTxhjY&s=10",
              "sort_order": 3,
              "category_id": 115
            },
            {
              "id": 411,
              "section_id": 23,
              "name": "Incorrect VLAN assignment",
              "definition": "If a device receives an IP address but cannot communicate with other devices on the same network, verify that the physical switch interface is assigned to the correct VLAN ID (such as an access port).",
              "image_url": "https://www.omnitron-systems.com/images/easyblog_articles/27/b2ap3_large_What-is-a-VLAN-Virtual-LAN-and-how-does-it-work.jpg",
              "sort_order": 4,
              "category_id": 116
            },
            {
              "id": 412,
              "section_id": 23,
              "name": "ACLs (Access Control Lists)",
              "definition": "If switch and router configurations appear correct but packets are dropped, check for ACLs configured along the path. ACLs evaluate rules from top to bottom and enforce an implicit deny for unmatched traffic.",
              "image_url": "https://cdn.prod.website-files.com/6a020fca21245d64af2c19d8/6a020fca21245d64af2c3384_ACL.jpg",
              "sort_order": 5,
              "category_id": 116
            },
            {
              "id": 413,
              "section_id": 23,
              "name": "Routing table",
              "definition": "Routers use routing tables to determine the best next-hop when forwarding traffic. When troubleshooting, check the routing table of every router along the path to ensure valid routes exist for both the destination and the return trip; missing routes result in dropped traffic or an ICMP host unreachable message.",
              "image_url": "https://www.baeldung.com/wp-content/uploads/sites/4/2022/10/Routing-Table.drawio.png",
              "sort_order": 6,
              "category_id": 117
            },
            {
              "id": 414,
              "section_id": 23,
              "name": "Default routes (Gateway of last resort)",
              "definition": "A static route configured as 0.0.0.0/0 that acts as a fallback when no other specific route matches a packet's destination in the routing table.",
              "image_url": "https://www.certificationkits.com/assets/images/stories/cisco-ccna/ch-5-2-ip-routing/cisco-ccna-routing-5.jpg",
              "sort_order": 7,
              "category_id": 117
            },
            {
              "id": 415,
              "section_id": 23,
              "name": "Address Pool Exhaustion",
              "definition": "Occurs when a DHCP server runs out of available IP addresses, causing clients to fall back to an automatic private IP address (APIPA). While APIPA allows local subnet communication, it is non-routable outside the local network.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTzfygCI_FHuYnvD3ZyYQXBze1Z26aYe0hyGkpNJE0p9faz6WfpCWyrhM&s=10",
              "sort_order": 8,
              "category_id": 118
            },
            {
              "id": 416,
              "section_id": 23,
              "name": "Troubleshooting steps",
              "definition": "Check the DHCP server or IPAM (IP Address Management) console to review address pools and availability, add more addresses, or decrease lease times to free up addresses more quickly.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTzfygCI_FHuYnvD3ZyYQXBze1Z26aYe0hyGkpNJE0p9faz6WfpCWyrhM&s=10",
              "sort_order": 9,
              "category_id": 118
            },
            {
              "id": 417,
              "section_id": 23,
              "name": "Incorrect parameters",
              "definition": "Devices may receive incorrect IP addresses, subnet masks, or default gateways. Confirm parameters with the network administrator, review packet captures, inspect configuration values on other local devices, or troubleshoot step-by-step using ping and traceroute (pinging your local address, then the default gateway, and finally an address beyond it).",
              "image_url": "https://help.pandorarecovery.com/wp-content/uploads/2023/10/the-parameter-is-incorrect.jpg",
              "sort_order": 10,
              "category_id": 119
            },
            {
              "id": 418,
              "section_id": 23,
              "name": "Duplicate IP address",
              "definition": "Arises when a device is manually configured with an IP address that belongs to an active DHCP pool, or when multiple DHCP servers have overlapping pools. Modern operating systems display an error upon discovering a duplicate.",
              "image_url": "https://www.bigstarcopywriting.com/wp-content/uploads/2024/05/5-1024x658.jpg",
              "sort_order": 11,
              "category_id": 119
            },
            {
              "id": 419,
              "section_id": 23,
              "name": "Troubleshooting a duplicate",
              "definition": "Test pinging the IP address before configuring it statically. If you receive a response, ping the address and check the local ARP table to find its MAC address, then check the switch MAC address table to locate the specific port the device is plugged into. If caused by overlapping DHCP servers, perform a packet capture to inspect what DHCP offers are being transmitted.",
              "image_url": "https://www.bigstarcopywriting.com/wp-content/uploads/2024/05/5-1024x658.jpg",
              "sort_order": 12,
              "category_id": 119
            }
          ]
        },
        {
          "id": 24,
          "chapter_id": 5,
          "code": "5.4",
          "title": "Performance Issues",
          "summary": "Given a scenario, troubleshoot common performance issues.",
          "sort_order": 3,
          "categories": [
            {
              "id": 120,
              "section_id": 24,
              "name": "General Network Performance Issues & Metrics",
              "summary": "",
              "sort_order": 0,
              "parent_id": null
            },
            {
              "id": 121,
              "section_id": 24,
              "name": "Wireless Performance & Troubleshooting",
              "summary": "",
              "sort_order": 1,
              "parent_id": null
            }
          ],
          "terms": [
            {
              "id": 420,
              "section_id": 24,
              "name": "Congestion and Contention",
              "definition": "Occurs when multiple data streams attempt to exceed a link's predefined maximum capacity (e.g., multiple gigabit links flooding a single destination link). This fills switch and router buffers, leading to packet discards and data loss. Resolved by increasing network speed/capacity or reducing traffic volume.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAArgoeDQD4QhcmjgMIZBwdQOERmB1KCeN5XgLeaSAYw&s=10",
              "sort_order": 0,
              "category_id": 120
            },
            {
              "id": 421,
              "section_id": 24,
              "name": "Bottlenecking",
              "definition": "A slowdown caused by a restrictive system component—such as switch/router CPU speeds, storage drive performance (HDDs vs. SSDs), or slower network segments. Troubleshooting requires drilling down into specific resource usage and transaction response times (e.g., isolating database delays).",
              "image_url": "https://obkio.com/blog/how-to-identify-network-bottlenecks/how-to-identify-network-bottlnecks-1.jpeg",
              "sort_order": 1,
              "category_id": 120
            },
            {
              "id": 422,
              "section_id": 24,
              "name": "Bandwidth vs. Throughput Capacity",
              "definition": "Bandwidth measures the predefined maximum speed or percentage of network usage over time, while throughput measures the actual volume of data successfully moved across the network in a given timeframe. The slowest link in a network path dictates throughput for the entire connection.",
              "image_url": "https://backblaze.com/blog/wp-content/uploads/2024/04/Bandwidth-vs-Throughput_1_Diagram.png",
              "sort_order": 2,
              "category_id": 120
            },
            {
              "id": 423,
              "section_id": 24,
              "name": "Latency",
              "definition": "The delay between a request and a response as data traverses network devices. True latency is measured with microsecond granularity using packet capture tools at every stop along a link.",
              "image_url": "https://www.keycdn.com/img/support/network-latency.png",
              "sort_order": 3,
              "category_id": 120
            },
            {
              "id": 424,
              "section_id": 24,
              "name": "Packet Loss",
              "definition": "Occurs when packets fail to reach their destination due to network outages, bandwidth contention, or data corruption (where corrupted frames are identified by checksum errors and discarded). Packet loss forces retransmissions, creating significant application delays.",
              "image_url": "https://cloudcall.com/wp-content/uploads/2025/02/700x450-5-1024x787.jpg",
              "sort_order": 4,
              "category_id": 120
            },
            {
              "id": 425,
              "section_id": 24,
              "name": "Jitter",
              "definition": "The variability in arrival time between packets. High jitter severely impacts real-time communication like VoIP calls or live video streams, causing audio stutters, clicks, or video freezing.",
              "image_url": "https://miro.medium.com/v2/resize:fit:1120/0*83UeXnnyMWz5muV9.jpg",
              "sort_order": 5,
              "category_id": 120
            },
            {
              "id": 426,
              "section_id": 24,
              "name": "Interference and Channel Overlap",
              "definition": "Caused by competing devices or access points sharing crowded frequencies. For example, in the 2.4 GHz spectrum, channels 1, 6, and 11 are non-overlapping; configuring an access point to an intermediate channel (like channel 8) causes overlap with channels 6 and 11, destroying throughput. Mitigation includes shifting to 5 GHz or 6 GHz bands, reducing AP output power, or utilizing automatic frequency selection (DFS).",
              "image_url": "https://www.ekahau.com/wp-content/uploads/2022/04/channel-overlap-2.4-ghz.png",
              "sort_order": 6,
              "category_id": 121
            },
            {
              "id": 427,
              "section_id": 24,
              "name": "Signal Degradation and Loss (Attenuation)",
              "definition": "Signal strength naturally weakens over distance from an access point. Diagnosed using Wi-Fi analyzers and heat maps; resolved by increasing AP power output, adding high-gain external antennas, or shortening coaxial cable runs.",
              "image_url": "https://www.protoexpress.com/blog/wp-content/uploads/2021/06/SIGATTAsset-6.png",
              "sort_order": 7,
              "category_id": 121
            },
            {
              "id": 428,
              "section_id": 24,
              "name": "Insufficient Wireless Coverage",
              "definition": "Gaps in wireless reach across a physical facility. Identified using site surveys and heat maps to locate dead zones and strategically add or reposition access points.",
              "image_url": "https://www.hns-berks.co.uk/uploads/1/1/7/0/117069388/editor/offline-525700-1280.png?1524664850",
              "sort_order": 8,
              "category_id": 121
            },
            {
              "id": 429,
              "section_id": 24,
              "name": "Client Disassociation Issues",
              "definition": "Attackers can exploit unprotected legacy 802.11 management frames to constantly flood disassociation messages, booting clients off the network. Diagnosed via 802.11 packet captures and prevented by upgrading to newer secure 802.11 standards.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIclPVFq05LPQDAAOC_Sweeco8ezsrHmER37rnAYPSBAZLwYiNsp4YLnU&s=10",
              "sort_order": 9,
              "category_id": 121
            },
            {
              "id": 430,
              "section_id": 24,
              "name": "Roaming Misconfiguration",
              "definition": "When multiple access points share an SSID to form a large wireless network, they must share identical configurations. If a roaming user hits an access point with mismatched security or settings, they will be dropped entirely from the network and forced to re-authenticate.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL__qsy0kSEDSnYGUwvFg4Huj61B-UHXPCyczMvZcOTNVGUdCSXb_KFx0&s=10",
              "sort_order": 10,
              "category_id": 121
            }
          ]
        },
        {
          "id": 25,
          "chapter_id": 5,
          "code": "5.5",
          "title": "Tools and Protocols",
          "summary": "Given a scenario, use the appropriate tool or protocol to solve networking issues.",
          "sort_order": 4,
          "categories": [
            {
              "id": 122,
              "section_id": 25,
              "name": "Software Tools",
              "summary": "",
              "sort_order": 0,
              "parent_id": null
            },
            {
              "id": 123,
              "section_id": 25,
              "name": "Hardware Tools",
              "summary": "",
              "sort_order": 1,
              "parent_id": null
            },
            {
              "id": 124,
              "section_id": 25,
              "name": "Basic Networking Device Commands",
              "summary": "",
              "sort_order": 2,
              "parent_id": null
            }
          ],
          "terms": [
            {
              "id": 431,
              "section_id": 25,
              "name": "Protocol Analyzer",
              "definition": "Captures wired or wireless network frames and decodes them into human-readable formats (such as Wireshark or built-in OS capture tools) to isolate performance and communication issues.",
              "image_url": "https://assets.lcry.net/images/summit_m5x_analyzer_side.png",
              "sort_order": 0,
              "category_id": 122
            },
            {
              "id": 432,
              "section_id": 25,
              "name": "ping",
              "definition": "Uses ICMP to test if a remote device is reachable on the network and measures round-trip time.",
              "image_url": "https://www.computerhope.com/cdn/dos/ping-command.gif",
              "sort_order": 1,
              "category_id": 122
            },
            {
              "id": 433,
              "section_id": 25,
              "name": "traceroute / tracert",
              "definition": "Maps the router path between a source and destination by adjusting Time-to-Live (TTL) values and analyzing ICMP TTL-exceeded messages.",
              "image_url": "https://www.bluehost.com/blog/wp-content/uploads/2025/10/Traceroute-Tracert_-What-It-Does-and-How-to-Run-the-Command-1.png",
              "sort_order": 2,
              "category_id": 122
            },
            {
              "id": 434,
              "section_id": 25,
              "name": "nslookup / dig",
              "definition": "Queries DNS servers to resolve hostnames, IP addresses, and records (note: nslookup is deprecated in favor of dig).",
              "image_url": "https://miro.medium.com/1*dvCWz0an-dz6Q0F9JCUxLw.jpeg",
              "sort_order": 3,
              "category_id": 122
            },
            {
              "id": 435,
              "section_id": 25,
              "name": "tcpdump",
              "definition": "Captures packets directly from the command line in Linux/macOS and saves them in standard PCAP format for analysis.",
              "image_url": "https://linuxcapable.com/wp-content/uploads/2026/06/tcpdump-command-in-linux-feature-image.png",
              "sort_order": 4,
              "category_id": 122
            },
            {
              "id": 436,
              "section_id": 25,
              "name": "netstat",
              "definition": "Displays active network connections, ports, routing tables, and associated executables (using flags like -a, -b, or -n).",
              "image_url": "https://techdirectarchive.com/wp-content/uploads/2021/03/Netstat.jpg",
              "sort_order": 5,
              "category_id": 122
            },
            {
              "id": 437,
              "section_id": 25,
              "name": "ip / ifconfig / ipconfig",
              "definition": "Checks local IP address configurations, subnet masks, default gateways, and physical adapter details across Windows, Linux, and macOS.",
              "image_url": "https://cdn.iplocation.net/assets/images/blog/featured/ipconfig.jpg",
              "sort_order": 6,
              "category_id": 122
            },
            {
              "id": 438,
              "section_id": 25,
              "name": "arp",
              "definition": "Uses arp -a to view the local operating system's ARP cache containing IP-to-MAC address mappings.",
              "image_url": "https://www.computerhope.com/cdn/linux/arp.gif",
              "sort_order": 7,
              "category_id": 122
            },
            {
              "id": 439,
              "section_id": 25,
              "name": "Nmap (Network Mapper)",
              "definition": "An active scanning tool used to discover active hosts, open ports, operating systems, and running application services across a network.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjoKfAaEq7i61jIsw6QFOfujZg2iZCp_8Tad2xK9eVHeBI53joefyEC7M&s=10",
              "sort_order": 8,
              "category_id": 122
            },
            {
              "id": 440,
              "section_id": 25,
              "name": "Link Layer Discovery Protocol (LLDP) / Cisco Discovery Protocol (CDP)",
              "definition": "Protocols used to automatically gather switch configuration details, native VLANs, and port information without needing to log directly into the device (LLDP is vendor-neutral, while CDP is proprietary to Cisco).",
              "image_url": "https://images.ctfassets.net/aoyx73g9h2pg/2OmvCnaVHsliSh3aiAbie9/54890665a2bb3b46f1f8457ebf88ca27/What-is-LLDP-Protocol-Diagram.jpg",
              "sort_order": 9,
              "category_id": 122
            },
            {
              "id": 441,
              "section_id": 25,
              "name": "Speed Tester",
              "definition": "Measures available upload and download bandwidth across internet links before and after making configuration updates.",
              "image_url": "https://www.lifewire.com/thmb/8yo0YsYWVIT1-U25jwT9XK5kNko=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/speed-test-580e7a2b5f9b58564ce47143.png",
              "sort_order": 10,
              "category_id": 122
            },
            {
              "id": 442,
              "section_id": 25,
              "name": "Toner and Inductive Probe",
              "definition": "A tone generator places an analog tone onto a copper wire, allowing an inductive probe to audibly track and locate a specific cable within a large bundle.",
              "image_url": "https://m.media-amazon.com/images/I/71EvaLlXumL.jpg",
              "sort_order": 11,
              "category_id": 123
            },
            {
              "id": 443,
              "section_id": 25,
              "name": "Cable Tester",
              "definition": "Performs basic continuity tests to verify that pins map correctly from end to end and identifies shorts or crossed wires.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF0Y7yMxh7ifd5mAVpuOjoLrXQRhsetkKVov9m6LnpzsbWAZz7hXM7u8Wi&s=10",
              "sort_order": 12,
              "category_id": 123
            },
            {
              "id": 444,
              "section_id": 25,
              "name": "Taps",
              "definition": "Intercepts network traffic physically (passive/active hardware taps) or logically (via switch port mirroring / SPAN) to copy traffic to a protocol analyzer.",
              "image_url": "https://ipwithease.com/wp-content/uploads/2014/06/NETWORK-TAP.jpg.webp",
              "sort_order": 13,
              "category_id": 123
            },
            {
              "id": 445,
              "section_id": 25,
              "name": "Wi-Fi Analyzer / Spectrum Analyzer",
              "definition": "Surveys wireless coverage, channel strengths, signal-to-noise ratios, and third-party interference across wireless frequencies.",
              "image_url": "https://dmbqjg4u3rv3k.cloudfront.net/images/laptops/windows-laptop-touchstone-plus-device-815x475.png",
              "sort_order": 14,
              "category_id": 123
            },
            {
              "id": 446,
              "section_id": 25,
              "name": "Visual Fault Locator",
              "definition": "A specialized laser \"flashlight\" used to visually spot breaks or high-stress bends in fiber optic cables where light leaks out.",
              "image_url": "https://resource.fs.com/mall/Visual-Fault-Locators/800x800/20220527110918_157_35388.jpg",
              "sort_order": 15,
              "category_id": 123
            },
            {
              "id": 447,
              "section_id": 25,
              "name": "show mac-address-table",
              "definition": "Lists learned MAC addresses and their corresponding switch ports to troubleshoot forwarding or table capacity issues.",
              "image_url": "https://jcutrer.com/wp-content/uploads/2019/10/show-mac-address-table-1038x576.jpg.webp",
              "sort_order": 16,
              "category_id": 124
            },
            {
              "id": 448,
              "section_id": 25,
              "name": "show route",
              "definition": "Displays the routing table entries and next-hops on a router to verify path selections.",
              "image_url": "https://www.networkstraining.com/wp-content/uploads/2018/09/Show-IP-Route-Command.jpg",
              "sort_order": 17,
              "category_id": 124
            },
            {
              "id": 449,
              "section_id": 25,
              "name": "show interface",
              "definition": "Checks interface operational status (up/down), speed, duplex settings, and error counters (such as CRC errors, drops, and input/output errors).",
              "image_url": "https://www.networkstraining.com/wp-content/uploads/2020/06/Show-Interface-Command-on-Cisco-Routers_Switches.png",
              "sort_order": 18,
              "category_id": 124
            },
            {
              "id": 450,
              "section_id": 25,
              "name": "show config",
              "definition": "Views the active running configuration or stored configuration file of a networking device.",
              "image_url": "https://i.postimg.cc/jjG0dBQq/37c0df18-eb0c-4fc5-b1ce-43bdf1e8d89b.jpg",
              "sort_order": 19,
              "category_id": 124
            },
            {
              "id": 451,
              "section_id": 25,
              "name": "show arp",
              "definition": "Views the ARP table loaded inside a switch or router to verify IP-to-hardware MAC address bindings.",
              "image_url": "https://community.cisco.com/t5/image/serverpage/image-id/88407iBC5456F26ADD63FD?v=v2",
              "sort_order": 20,
              "category_id": 124
            },
            {
              "id": 452,
              "section_id": 25,
              "name": "show vlan",
              "definition": "Lists configured VLANs and identifies which switch interfaces have been assigned to each VLAN.",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsi5NsfU7IoCaqDCewVOzkF8Bj7Vd74UJNeaF4RKslXZKFu7dB1Z-3D_be&s=10",
              "sort_order": 21,
              "category_id": 124
            },
            {
              "id": 453,
              "section_id": 25,
              "name": "show power",
              "definition": "Monitors Power over Ethernet (PoE) status, total wattage budget, and remaining power availability across switch interfaces.",
              "image_url": "https://images.squarespace-cdn.com/content/v1/5d38a6a24af5650001b6f7bb/ee6ebd96-39fe-4771-b0fb-95520de36597/show-power-inline-9210axi-30watt.PNG",
              "sort_order": 22,
              "category_id": 124
            }
          ]
        }
      ]
    }
  ]
}
