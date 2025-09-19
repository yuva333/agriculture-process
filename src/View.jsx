// App.jsx
import React, { useState, useEffect } from "react";


import groundnut from "./assets/groundnut.jpg";
import carrot from "./assets/carrot.jpg";
import potato from "./assets/potato.jpg";
import watermelon from "./assets/watermelon.jpg";
import garlic from "./assets/garlic.jpg";
import onion from "./assets/onion.jpg";
import cucumber from "./assets/cucumber.jpg";
import sweet from "./assets/sweet potato.jpg";
import muskmelon from "./assets/muskmelon.jpg";

import paddy from "./assets/paddy.jpg";
import wheat from "./assets/wheat.jpg";
import sugarcane from "./assets/sugercane.jpg";
import cotton from "./assets/cotton.jpg";
import pulse from "./assets/pulse.jpg";
import guava from "./assets/guava.jpg";
import banana from "./assets/banana.jpg";
import chilli from "./assets/chilli.jpg";
import tomato from "./assets/tomato.jpg";

import brinjal from "./assets/brinjal.jpg";
import rice from "./assets/rice.jpg";
import lotus from "./assets/lotus.jpg";

import cholam from "./assets/cholam.jpg";
import bajra from "./assets/kambu.jpg";
import oilseeds from "./assets/oilseeds.jpg";
import citrus from "./assets/citrus.jpg";
import graps from "./assets/graps.jpg";

import ragi from "./assets/ragi.jpg";
import pomagranet from "./assets/pomagranet.jpg";
import mango from "./assets/mango.jpg";

import soybean from "./assets/soyaben.jpg";
import mustard from "./assets/mustard.jpg";
import spinach from "./assets/spinach.jpg";
import ladysfinger from "./assets/ladiesfinger.jpg";
import cabbage from "./assets/cabage.jpg"
import pea from "./assets/peas.jpg";

import sandy from "./assets/sandy soil.jpg";
import silty from "./assets/silty soil.jpg";
import loamy from "./assets/loamy soil.jpg";
import red from "./assets/red soil.jpg";
import clay from "./assets/clay soil.jpg";
import black from "./assets/black soil.jpg";

const View = () => {
    const soilData = [
        {
            id: 1,
            name: "Sandy Soil",
            //   background: sandy,
            images: [
                { url: groundnut, title: "Groundnut", description: "Groundnut grows best in sandy or sandy-loam soil because the loose soil allows the pods to develop underground. The land is first ploughed 2–3 times using a tractor and cultivator to get a fine tilth. Gypsum and farmyard manure are added before sowing. Seeds are sown in rows with the help of a seed drill or dibbler. Irrigation is needed every 12–15 days, but the crop should never be waterlogged. Weeding and earthing up are done at regular intervals. Harvesting takes place after 100–120 days, when the leaves turn yellow and start drying. In modern farms, a groundnut digger or tractor-mounted harvester is used to lift pods from the soil, whereas small farmers harvest manually.Groundnut grows well in sandy soil because it needs loose soil for the pods to develop underground. Farmers usually plough the sandy land with a disc plough or cultivator to loosen the soil. Sowing is done using a seed drill. For irrigation, drip irrigation is best because sandy soil drains water quickly. At harvest, farmers use groundnut diggers and threshers to separate pods." },
                { url: carrot, title: "Carrot", description: "Carrots require light, sandy soil so the roots can penetrate deep and grow straight. The field is ploughed deeply with a rotavator to achieve a fine tilth. Seeds are directly sown in shallow furrows using a seed drill. Irrigation is provided weekly with a sprinkler or drip system, as carrots need even moisture. Fertilizers like superphosphate are added to encourage root development. The crop is ready in 90–110 days. Harvesting is mostly manual in India, but in large farms carrot harvesters are used.Carrots grow straight and long in sandy soil as it is soft and loose. Land preparation requires deep ploughing with a cultivator. Seeds are sown using a seed drill. Carrots need frequent light irrigation because sandy soil dries quickly. Harvesting is done manually or with carrot harvesters that gently lift the roots." },
                { url: potato, title: "Potato", description: "Potato prefers sandy soil because it prevents water stagnation and gives tubers enough space to grow. After ploughing, ridges are made with a ridge maker and seed tubers are planted at regular spacing. A potato planter is often used for large-scale sowing. The crop needs irrigation every 8–12 days, and fertilizers like urea and potash are applied for better yield. Earthing up is done once plants reach 20 cm height, which helps tuber growth. Harvesting is done after 90–120 days, using a potato digger or combine harvester. In India, potatoes are usually grown as a rabi crop (winter season).Potatoes need well-drained sandy loam soil. The field is prepared with rotavators to break the soil fine. Potatoes are planted using potato planters which drop seed tubers in rows. Since sandy soil loses water, sprinkler irrigation or drip systems are used. Harvesting is done by potato diggers or harvesters which lift the tubers without damage." },
                { url: watermelon, title: "Watermelon", description: "Watermelon prefers sandy soil because it warms quickly and drains well. The land is ploughed and raised beds are prepared with a bed former. Seeds are sown directly in pits or rows. Drip irrigation is best, as it saves water and reduces disease. Fertilizers rich in potash improve fruit quality. Pollination is important, so beehives are often kept nearby. The fruits are ready in 70–90 days, harvested manually when they give a hollow sound on tapping.Watermelon thrives in sandy soil because of good aeration and drainage. Fields are ploughed and prepared with tractor-drawn cultivators. Seeds are sown directly in pits. Drip irrigation with mulch films is common to save water. Harvesting is manual, but grading and sorting are done with machines." },
                { url: garlic, title: "Garlic", description: "Garlic thrives in sandy soil that drains well. Instead of seeds, individual cloves are planted directly in rows. A garlic planter is used in modern farming, while small farmers plant by hand. The crop requires irrigation every 8–10 days. Fertilizers like potash and farmyard manure improve yield. Garlic is ready in 5–6 months, and harvesting is done when the leaves turn yellow and dry. A garlic harvester is used in mechanized farms. After harvesting, bulbs are cured (dried) before storage.Garlic needs loose sandy soil for cloves to expand. The land is tilled with cultivators, and cloves are planted manually or by garlic planters. Proper irrigation is required at intervals since sandy soil dries fast. For harvest, garlic diggers are used, followed by drying and cleaning machines." },
                { url: onion, title: "Onion", description: "Onion grows well in sandy loam soil with good drainage. First, seeds are sown in a small nursery and raised for about 40–45 days. Then the seedlings are transplanted into the main field with proper spacing. In commercial farms, onion transplanters are used, though manual transplanting is still common. Irrigation is required every 7–10 days. Fertilizers such as nitrogen, phosphorus, and potash are applied. The crop matures in 100–120 days. Harvesting is done when the tops fall and dry. An onion digger or harvester can be used to lift bulbs, but in small farms, they are pulled by hand.Onions prefer sandy loam soil for better bulb formation. Fields are ploughed and made into raised beds. Onion sets or seedlings are transplanted by hand or with onion transplanters. Irrigation is usually furrow irrigation or drip irrigation. Harvesting uses onion lifters and toppers to remove bulbs and cut leaves." },
                { url: cucumber, title: "Cucumber", description: "Cucumber grows quickly in sandy soil. Seeds are sown directly into pits or rows, often using a seed drill. Drip irrigation is provided for uniform moisture. Vines are trained using bamboo stakes or trellises. Harvesting starts within 50–70 days, and fruits are picked continuously. Mechanization is low for cucumbers; most harvesting is done by hand.Cucumbers grow fast in sandy soil with proper water supply. Seeds are sown directly using seed drills. Farmers use trellis systems for better growth. Drip irrigation helps maintain moisture. Harvest is manual, but cucumbers are packed using sorting and grading machines." },
                { url: sweet, title: "sweetpotato", description: "Sweet potato grows very well in sandy soil. Instead of seeds, stem cuttings called slips are used. These are planted on ridges formed by a ridge maker. Drip irrigation is applied every 8–10 days. Fertilizers like potash improve root development. The crop is harvested in 90–120 days using a potato digger. Sweet potato is rich in starch and is grown both for food and industrial use.Sweet potato grows well in sandy soil where roots expand easily. Vines are planted manually or with sweet potato transplanters. Drip irrigation is used for water supply. Harvesting requires sweet potato diggers or lifters to avoid damage." },
                { url: muskmelon, title: "muskmelon", description: "Muskmelon, like watermelon, grows best in sandy soils under warm climate. Seeds are sown in raised beds. Fertilizers rich in phosphorus and potash help fruit sweetness. Drip irrigation ensures steady growth. The fruits mature in 70–80 days. Harvesting is manual, as the fruit is delicate. Muskmelon farming is common in summer.Muskmelon needs sandy soil for quick root development. Fields are tilled and seeds are sown in rows. Farmers use drip irrigation with mulching sheets to retain soil moisture. Harvesting is manual when fruits mature, and post-harvest handling uses grading conveyors." },
            ],
        },
        {
            id: 2,
            name: "Loamy Soil",
            // background: loamy,
            images: [
                { url: wheat, title: "Wheat", description: "Wheat grows best in well-drained loamy soil under cool conditions. It is a rabi crop, sown in winter and harvested in summer. Farmers prepare the land with tractors and use a seed drill to sow wheat seeds evenly. Irrigation is provided at intervals using tube wells or pump sets. Once the crop matures, combine harvesters are used to cut and thresh the wheat. In smaller farms, sickles and threshers are common. Wheat is one of the main cereal crops of India after rice." },
                { url: sugarcane, title: "sugarcane", description: "Sugarcane is a tropical crop that prefers deep loamy or black soils. It is propagated using stem cuttings known as “setts.” The soil is prepared by deep ploughing with tractors, followed by furrow openers. Farmers often use sugarcane planters for large-scale sowing. Since sugarcane is a long-duration crop (12–18 months), it requires continuous irrigation, often supplied through drip irrigation systems. Sprayers are used for pest and weed control. Mechanical sugarcane harvesters are used in large farms, while in traditional farming, laborers cut the cane manually with machetes." },
                { url: cotton, title: "cotton", description: "Cotton thrives in black soil but also grows well in loamy soil. It is a warm-season crop and requires 6–8 months to mature. Farmers sow cotton seeds with seed drills, and tractors prepare the fields. Pest management is very important for cotton, so farmers frequently use sprayers. Harvesting can be done with machines like cotton pickers in advanced farms, though in India much of the harvesting is still manual. Cotton is crucial for the textile industry and is known as “white gold.”" },
                { url: chilli, title: "chilli", description: "Chillies prefer well-drained loamy soil in warm climates. Seedlings are raised in nurseries and transplanted into the field. Farmers prepare the land with tractors and provide irrigation through furrows or drip systems. Pesticide sprayers are essential because chilli is prone to pest attacks. Harvesting is done by hand-picking the red chillies at maturity. Chillies are used fresh, dried, or powdered, making them an important cash crop." },
                { url: pulse, title: "pulses", description: "Pulses such as pigeon pea (toor dal), green gram, black gram, and lentils grow well in loamy soil. They require less water compared to cereals, and they enrich the soil by fixing nitrogen through root nodules. Farmers prepare the soil with tractors or power tillers, then use a seed drill for sowing. Since pulses mature quickly (2–4 months), they are often used as intercrops. Harvesting is done using threshers or manually. Pulses are vital for providing protein in the Indian diet." },
                { url: paddy, title: "paddy", description: "Loamy soil mixed with clay is excellent for paddy cultivation because it can retain water for a long time. Paddy requires a warm and humid climate with standing water during most of its growing period. Farmers usually plough the field using a tractor or power tiller, level it, and then flood it with water. Seedlings are raised in a nursery and later transplanted using a rice transplanter. Throughout the season, irrigation pumps maintain water levels, and fertilizers are applied. At harvest, large farms use a combine harvester to cut, thresh, and clean the rice, while small farmers often cut manually." },
                { url: banana, title: "Banana", description: "Banana grows well in alluvial or loamy soils with high fertility. Farmers plant tissue culture plants or suckers in well-prepared pits. Irrigation is critical, and drip irrigation is commonly used. Mulching films are used to retain moisture. Bananas require staking or propping to prevent plants from falling. Harvesting is manual, with bunches cut down using knives. Bananas are available year-round and form an essential fruit crop in India." },
                { url: guava, title: "Guava", description: "Guava adapts to a wide range of soils but grows best in sandy loam or clay loam. It is hardy, requires little water, and fruits in 3–4 years. Farmers prepare orchards using tractors, plant saplings, and irrigate occasionally with drip systems. Pesticide sprayers help control pests like fruit flies. Harvesting is manual, with guavas picked by hand. Guava is rich in Vitamin C and is grown widely for fresh eating and processing into juices and jams." },
                { url: tomato, title: "Tomato", description: "Tomatoes require fertile loamy soil with good organic matter. Farmers usually start tomatoes in a nursery and then transplant the seedlings to the main field. Power tillers or small tractors are used to prepare the field, and mulching machines help control weeds. Irrigation is frequent, and drip irrigation is commonly used. Sprayers are essential for pest and disease management. Harvesting is usually done by hand because tomatoes are delicate. Tomatoes are widely used for fresh consumption and processing (sauces, ketchup)." },
            ],
        },
        {
            id: 3,
            name: "Clay Soil",
            // background: clay,
            images: [
                { url: rice, title: "Rice", description: "Rice is the main crop of clay soil because paddy fields must remain water-logged for long durations. Clay soil’s water retention helps maintain 3–5 inches of standing water. Farmers first prepare nurseries where paddy seedlings grow for 25–30 days, then use a paddy transplanter or hand transplantation into puddled fields. Irrigation canals or tube wells supply continuous water. Fertilizers like urea and DAP are added. At maturity, combine harvesters or sickles are used for harvesting. Rice straw is left behind for fodder or compost." },
                { url: tomato, title: "Tomato", description: "Tomatoes need fertile soil and good irrigation, both provided by clay soils. Farmers start with nurseries, then transplant seedlings using mechanical or hand transplanters. Drip irrigation and mulching are used to maintain soil moisture and prevent diseases. Sprayers are used for pesticides. Harvesting is done in multiple pickings as fruits ripen. Clay soil’s nutrient-holding capacity helps tomatoes give high yields if managed well." },
                { url: chilli, title: "Chilli", description: "Chillies are another profitable crop on clay soil. They need rich soil, moderate irrigation, and good drainage. After nursery raising, seedlings are transplanted in the field. Irrigation is done every 7–10 days. Sprayers and drip systems are common. Chillies are mostly hand-harvested because the fruits are delicate. Dried red chillies are then sold in markets. Clayey soil nutrients help the plant produce more fruits with good pungency." },
                { url: lotus, title: "Lotus", description: "Lotus is unique because it grows in ponds and water bodies with muddy clay soil at the bottom. The tubers are planted in shallow ponds and left to grow. The broad leaves float on water, and flowers bloom above. Harvesting of flowers and tubers is fully manual, as machines cannot work in ponds. Clayey soil provides a strong anchor for roots and continuous nutrients from decayed organic matter in water. Lotus is sold as flowers, tubers (thamarai kizhangu), and seeds (மக்காணி)." },
                { url: brinjal, title: "Brinjal", description: "Brinjal is hardy but grows best in fertile clay soils with irrigation. Seeds are raised in beds, and seedlings are transplanted in rows. Weeding and pest control are essential, usually done using tractors with cultivators and knapsack sprayers. Brinjals are harvested by hand in multiple stages. Clay soil provides the strong root support needed for the heavy fruits." },
                { url: pulse, title: "Lentils", description: "Clayey soil enriched with organic matter is suitable for pulses like toor dal (thuvaram paruppu), urad dal (ulundhu), moong dal. These crops do not require heavy irrigation but benefit from the natural moisture of clayey soil. Farmers sow lentil seeds using seed drills after rice harvest. These legumes also fix nitrogen in the soil, making it richer for the next crop. Harvesting is done manually or with reapers, and threshing is performed using small threshers." },

            ],
        },
        {
            id: 4,
            name: "Black Soil",
            // background: black,
            images: [
                { url: cotton, title: "Cotton", description: "Cotton is the most important crop of black soil, which is why this soil is also called Cotton Soil. It grows well in hot climates with moderate rainfall. Farmers sow cotton seeds in rows using a seed drill or tractor, usually in May–June. Cotton requires 6–8 months to mature. During growth, sprayers are used to apply pesticides to protect from bollworm pests. For harvesting, big farms use cotton pickers/harvesters, while small farms use manual picking. After harvesting, the raw cotton is taken to a ginning machine where the cotton fibre is separated from seeds. Cotton fibre is used in textiles, while cottonseed is used for oil and animal feed." },
                { url: cholam, title: "Jowar", description: "Jowar is a drought-tolerant cereal crop suited for black soil and sandy loam soils. It is usually sown at the start of the monsoon using a seed drill. This crop matures in about 4 months. Farmers mostly depend on rainwater; very little irrigation is needed. For harvesting, combine harvesters or thresher machines are used to separate grains from stalks. Jowar is a staple food in rural areas and also used for cattle fodder." },
                { url: bajra, title: "Bajra", description: "Bajra (Pearl millet) grows well in dry, sandy, and black soils. Seeds are directly sown in the rainy season (June–July). It needs less water and grows within 3–4 months. Farmers use tractors with seed drills for sowing and thresher machines for post-harvest. Bajra is an important millet rich in fibre, used to make rotis and porridge, and is also excellent cattle feed." },
                { url: wheat, title: "Wheat", description: "Wheat prefers black and alluvial soils. It is a winter crop (Rabi season), sown in November–December. Farmers use tractors and seed drills for sowing. It needs irrigation in intervals, which is done using pumps and canal systems. Wheat grows in cool climates but needs warm, dry weather for ripening. Harvesting is done with a combine harvester that cuts, threshes, and cleans the grain in one go. Wheat is the main source of flour for chapati, bread, biscuits, and other foods." },
                { url: sugarcane, title: "Sugarcane", description: "Sugarcane thrives in black and alluvial soils with plenty of water. Instead of seeds, farmers use stem cuttings (setts) for planting. It requires 10–12 months to mature. Heavy irrigation is done using canal systems, tube wells, or drip irrigation. For large fields, sugarcane planters and harvesters are used. In India, many farmers still harvest manually with a sickle. After harvesting, cane is crushed in sugar mills to produce sugar, jaggery, and ethanol. Sugarcane is one of the most important cash crops in black soil regions." },
                { url: oilseeds, title: "Oilseeda", description: "Black soil is also suitable for many oilseed crops. Groundnut is grown in sandy and black soils, where pods form underground. Farmers use diggers and lifters to pull them out. Sunflower grows in 100–120 days; the seeds are harvested using a sunflower harvester. Castor grows in dry climates, usually harvested manually. After collection, seeds are taken to an oil expeller machine to extract oil. These oils are used for cooking, soaps, paints, and medicines." },
                { url: pulse, title: "Pulses", description: "Black soil supports pulses like tur/arhar, urad, moong, gram. Pulses are short-duration crops (2–4 months). They enrich the soil with nitrogen through root bacteria, improving fertility. Farmers use seed drills for sowing, threshers for separating grains, and winnowers for cleaning. Pulses are rich in protein, making them an essential part of the diet" },
                { url: citrus, title: "Citrus Fruits", description: "Citrus fruits like oranges and lemons grow well in black and loamy soils. Farmers usually plant grafted saplings in pits. They need regular irrigation and fertilizers. Drip irrigation systems are commonly used in orchards. Sprayers protect trees from pests. Harvesting is done using fruit pluckers or scissors to avoid fruit damage. Citrus fruits are rich in Vitamin C and are exported worldwide." },
                { url: graps, title: "Grapes", description: "Grapes grow best in black and sandy-loam soils with good drainage. Farmers plant saplings on trellises (wire supports) and prune them regularly for better yield. Grapes need drip irrigation and protection from fungal diseases using sprayers. Harvesting is done carefully by hand to avoid crushing. In some farms, cold storage units are used to preserve grapes before export. Grapes are eaten fresh, used in juices, wines, and raisins." },
            ],
        },
        {
            id: 5,
            name: "Red Soil",
            // background: red,
            images: [
                { url: ragi, title: "Millets", description: "Ragi grows best in red sandy soils with good drainage and moderate rainfall. Farmers usually sow ragi either by broadcasting the seeds or by using a seed drill in rows. After germination, the field needs light weeding and thinning for healthy growth. Since ragi is a hardy crop, it doesn’t require too much water and can survive in semi-dry conditions. Modern farmers use tractors for ploughing, seed drills for sowing, and power weeders for inter-cultivation. Harvesting is done manually with sickles, but in large farms harvesters are also used to cut and thresh ragi." },
                { url: groundnut, title: "Groundnut", description: "Groundnut prefers red sandy soils because they are loose and help pods develop underground. The crop is sown with a seed drill or planter, usually after treating seeds with fungicides. Gypsum is often applied to increase the number of pods. Farmers irrigate during flowering and pod formation stages. For harvesting, groundnut diggers and harvesters are used to lift plants from the soil, followed by drying in the sun. Threshers help separate pods from plants. In modern farming, groundnut can be fully mechanized with tractors, diggers, and threshers." },
                { url: potato, title: "Potato", description: "Potatoes need red sandy or sandy loam soil which allows tuber expansion and prevents waterlogging. Farmers prepare the land into ridges and furrows using a tractor. Potato tubers are planted using a potato planter, and drip irrigation is used to save water. Fertilizers like nitrogen and potash are essential. During harvesting, potato diggers or harvesters are used to lift the tubers without damaging them. Large-scale farms depend on cold storage facilities after harvest to prevent sprouting." },
                { url: mango, title: "Mango", description: "Mango trees grow well in deep red sandy loam soils with good drainage. Farmers usually plant grafted saplings in big pits, filled with manure and soil mixture. Trees require pruning to maintain shape and allow sunlight penetration. Irrigation is provided through drip irrigation systems, and pest control is done with power sprayers. For harvesting, long harvesting poles or clippers are used to avoid fruit damage. Mango orchards require tractors for ploughing between tree rows and for applying fertilizers." },
                { url: pomagranet, title: "Pomegranate", description: "Pomegranate thrives in red sandy soils with low water requirement. Farmers plant saplings in pits with manure, and drip irrigation is provided during flowering and fruit development. Pomegranate trees are pruned regularly to avoid overcrowding. Pest control is crucial, so power sprayers are used. Fruits are harvested manually with cutters. Farmers use tractors for initial land prep, drip irrigation, and modern sprayers for large orchards. Pomegranate farming is popular because of high export demand." },
                { url: pulse, title: "Pulses", description: "Pulses like green gram, black gram, and red gram can thrive in red sandy soils with moderate fertility. They require less water, which makes them suitable for rainfed farming. Seeds are sown directly in lines using seed drills, and farmers use sprayers to control pests like pod borers. Since pulses enrich the soil with nitrogen, they are often grown in crop rotation. Harvesting can be manual or with a combine harvester. Pulses are stored carefully to prevent insect damage after harvest." },
                { url: citrus, title: "Citrus Fruits", description: "Citrus fruits like orange and lemon prefer red sandy loam soils with slight acidity. Farmers plant saplings in rows with wide spacing. They use drip irrigation to ensure water reaches the roots efficiently. Regular pruning and fertilizer application are necessary. For pest and disease management, hand sprayers and power sprayers are used. Fruits are harvested manually using small cutters or scissors. In commercial orchards, tractors, irrigation pumps, and sprayers are common equipment." },
                { url: graps, title: "Grapes", description: "Grapes require deep red sandy loam soil with good drainage. Farmers prepare land with tractors, then plant vines supported on trellis systems or pandals. Pruning is very important for grape yield and quality. Irrigation is provided through drip systems, and sprayers are used to prevent fungal diseases. Harvesting is done by hand with special grape scissors. Large vineyards use secateurs, pruning machines, and spraying equipment. Grapes are also stored in cold storage units for export." },
                { url: guava, title: "Guava", description: "Guava is a hardy crop that grows even in poor red sandy soils. Farmers plant guava saplings in large pits filled with compost. The trees require yearly pruning for better fruiting. Irrigation is given using drip systems, which saves water. Pests are controlled by spraying organic or chemical pesticides. Fruits are harvested by hand or with cutters when ripe. Since guava tolerates drought, it is popular in red soil regions. Farmers also use tractors for land prep and sprayers for plant protection." },
            ],
        },
        {
            id: 6,
            name: "Silty Soil",
            // background: silty,
            images: [
                { url: cholam, title: "Maize", description: "Maize is a major cereal crop grown in silty and loamy soils because these soils hold moisture and nutrients well. For maize farming, the land is first ploughed using a tractor with a plough or rotavator to get a fine seedbed. Seeds are sown at 3–4 cm depth using a seed drill or by manual broadcasting. Irrigation is needed every 10–12 days, especially at the flowering and grain filling stages. Fertilizers and pesticides are applied using boom sprayers. After 90–120 days, maize is harvested with a combine harvester or manually, and then grains are separated using a thresher. Maize is used for human food, animal fodder, and also as raw material in industries." },
                { url: soybean, title: "Soybean", description: "Soybean is a very important protein-rich crop, suitable for silty, loamy, and black soils. The soil is prepared with 2–3 ploughings using a tractor, and seeds are sown at a shallow depth (3–5 cm) with a seed drill. Soybean plants require irrigation mainly during flowering and pod development. Weed control is essential, so farmers use inter-cultivators or manual labor, along with spraying herbicides using knapsack sprayers. Harvesting is done after 90–100 days when the pods turn brown. Combine harvesters or threshers are used to collect the seeds. Soybean is widely used for edible oil, animal feed, and also processed into soy milk, tofu, and protein powders." },
                { url: mustard, title: "Mustard", description: "Mustard is an oilseed crop that grows well in silty and loamy soils with cool weather. For cultivation, the land is ploughed well and leveled before sowing. Seeds are sown in rows at about 30 cm spacing using a seed drill. Irrigation is required mainly at the flowering stage to improve oil content in seeds. Farmers spray pesticides using hand sprayers or tractor-mounted sprayers to protect the crop from aphids. Harvesting is done after 110–120 days when the leaves dry and the pods turn yellowish. Mustard is cut manually with a sickle or mechanically using a reaper harvester. After threshing, mustard seeds are processed to make mustard oil and spices." },
                { url: pulse, title: "Pulses", description: "Pulses such as green gram, black gram, and red gram grow well in silty and loamy soils. Land is prepared by ploughing 2–3 times with a tractor. Seeds are either broadcasted or sown with a seed drill. Since pulses need less water, only light irrigation is given; waterlogging should be avoided. Farmers use weeders or manual labor to remove weeds. Harvesting is done after 60–90 days depending on the variety. Threshers are used to separate grains. Pulses are rich in protein and form a staple diet in India. They also enrich soil fertility because they are leguminous crops that fix nitrogen." },
                { url: spinach, title: "Spinach", description: "Spinach is a leafy vegetable that grows quickly in silty and loamy soils. The land is prepared using a tractor, power tiller, or hoe to make raised beds. Seeds are sown shallowly and require frequent irrigation every 2–3 days since leafy vegetables need more moisture. Organic fertilizers and farmyard manure are preferred. Pesticides or organic sprays are applied using hand sprayers. Spinach leaves are ready for harvest within 30–40 days and can be plucked continuously for 2–3 months. Harvesting is done manually with a sickle or by hand. Spinach is rich in vitamins, iron, and minerals and is in high demand in both local markets and exports." },
                { url: ladysfinger, title: "Lady's Finge", description: "Lady’s finger, also called okra, is a popular vegetable crop suited for silty, sandy loam, and loamy soils. For cultivation, the field is ploughed with a tractor and leveled. Seeds are sown at 2–3 cm depth using a dibbler or seed drill. Irrigation is given every 5–7 days. Pesticides and fertilizers are applied using knapsack sprayers. The pods are harvested manually after 45–50 days of sowing. Since the crop bears fruits continuously, harvesting is done every 2–3 days. Lady’s finger is mainly sold fresh in local markets and is also used in frozen vegetable industries." },
                { url: cabbage, title: "Cabbage", description: "Cabbage is a cool-season vegetable crop suitable for silty and loamy soils. Farmers first raise seedlings in a nursery and later transplant them into the main field using a transplanter machine or manually. Spacing of about 45 cm is maintained between plants. Irrigation is done at regular intervals of 7–10 days. Fertilizers and pesticides are sprayed using tractor-mounted or knapsack sprayers. Harvesting is done 90–100 days after transplanting when the heads are firm and compact. Harvesting is manual, and cabbages are packed in baskets or crates for transport. Cabbage is widely consumed as a vegetable, in pickles, and in processed foods." },
                { url: pea, title: "Pea", description: "Peas are cool-season crops grown in silty and loamy soils. The field is prepared with a tractor and plough. Seeds are sown at 3–5 cm depth in rows using a seed drill. Irrigation is needed mainly during flowering and pod filling stages. Weeding is done manually or using inter-cultivators. Pesticides and fertilizers are applied using sprayers. Pods are harvested 60–70 days after sowing when they are green and tender. Harvesting is usually manual, though mechanical harvesters are also used for large-scale production. Peas are consumed fresh, canned, frozen, or dried for dals and soups." },
            ],
        },
    ];

    const [soils, setSoils] = useState([]);
    const [selectedSoil, setSelectedSoil] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setSoils(soilData);
            setSelectedSoil(soilData[0]);
        }, 500);
    }, []);

    if (!selectedSoil)
        return <div style={{ textAlign: "center", marginTop: "50px" }}>Loading...</div>;

    return (
        <div style={{ fontFamily: "Arial, sans-serif" }}>
            {/* Soil selection buttons */}
            <div className="soil-buttons">
                {soils.map((soil) => (
                    <button
                        key={soil.id}
                        onClick={() => setSelectedSoil(soil)}
                        className={`soil-btn ${soil.id === selectedSoil.id ? "active" : ""}`}
                    >
                        {soil.name}
                    </button>
                ))}
            </div>

            {/* Images and content */}
            <div className="soil-images">
                {selectedSoil.images.map((imgObj, index) => (
                    <div
                        key={index}
                        className={`soil-item ${index % 2 === 0 ? "row" : "row-reverse"}`}
                    >
                        <div className="soil-img">
                            <img src={imgObj.url} alt={imgObj.title} />
                        </div>
                        <div className="soil-content">
                            <h2>{imgObj.title}</h2>
                            <p>{imgObj.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Styles */}
            <style>{`
        .soil-buttons {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          margin: 20px 0;
          gap: 10px;
        }
        .soil-btn {
          padding: 10px 20px;
          border: none;
          border-radius: 25px;
          font-weight: bold;
          cursor: pointer;
          background: #b2dce9ff;
          color: #000;
          transition: all 0.3s ease;
        }
        .soil-btn.active {
          background: #4CAF50;
          color: #fff;
        }
        .soil-btn:hover {
          transform: scale(1.1);
        }

        .soil-images {
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 40px;
           background: linear-gradient(to right, #d9f99d, #ffffff, #ecfccb);
        }
        .soil-item {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          background: rgba(238, 241, 244, 1);
          border-radius: 15px;
          box-shadow: 0 6px 12px rgba(0,0,0,0.25);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          margin-left:50px;
          margin-right:50px;
        }
        .soil-item:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 20px rgba(0,0,0,0.3);
        }
        .soil-item.row { flex-direction: row; }
        .soil-item.row-reverse { flex-direction: row-reverse; }

        .soil-img {
          flex: 1 1 300px;
          max-width: 450px;
          padding: 10px;
        }
        .soil-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 10px;
          transition: transform 0.5s ease;
        }
        .soil-img img:hover {
          transform: scale(1.1);
        }
        .soil-content {
          flex: 1 1 300px;
          padding: 30px;
          font-size: 20px;
          line-height: 1.5;
          text-align: center;
        }
        .soil-content h2 {
          margin-bottom: 10px;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .soil-item.row, .soil-item.row-reverse {
            flex-direction: column;
            margin-left:0px;
          margin-right:0px;
          }
          .soil-content {
            text-align: center;
          }
        }
      `}</style>
        </div>
    );
};

export default View;
