export const generateLegalSchema = (type = "LegalService", name, description, url) => {
    return {
        "@context": "https://schema.org",
        "@type": type, // e.g., "LegalService", "Attorney", "ProfessionalService"
        "name": name || "JH Law Firm",
        "image": "https://jhlawfirm.com/logo.png",
        "@id": "https://jhlawfirm.com",
        "url": url || "https://jhlawfirm.com",
        "telephone": "+919876543210", // Placeholder, should be updated
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "High Court Road",
            "addressLocality": "Hyderabad",
            "addressRegion": "Telangana",
            "postalCode": "500066",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 17.366,
            "longitude": 78.476
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
            "opens": "09:00",
            "closes": "20:00"
        },
        "priceRange": "$$",
        "description": description || "Leading Advocates in Hyderabad specializing in Civil, Criminal, and Family Law.",
        "areaServed": [
            {
                "@type": "City",
                "name": "Hyderabad"
            },
            {
                "@type": "City",
                "name": "Secunderabad"
            },
            {
                "@type": "City",
                "name": "Medchal"
            },
            {
                "@type": "City",
                "name": "Kukatpally"
            }
        ]
    };
};

// FAQPage Schema Generator for AI Search Optimization
// Optimized for Google AI Overview, ChatGPT, Perplexity, and other AI search engines
export const generateFAQSchema = (faqs) => {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };
};

// LocalBusiness Schema Generator for Local SEO & Google Maps
// Optimized for "advocate near me" and location-based searches
export const generateLocalBusinessSchema = (courtName, courtAddress, courtLat, courtLng) => {
    return {
        "@context": "https://schema.org",
        "@type": "LegalService",
        "name": `JH Law Firm - ${courtName}`,
        "image": "https://jhlawfirm.com/logo.png",
        "url": "https://jhlawfirm.com",
        "telephone": "+919876543210",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": courtAddress,
            "addressLocality": "Hyderabad",
            "addressRegion": "Telangana",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": courtLat,
            "longitude": courtLng
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "20:00"
        },
        "areaServed": {
            "@type": "City",
            "name": "Hyderabad"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Legal Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Legal Consultation"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Court Representation"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Legal Documentation"
                    }
                }
            ]
        }
    };
};

