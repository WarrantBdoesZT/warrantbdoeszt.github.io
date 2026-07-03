// DoD ZT Architect — Vendor-to-Capability Mapping Data
// Generated from DoD ZT RA v2.0 + NIST SP 1800-35 vendor implementations

const ZT_DATA = {
  "capabilities": {
    "User": [
      "Authentication",
      "User Authorization",
      "Continuous Authentication (CMFA)",
      "Federated Identity",
      "Privileged Access Management"
    ],
    "Device": [
      "Device Identity",
      "Device Authorization",
      "Device Compliance & Posture",
      "Attack Surface Reduction"
    ],
    "Network/Environment": [
      "Macro Segmentation",
      "Microsegmentation",
      "Software-Defined Perimeter (SDP)",
      "Network Access Control",
      "Traffic Inspection"
    ],
    "Application & Workload": [
      "Application Authorization",
      "Container Security",
      "CI/CD Security (DevSecOps)",
      "Vulnerability Management"
    ],
    "Data": [
      "Data Tagging & Classification",
      "Data Loss Prevention (DLP)",
      "Data Rights Management (DRM)",
      "Encryption (At-Rest/In-Transit)"
    ],
    "Visibility & Analytics": [
      "SIEM / Log Management",
      "Security Analytics",
      "UEBA (Behavioral Analytics)",
      "Threat Detection & Intelligence"
    ],
    "Automation & Orchestration": [
      "SOAR (Automated Response)",
      "Policy as Code",
      "Automated Configuration",
      "Incident Response Orchestration"
    ]
  },
  "vendors": [
    {
      "id": "okta",
      "name": "Okta",
      "product": "Okta Workforce Identity",
      "category": "Identity & Access Management",
      "icon": "\ud83d\udd10",
      "roles": [
        "PE",
        "PIP"
      ],
      "pillar": "User",
      "capabilities": [
        "Authentication",
        "User Authorization",
        "Federated Identity",
        "Continuous Authentication (CMFA)"
      ],
      "description": "Cloud-based identity provider with SSO, MFA, lifecycle management, and adaptive authentication policies.",
      "zt_role": "Acts as the Policy Engine for identity decisions and PIP for user attributes."
    },
    {
      "id": "ms-entra",
      "name": "Microsoft",
      "product": "Entra ID (Azure AD)",
      "category": "Identity & Access Management",
      "icon": "\ud83d\udd35",
      "roles": [
        "PE",
        "PIP"
      ],
      "pillar": "User",
      "capabilities": [
        "Authentication",
        "User Authorization",
        "Federated Identity",
        "Privileged Access Management",
        "Continuous Authentication (CMFA)"
      ],
      "description": "Cloud identity service with Conditional Access, Continuous Access Evaluation, and Privileged Identity Management.",
      "zt_role": "Primary Policy Engine for identity-driven access decisions."
    },
    {
      "id": "pam-cyberark",
      "name": "CyberArk",
      "product": "Privileged Access Manager",
      "category": "Privileged Access",
      "icon": "\ud83d\udddd\ufe0f",
      "roles": [
        "PEP",
        "PE"
      ],
      "pillar": "User",
      "capabilities": [
        "Privileged Access Management",
        "Authentication"
      ],
      "description": "Secures privileged accounts with credential vaulting, session isolation, and just-in-time access.",
      "zt_role": "PEP for privileged sessions, PE for privileged access decisions."
    },
    {
      "id": "intune",
      "name": "Microsoft",
      "product": "Intune / Endpoint Manager",
      "category": "Device Management",
      "icon": "\ud83d\udcbb",
      "roles": [
        "PIP",
        "PEP"
      ],
      "pillar": "Device",
      "capabilities": [
        "Device Compliance & Posture",
        "Attack Surface Reduction"
      ],
      "description": "Unified endpoint management with compliance policies and conditional access integration.",
      "zt_role": "PIP providing device posture signals to the PE."
    },
    {
      "id": "crowdstrike",
      "name": "CrowdStrike",
      "product": "Falcon Platform",
      "category": "Endpoint Detection & Response",
      "icon": "\ud83e\udd85",
      "roles": [
        "PIP",
        "PEP"
      ],
      "pillar": "Device",
      "capabilities": [
        "Device Compliance & Posture",
        "Threat Detection & Intelligence",
        "Device Identity"
      ],
      "description": "Cloud-native EDR/XDR with real-time threat detection, device trust, and identity protection.",
      "zt_role": "PIP for device health/threat telemetry feeding the PE."
    },
    {
      "id": "jamf",
      "name": "Jamf",
      "product": "Jamf Pro",
      "category": "Device Management",
      "icon": "\ud83c\udf4e",
      "roles": [
        "PIP"
      ],
      "pillar": "Device",
      "capabilities": [
        "Device Compliance & Posture",
        "Device Identity"
      ],
      "description": "Apple MDM with compliance monitoring, conditional access integration, and zero-touch deployment.",
      "zt_role": "PIP for macOS/iOS device posture data."
    },
    {
      "id": "pa-ngfw",
      "name": "Palo Alto Networks",
      "product": "NGFW / PA-Series",
      "category": "Network Security",
      "icon": "\ud83d\udee1\ufe0f",
      "roles": [
        "PEP"
      ],
      "pillar": "Network/Environment",
      "capabilities": [
        "Macro Segmentation",
        "Traffic Inspection",
        "Network Access Control"
      ],
      "description": "Next-gen firewall with App-ID, User-ID, Content-ID for application-aware segmentation.",
      "zt_role": "PEP at network boundaries enforcing identity-aware, application-level policies."
    },
    {
      "id": "zscaler",
      "name": "Zscaler",
      "product": "ZIA / ZPA",
      "category": "SSE / ZTNA",
      "icon": "\u2601\ufe0f",
      "roles": [
        "PEP",
        "PE"
      ],
      "pillar": "Network/Environment",
      "capabilities": [
        "Microsegmentation",
        "Software-Defined Perimeter (SDP)",
        "Traffic Inspection"
      ],
      "description": "Cloud-native SSE platform: ZIA for internet access security, ZPA for zero-trust application access.",
      "zt_role": "PEP mediating all access to internet and internal apps."
    },
    {
      "id": "cisco-ise",
      "name": "Cisco",
      "product": "Identity Services Engine (ISE)",
      "category": "Network Access Control",
      "icon": "\ud83c\udf10",
      "roles": [
        "PE",
        "PEP"
      ],
      "pillar": "Network/Environment",
      "capabilities": [
        "Network Access Control",
        "Macro Segmentation",
        "Device Authorization"
      ],
      "description": "NAC platform with TrustSec for macro/micro-segmentation and dynamic VLAN assignment.",
      "zt_role": "PE for network access decisions, PEP via TrustSec tags."
    },
    {
      "id": "illumio",
      "name": "Illumio",
      "product": "Core / Edge",
      "category": "Microsegmentation",
      "icon": "\ud83d\udd17",
      "roles": [
        "PEP"
      ],
      "pillar": "Network/Environment",
      "capabilities": [
        "Microsegmentation"
      ],
      "description": "Workload-level microsegmentation with visualization of traffic flows and policy enforcement.",
      "zt_role": "PEP enforcing per-workload segmentation policies."
    },
    {
      "id": "netskope",
      "name": "Netskope",
      "product": "Security Cloud Platform",
      "category": "SSE / CASB",
      "icon": "\ud83d\udd0d",
      "roles": [
        "PEP",
        "PIP"
      ],
      "pillar": "Network/Environment",
      "capabilities": [
        "Microsegmentation",
        "Traffic Inspection"
      ],
      "description": "Cloud SSE with CASB, SWG, ZTNA, and DLP integrated.",
      "zt_role": "PEP for cloud app access. PIP for cloud usage telemetry."
    },
    {
      "id": "prisma-cloud",
      "name": "Palo Alto Networks",
      "product": "Prisma Cloud",
      "category": "Cloud-Native Security",
      "icon": "\ud83d\udce6",
      "roles": [
        "PEP",
        "PIP"
      ],
      "pillar": "Application & Workload",
      "capabilities": [
        "Container Security",
        "CI/CD Security (DevSecOps)",
        "Vulnerability Management"
      ],
      "description": "Cloud-native security for containers, serverless, and IaC across the full application lifecycle.",
      "zt_role": "PEP for workload runtime policies."
    },
    {
      "id": "vmware-nsx",
      "name": "VMware",
      "product": "NSX / Carbon Black",
      "category": "Network Virtualization",
      "icon": "\ud83d\udda5\ufe0f",
      "roles": [
        "PEP",
        "PIP"
      ],
      "pillar": "Application & Workload",
      "capabilities": [
        "Container Security",
        "Application Authorization"
      ],
      "description": "Network virtualization with distributed microsegmentation firewalls and workload security.",
      "zt_role": "PEP for per-VM/workload traffic policies."
    },
    {
      "id": "akamai",
      "name": "Akamai",
      "product": "Enterprise Application Access",
      "category": "ZTNA / WAF",
      "icon": "\ud83c\udf0d",
      "roles": [
        "PEP"
      ],
      "pillar": "Application & Workload",
      "capabilities": [
        "Application Authorization"
      ],
      "description": "Cloud-based reverse proxy eliminating need for VPN, with identity-aware application access.",
      "zt_role": "PEP mediating access to internal applications without network exposure."
    },
    {
      "id": "f5-bigip",
      "name": "F5",
      "product": "BIG-IP APM / NGINX",
      "category": "Application Delivery",
      "icon": "\ud83d\udd00",
      "roles": [
        "PEP"
      ],
      "pillar": "Application & Workload",
      "capabilities": [
        "Application Authorization",
        "Traffic Inspection"
      ],
      "description": "Application delivery controller with access policy manager, WAF, and API gateway.",
      "zt_role": "PEP at the application layer enforcing identity-aware access policies."
    },
    {
      "id": "cloudflare",
      "name": "Cloudflare",
      "product": "Zero Trust / Access",
      "category": "Edge Security",
      "icon": "\ud83d\udfe0",
      "roles": [
        "PEP",
        "PE"
      ],
      "pillar": "Application & Workload",
      "capabilities": [
        "Application Authorization",
        "Software-Defined Perimeter (SDP)"
      ],
      "description": "Global edge network providing ZTNA, WAF, and browser isolation with identity integration.",
      "zt_role": "PEP/PE at the edge \u2014 every request evaluated before reaching origin."
    },
    {
      "id": "ms-purview",
      "name": "Microsoft",
      "product": "Purview DLP",
      "category": "Data Protection",
      "icon": "\ud83d\udd12",
      "roles": [
        "PEP",
        "PIP"
      ],
      "pillar": "Data",
      "capabilities": [
        "Data Tagging & Classification",
        "Data Loss Prevention (DLP)",
        "Data Rights Management (DRM)"
      ],
      "description": "Unified data governance with auto-labeling, DLP, and information protection.",
      "zt_role": "PEP enforcing data access policies."
    },
    {
      "id": "forcepoint-dlp",
      "name": "Forcepoint",
      "product": "DLP / Insider Threat",
      "category": "Data Protection",
      "icon": "\ud83d\udea7",
      "roles": [
        "PEP",
        "PIP"
      ],
      "pillar": "Data",
      "capabilities": [
        "Data Loss Prevention (DLP)",
        "Data Tagging & Classification"
      ],
      "description": "Data loss prevention with behavior-based insider threat detection and risk-adaptive protection.",
      "zt_role": "PEP for data egress policies."
    },
    {
      "id": "varonis",
      "name": "Varonis",
      "product": "Data Security Platform",
      "category": "Data Governance",
      "icon": "\ud83d\udcca",
      "roles": [
        "PIP",
        "PEP"
      ],
      "pillar": "Data",
      "capabilities": [
        "Data Tagging & Classification",
        "Data Rights Management (DRM)"
      ],
      "description": "Data security with automated discovery, classification, and permission management.",
      "zt_role": "PIP for data access patterns."
    },
    {
      "id": "splunk",
      "name": "Splunk",
      "product": "Enterprise / Enterprise Security",
      "category": "SIEM / Analytics",
      "icon": "\ud83e\udde0",
      "roles": [
        "PIP",
        "PE"
      ],
      "pillar": "Visibility & Analytics",
      "capabilities": [
        "SIEM / Log Management",
        "Security Analytics",
        "UEBA (Behavioral Analytics)",
        "Threat Detection & Intelligence"
      ],
      "description": "SIEM and SOAR platform aggregating logs, detecting anomalies, and driving automated response.",
      "zt_role": "PIP providing security telemetry to the PE."
    },
    {
      "id": "sentinel",
      "name": "Microsoft",
      "product": "Sentinel",
      "category": "SIEM / SOAR",
      "icon": "\ud83d\udef0\ufe0f",
      "roles": [
        "PIP",
        "PE"
      ],
      "pillar": "Visibility & Analytics",
      "capabilities": [
        "SIEM / Log Management",
        "UEBA (Behavioral Analytics)",
        "Threat Detection & Intelligence",
        "Security Analytics"
      ],
      "description": "Cloud-native SIEM with AI-driven analytics, threat intelligence, and automated response.",
      "zt_role": "PIP for enterprise telemetry. PE feeding risk scores to Conditional Access."
    },
    {
      "id": "extrahop",
      "name": "ExtraHop",
      "product": "Reveal(x)",
      "category": "Network Detection",
      "icon": "\ud83d\udce1",
      "roles": [
        "PIP"
      ],
      "pillar": "Visibility & Analytics",
      "capabilities": [
        "Threat Detection & Intelligence",
        "Security Analytics"
      ],
      "description": "Cloud-native NDR with ML-powered detection, decrypting and analyzing all network traffic.",
      "zt_role": "PIP providing network-layer behavioral telemetry."
    },
    {
      "id": "wiz",
      "name": "Wiz",
      "product": "Cloud Security Platform",
      "category": "Cloud Security Posture",
      "icon": "\u26a1",
      "roles": [
        "PIP"
      ],
      "pillar": "Visibility & Analytics",
      "capabilities": [
        "Security Analytics",
        "Vulnerability Management"
      ],
      "description": "Agentless cloud security with graph-based risk analysis across cloud accounts.",
      "zt_role": "PIP for cloud posture and risk visibility."
    },
    {
      "id": "xsoar",
      "name": "Palo Alto Networks",
      "product": "Cortex XSOAR",
      "category": "SOAR",
      "icon": "\u2699\ufe0f",
      "roles": [
        "PE"
      ],
      "pillar": "Automation & Orchestration",
      "capabilities": [
        "SOAR (Automated Response)",
        "Incident Response Orchestration"
      ],
      "description": "SOAR platform automating incident response with playbooks, case management, and integrations.",
      "zt_role": "PE driving automated response decisions and orchestrating enforcement actions."
    },
    {
      "id": "fortinet-forti",
      "name": "Fortinet",
      "product": "FortiAnalyzer / FortiManager",
      "category": "Security Fabric",
      "icon": "\ud83c\udfdb\ufe0f",
      "roles": [
        "PE",
        "PIP"
      ],
      "pillar": "Automation & Orchestration",
      "capabilities": [
        "SOAR (Automated Response)",
        "Automated Configuration",
        "Policy as Code"
      ],
      "description": "Security Fabric orchestration with centralized management, automated response, and threat intel.",
      "zt_role": "PE for automated policy decisions across the Fortinet Fabric."
    },
    {
      "id": "terraform",
      "name": "HashiCorp",
      "product": "Terraform Enterprise",
      "category": "Infrastructure as Code",
      "icon": "\ud83c\udfd7\ufe0f",
      "roles": [
        "PEP"
      ],
      "pillar": "Automation & Orchestration",
      "capabilities": [
        "Policy as Code",
        "Automated Configuration"
      ],
      "description": "IaC platform with Sentinel policy-as-code for automated, compliant infrastructure provisioning.",
      "zt_role": "PEP enforcing policy-as-code on all infrastructure changes."
    }
  ]
};
