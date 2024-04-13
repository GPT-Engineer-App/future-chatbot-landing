import React from "react";
import { Box, Heading, Text, Button, Stack, Flex, Grid, Image, Icon, useColorModeValue } from "@chakra-ui/react";
import { FaRobot, FaComments, FaChartLine, FaStar } from "react-icons/fa";

const features = [
  {
    title: "24/7 Availability",
    text: "Our AI chatbot is always ready to assist your customers, day or night.",
    icon: FaRobot,
  },
  {
    title: "Natural Language Processing",
    text: "Advanced NLP capabilities enable the chatbot to understand and respond to user queries effectively.",
    icon: FaComments,
  },
  {
    title: "Seamless Integration",
    text: "Easily integrate the chatbot with your existing website or app for a smooth user experience.",
    icon: FaChartLine,
  },
];

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, ABC Company",
    text: "The AI chatbot has revolutionized our customer support. It handles inquiries efficiently and frees up our team to focus on complex issues.",
    avatar: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYWxlJTIwQ0VPJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzEyOTg1NDA1fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    name: "Jane Smith",
    role: "Marketing Manager, XYZ Inc.",
    text: "Implementing the AI chatbot has significantly improved our customer engagement and satisfaction scores.",
    avatar: "https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBtYXJrZXRpbmclMjBtYW5hZ2VyJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzEyOTg1NDA1fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const pricingPlans = [
  {
    name: "Basic",
    price: "$99",
    features: ["100 monthly active users", "Email support", "Basic analytics"],
  },
  {
    name: "Pro",
    price: "$299",
    features: ["1000 monthly active users", "Priority support", "Advanced analytics", "Customization options"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Unlimited monthly active users", "Dedicated account manager", "White-labeling", "API access"],
  },
];

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bg={useColorModeValue("gray.100", "gray.700")} py={20}>
        <Box maxW="6xl" mx="auto" px={4}>
          <Flex align="center" direction={{ base: "column", md: "row" }}>
            <Box flex={1} mb={{ base: 8, md: 0 }}>
              <Heading as="h1" size="2xl" mb={4}>
                Revolutionize Your Customer Support with AI
              </Heading>
              <Text fontSize="xl" mb={8}>
                Our intelligent chatbot powered by advanced AI technology delivers exceptional customer experiences.
              </Text>
              <Stack direction={{ base: "column", md: "row" }} spacing={4}>
                <Button colorScheme="blue" size="lg">
                  Get Started
                </Button>
                <Button size="lg">Request a Demo</Button>
              </Stack>
            </Box>
            <Box flex={1}>
              <Image src="https://images.unsplash.com/photo-1679403766682-3b31efa571a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMGNoYXRib3QlMjBpbGx1c3RyYXRpb258ZW58MHx8fHwxNzEyOTg1NDA1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="AI Chatbot" />
            </Box>
          </Flex>
        </Box>
      </Box>

      {/* Features Section */}
      <Box py={20}>
        <Box maxW="6xl" mx="auto" px={4}>
          <Heading as="h2" size="xl" mb={12} textAlign="center">
            Key Features
          </Heading>
          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
            {features.map((feature, index) => (
              <Box key={index} bg="white" p={8} borderRadius="md" boxShadow="md">
                <Icon as={feature.icon} boxSize={12} color="blue.500" mb={4} />
                <Heading as="h3" size="lg" mb={4}>
                  {feature.title}
                </Heading>
                <Text>{feature.text}</Text>
              </Box>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Testimonials Section */}
      <Box bg={useColorModeValue("gray.100", "gray.700")} py={20}>
        <Box maxW="6xl" mx="auto" px={4}>
          <Heading as="h2" size="xl" mb={12} textAlign="center">
            What Our Customers Say
          </Heading>
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            {testimonials.map((testimonial, index) => (
              <Box key={index} bg="white" p={8} borderRadius="md" boxShadow="md">
                <Flex align="center" mb={4}>
                  <Image src={testimonial.avatar} alt={testimonial.name} boxSize={12} borderRadius="full" mr={4} />
                  <Box>
                    <Heading as="h4" size="md">
                      {testimonial.name}
                    </Heading>
                    <Text fontSize="sm" color="gray.500">
                      {testimonial.role}
                    </Text>
                  </Box>
                </Flex>
                <Text>{testimonial.text}</Text>
                <Flex mt={4}>
                  {[...Array(5)].map((_, index) => (
                    <Icon key={index} as={FaStar} color="gold" mr={1} />
                  ))}
                </Flex>
              </Box>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Pricing Section */}
      <Box py={20}>
        <Box maxW="6xl" mx="auto" px={4}>
          <Heading as="h2" size="xl" mb={12} textAlign="center">
            Pricing Plans
          </Heading>
          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
            {pricingPlans.map((plan, index) => (
              <Box key={index} bg="white" p={8} borderRadius="md" boxShadow="md">
                <Heading as="h3" size="lg" mb={4}>
                  {plan.name}
                </Heading>
                <Text fontSize="3xl" fontWeight="bold" mb={4}>
                  {plan.price}
                </Text>
                <Box as="ul" styleType="none" mb={8}>
                  {plan.features.map((feature, index) => (
                    <Text as="li" key={index} mb={2}>
                      {feature}
                    </Text>
                  ))}
                </Box>
                <Button colorScheme="blue" size="lg" w="full">
                  Choose Plan
                </Button>
              </Box>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* CTA Section */}
      <Box bg="blue.500" py={20}>
        <Box maxW="6xl" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={4} color="white">
            Ready to Enhance Your Customer Support?
          </Heading>
          <Text fontSize="xl" mb={8} color="white">
            Sign up now and experience the power of AI-driven conversations.
          </Text>
          <Button size="lg" colorScheme="white" color="blue.500">
            Get Started
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
