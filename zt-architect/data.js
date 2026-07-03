// DoD ZT Architect — Vendor-to-Capability Mapping Data
// Vendors verified against NIST SP 1800-35 (Final, June 2025)
// Capabilities from DoD ZT RA CV-2 Taxonomy

const ZT_DATA = {
  "metadata": {
    "capability_source": "DoD ZT RA v1.0 (Feb 2021) CV-2 Taxonomy, expanded with v2.0 concepts",
    "vendor_source": "NIST SP 1800-35 (Final, June 2025) + industry analysis",
    "nist_collaborators": 24,
    "total_vendors": 41,
    "note": "Vendors marked nist_1800_35=true are actual SP 1800-35 collaborators. Others are popular industry ZT tools."
  },
  "capabilities": {
    "User": [
      {
        "id": "Z1.1",
        "name": "Authentication",
        "desc": "Verify identity of users and non-person entities (MFA, CMFA)"
      },
      {
        "id": "Z1.2",
        "name": "Authorization",
        "desc": "Grant/deny access using RBAC/ABAC and least privilege"
      },
      {
        "id": "Z1.3",
        "name": "Privileged Access Management (PAM)",
        "desc": "Secure, control, and manage privileged account access"
      },
      {
        "id": "Z1.4",
        "name": "Federated Identity",
        "desc": "Cross-organization identity trust and SSO"
      }
    ],
    "Device": [
      {
        "id": "Z2.1",
        "name": "Device Authentication",
        "desc": "Verify identity of devices and endpoints"
      },
      {
        "id": "Z2.2",
        "name": "Device Authorization",
        "desc": "Grant/deny device access to resources"
      },
      {
        "id": "Z2.3",
        "name": "Compliance & Posture",
        "desc": "Continuous device health attestation and remediation"
      },
      {
        "id": "Z2.4",
        "name": "Attack Surface Reduction",
        "desc": "Reduce endpoint attack surface via policy enforcement"
      }
    ],
    "Network/Environment": [
      {
        "id": "Z3.1",
        "name": "Software-Defined Networking (SDN)",
        "desc": "Programmatic network control and policy enforcement"
      },
      {
        "id": "Z3.2",
        "name": "Macro Segmentation",
        "desc": "Broad network segmentation across enclaves and zones"
      },
      {
        "id": "Z3.3",
        "name": "Microsegmentation",
        "desc": "Granular per-workload/per-process segmentation"
      },
      {
        "id": "Z3.4",
        "name": "Software-Defined Perimeter (SDP)",
        "desc": "Identity-aware, per-application access without network exposure"
      },
      {
        "id": "Z3.5",
        "name": "Traffic Inspection",
        "desc": "Deep packet inspection, IPS, and threat prevention"
      }
    ],
    "Application & Workload": [
      {
        "id": "Z4.1",
        "name": "Software Defined Compute",
        "desc": "Secure container and VM workload isolation"
      },
      {
        "id": "Z4.2",
        "name": "DevSecOps",
        "desc": "Security integrated into CI/CD pipelines"
      },
      {
        "id": "Z4.3",
        "name": "Software Supply Chain",
        "desc": "Binary/library security validation and provenance"
      },
      {
        "id": "Z4.4",
        "name": "Application Delivery",
        "desc": "Identity-aware application access via proxy/gateway"
      },
      {
        "id": "Z4.5",
        "name": "Application Authorization",
        "desc": "Resource-level access control on applications/APIs"
      }
    ],
    "Data": [
      {
        "id": "Z5.1",
        "name": "Data Storage Security",
        "desc": "Encryption at rest, secure storage management"
      },
      {
        "id": "Z5.2",
        "name": "Data Tagging & Classification",
        "desc": "Automated metadata tagging for policy decisions"
      },
      {
        "id": "Z5.3",
        "name": "Data Loss Prevention (DLP)",
        "desc": "Detect and prevent data exfiltration"
      },
      {
        "id": "Z5.4",
        "name": "Data Rights Management (DRM)",
        "desc": "Align access controls to encryption on files"
      }
    ],
    "Visibility & Analytics": [
      {
        "id": "Z6.1",
        "name": "Discovery & Baselining",
        "desc": "Identify normal operating characteristics across pillars"
      },
      {
        "id": "Z6.2",
        "name": "SIEM",
        "desc": "Aggregate and analyze security events enterprise-wide"
      },
      {
        "id": "Z6.3",
        "name": "Machine Learning / UEBA",
        "desc": "ML-driven behavioral analytics and anomaly detection"
      },
      {
        "id": "Z6.4",
        "name": "Threat Detection & Intelligence",
        "desc": "Real-time threat detection with intel integration"
      }
    ],
    "Automation & Orchestration": [
      {
        "id": "Z7.1",
        "name": "API Standard",
        "desc": "Standardized inter-technology communication for automation"
      },
      {
        "id": "Z7.2",
        "name": "Incident Response",
        "desc": "Automated response to security events"
      },
      {
        "id": "Z7.3",
        "name": "SOAR",
        "desc": "Automated detection, response, and remediation workflows"
      },
      {
        "id": "Z7.4",
        "name": "Artificial Intelligence",
        "desc": "AI-driven policy decisions and autonomous response"
      }
    ]
  },
  "vendors": [
    {
      "id": "okta",
      "name": "Okta",
      "product": "Okta Identity Cloud",
      "category": "Identity & Access Management",
      "icon": "\ud83d\udd10",
      "roles": [
        "PE",
        "PIP"
      ],
      "pillar": "User",
      "capabilities": [
        "Authentication",
        "Authorization",
        "Federated Identity"
      ],
      "nist_1800_35": true,
      "builds": "E1B1, E1B2, E1B3",
      "description": "Cloud identity provider \u2014 PE/PDP in EIG builds, PIP for identity/SSO.",
      "zt_role": "PE for identity decisions in EIG Crawl builds. PIP providing identity attributes to other PEPs."
    },
    {
      "id": "ms-entra",
      "name": "Microsoft",
      "product": "Entra ID (Azure AD) + Conditional Access",
      "category": "Identity & Access Management",
      "icon": "\ud83d\udd35",
      "roles": [
        "PE",
        "PIP"
      ],
      "pillar": "User",
      "capabilities": [
        "Authentication",
        "Authorization",
        "Privileged Access Management (PAM)",
        "Federated Identity"
      ],
      "nist_1800_35": true,
      "builds": "E3B1, E3B2, E3B3, E3B5",
      "description": "Broadest PE coverage in SP 1800-35 \u2014 PE/PDP in 4 builds.",
      "zt_role": "PE/PDP via Conditional Access across Enterprise 3 builds. PIP through Identity Protection risk scoring."
    },
    {
      "id": "ping",
      "name": "Ping Identity",
      "product": "PingFederate / PingOne",
      "category": "Identity & Access Management",
      "icon": "\ud83d\udfe1",
      "roles": [
        "PE",
        "PA"
      ],
      "pillar": "User",
      "capabilities": [
        "Authentication",
        "Authorization",
        "Federated Identity"
      ],
      "nist_1800_35": true,
      "builds": "E2B1",
      "description": "PE/PA (PDP) in Enterprise 2 EIG Crawl build.",
      "zt_role": "PE/PA making identity-driven access decisions via federation."
    },
    {
      "id": "ibm-verify",
      "name": "IBM",
      "product": "Security Verify",
      "category": "Identity & Access Management",
      "icon": "\ud83d\udfe6",
      "roles": [
        "PE"
      ],
      "pillar": "User",
      "capabilities": [
        "Authentication",
        "Authorization",
        "Federated Identity"
      ],
      "nist_1800_35": true,
      "builds": "E4B3",
      "description": "PE/PDP for IAM in Enterprise 4 EIG Run build.",
      "zt_role": "PE/PDP for identity and access decisions in IBM-centric architecture."
    },
    {
      "id": "sailpoint",
      "name": "SailPoint",
      "product": "IdentityIQ",
      "category": "Identity Governance",
      "icon": "\ud83e\udeaa",
      "roles": [
        "PIP"
      ],
      "pillar": "User",
      "capabilities": [
        "Authorization",
        "Privileged Access Management (PAM)"
      ],
      "nist_1800_35": true,
      "builds": "E1B1-B6, E2B1-B6, E3B1-B5 (all)",
      "description": "Identity governance PIP in nearly every build.",
      "zt_role": "PIP providing identity governance and access certification data to the PE."
    },
    {
      "id": "radiant",
      "name": "Radiant Logic",
      "product": "RadiantOne",
      "category": "Identity Data",
      "icon": "\ud83d\udd17",
      "roles": [
        "PIP"
      ],
      "pillar": "User",
      "capabilities": [
        "Federated Identity",
        "Authentication"
      ],
      "nist_1800_35": true,
      "builds": "E1, E2, E3 (all)",
      "description": "Identity data aggregation PIP across nearly all builds.",
      "zt_role": "PIP aggregating identity data from multiple directories into a unified virtual view."
    },
    {
      "id": "ivanti",
      "name": "Ivanti",
      "product": "Neurons for UEM / Access ZSO",
      "category": "UEM / Zero Sign-On",
      "icon": "\ud83d\udcf1",
      "roles": [
        "PE",
        "PIP",
        "PEP"
      ],
      "pillar": "User",
      "capabilities": [
        "Authentication",
        "Federated Identity"
      ],
      "nist_1800_35": true,
      "builds": "E1B1 (ZSO PE), E1B2-B6 (UEM PIP)",
      "description": "PE/PDP in E1B1 (Zero Sign-On), PIP for endpoint management in later builds.",
      "zt_role": "PE for device-based ZSO auth. PIP for endpoint compliance. PEP via Ivanti Tunnel."
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
        "Privileged Access Management (PAM)",
        "Authentication"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Industry-leading PAM \u2014 not an SP 1800-35 collaborator but widely used in DoD.",
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
        "PDP",
        "PEP"
      ],
      "pillar": "Device",
      "capabilities": [
        "Compliance & Posture",
        "Attack Surface Reduction"
      ],
      "nist_1800_35": true,
      "builds": "E3B2, E3B3",
      "description": "PDP for device compliance policy in E3B2. PIP feeding Conditional Access.",
      "zt_role": "PDP for device compliance decisions. PEP enforcing policies on endpoints. Feeds Conditional Access PE."
    },
    {
      "id": "forescout",
      "name": "Forescout",
      "product": "eyeSight / eyeControl / eyeExtend",
      "category": "Network Access Control",
      "icon": "\ud83d\udc41\ufe0f",
      "roles": [
        "PIP",
        "PDP",
        "PEP"
      ],
      "pillar": "Device",
      "capabilities": [
        "Compliance & Posture",
        "Device Authentication"
      ],
      "nist_1800_35": true,
      "builds": "E3B2, E3B3, E3B4",
      "description": "Co-PDP in 3 Enterprise 3 builds \u2014 endpoint compliance and NAC.",
      "zt_role": "PDP for compliance decisions. PIP for endpoint visibility. PEP via eyeControl enforcement."
    },
    {
      "id": "maas360",
      "name": "IBM",
      "product": "MaaS360",
      "category": "MDM / UEM",
      "icon": "\ud83d\udcf2",
      "roles": [
        "PIP"
      ],
      "pillar": "Device",
      "capabilities": [
        "Compliance & Posture",
        "Device Authentication"
      ],
      "nist_1800_35": true,
      "builds": "E4B3",
      "description": "MDM/UEM PIP for laptops and mobile in Enterprise 4.",
      "zt_role": "PIP providing mobile device management and compliance data."
    },
    {
      "id": "zimperium",
      "name": "Zimperium",
      "product": "Mobile Threat Defense (MTD)",
      "category": "Mobile Security",
      "icon": "\ud83d\udcf2",
      "roles": [
        "PIP"
      ],
      "pillar": "Device",
      "capabilities": [
        "Compliance & Posture"
      ],
      "nist_1800_35": true,
      "builds": "E1B1",
      "description": "Mobile threat defense PIP in E1B1.",
      "zt_role": "PIP providing mobile device security telemetry."
    },
    {
      "id": "lookout",
      "name": "Lookout",
      "product": "Mobile Endpoint Security",
      "category": "Mobile Security",
      "icon": "\ud83d\udef0\ufe0f",
      "roles": [
        "PIP"
      ],
      "pillar": "Device",
      "capabilities": [
        "Compliance & Posture"
      ],
      "nist_1800_35": true,
      "builds": "E3B1",
      "description": "Mobile endpoint security PIP in E3B1.",
      "zt_role": "PIP for mobile threat defense telemetry."
    },
    {
      "id": "pcmatic",
      "name": "PC Matic",
      "product": "PC Matic Pro",
      "category": "Endpoint Protection",
      "icon": "\ud83d\udda5\ufe0f",
      "roles": [
        "PIP"
      ],
      "pillar": "Device",
      "capabilities": [
        "Compliance & Posture"
      ],
      "nist_1800_35": true,
      "builds": "E3B1, E3B2",
      "description": "Endpoint protection PIP in Enterprise 3 builds.",
      "zt_role": "PIP providing endpoint protection and posture data."
    },
    {
      "id": "crowdstrike",
      "name": "CrowdStrike",
      "product": "Falcon Platform",
      "category": "EDR / XDR",
      "icon": "\ud83e\udd85",
      "roles": [
        "PIP",
        "PEP"
      ],
      "pillar": "Device",
      "capabilities": [
        "Compliance & Posture",
        "Device Authentication"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Industry-leading EDR \u2014 not an SP 1800-35 collaborator but dominant in DoD/IC.",
      "zt_role": "PIP for device health/threat telemetry feeding the PE. PEP for blocking malicious activity."
    },
    {
      "id": "pa-ngfw",
      "name": "Palo Alto Networks",
      "product": "NGFW / GlobalProtect",
      "category": "Network Security",
      "icon": "\ud83d\udee1\ufe0f",
      "roles": [
        "PEP"
      ],
      "pillar": "Network/Environment",
      "capabilities": [
        "Macro Segmentation",
        "Traffic Inspection",
        "Software-Defined Networking (SDN)"
      ],
      "nist_1800_35": true,
      "builds": "E2B1, E3B1, E3B2, E4B3 (all)",
      "description": "PEP for network enforcement in nearly every build.",
      "zt_role": "PEP at network boundaries \u2014 the primary network-layer enforcement point."
    },
    {
      "id": "zscaler",
      "name": "Zscaler",
      "product": "ZPA / ZIA",
      "category": "SSE / ZTNA",
      "icon": "\u2601\ufe0f",
      "roles": [
        "PE",
        "PEP"
      ],
      "pillar": "Network/Environment",
      "capabilities": [
        "Microsegmentation",
        "Software-Defined Perimeter (SDP)",
        "Traffic Inspection"
      ],
      "nist_1800_35": true,
      "builds": "E1B2, E1B3 (ZPA as PE/PDP)",
      "description": "PE/PA/PDP in E1B2 & E1B3 (ZPA Central Authority). PEP via service edges.",
      "zt_role": "PE via ZPA CA for access decisions. PEP via ZIA/ZPA service edges mediating all traffic."
    },
    {
      "id": "cisco-ise",
      "name": "Cisco",
      "product": "Duo / ISE",
      "category": "NAC / MFA",
      "icon": "\ud83c\udf10",
      "roles": [
        "PEP",
        "PE"
      ],
      "pillar": "Network/Environment",
      "capabilities": [
        "Software-Defined Networking (SDN)",
        "Macro Segmentation",
        "Device Authorization"
      ],
      "nist_1800_35": true,
      "builds": "E2B1 (Duo PEP)",
      "description": "Cisco Duo as MFA PEP in E2B1. ISE for TrustSec in industry.",
      "zt_role": "PEP for MFA/device health (Duo). PE for network access (ISE TrustSec)."
    },
    {
      "id": "appgate",
      "name": "Appgate",
      "product": "Appgate SDP",
      "category": "SDP / ZTNA",
      "icon": "\ud83d\udeaa",
      "roles": [
        "PE",
        "PEP"
      ],
      "pillar": "Network/Environment",
      "capabilities": [
        "Software-Defined Perimeter (SDP)",
        "Microsegmentation"
      ],
      "nist_1800_35": true,
      "builds": "E2B3, E2B4, E2B5, E2B6",
      "description": "SDP provider in Enterprise 2 builds.",
      "zt_role": "PE for SDP access decisions. PEP via client connectors mediating application access."
    },
    {
      "id": "illumio",
      "name": "Illumio",
      "product": "Core / Edge",
      "category": "Microsegmentation",
      "icon": "\ud83d\udd2c",
      "roles": [
        "PEP"
      ],
      "pillar": "Network/Environment",
      "capabilities": [
        "Microsegmentation"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Leading microsegmentation \u2014 not an SP 1800-35 collaborator.",
      "zt_role": "PEP enforcing per-workload segmentation policies."
    },
    {
      "id": "google-sase",
      "name": "Google Cloud",
      "product": "Cloud EPP / BeyondCorp",
      "category": "SASE / Cloud Security",
      "icon": "\u2601\ufe0f",
      "roles": [
        "PE",
        "PEP"
      ],
      "pillar": "Network/Environment",
      "capabilities": [
        "Software-Defined Perimeter (SDP)",
        "Traffic Inspection"
      ],
      "nist_1800_35": true,
      "builds": "E4B4, E4B5",
      "description": "SASE provider in Enterprise 4 builds.",
      "zt_role": "PE for context-aware access. PEP at the edge enforcing identity-based policies."
    },
    {
      "id": "f5",
      "name": "F5",
      "product": "BIG-IP APM / NGINX",
      "category": "Application Delivery",
      "icon": "\ud83d\udd00",
      "roles": [
        "PEP"
      ],
      "pillar": "Application & Workload",
      "capabilities": [
        "Application Delivery",
        "Application Authorization",
        "Traffic Inspection"
      ],
      "nist_1800_35": true,
      "builds": "E3B1, E3B2",
      "description": "PEP for application delivery/enforcement in Enterprise 3.",
      "zt_role": "PEP at the application layer \u2014 WAF, APM, and API gateway enforcement."
    },
    {
      "id": "vmware",
      "name": "Broadcom (VMware)",
      "product": "VMware Infrastructure",
      "category": "Virtualization",
      "icon": "\ud83d\udda5\ufe0f",
      "roles": [
        "PEP",
        "PIP"
      ],
      "pillar": "Application & Workload",
      "capabilities": [
        "Software Defined Compute",
        "Microsegmentation"
      ],
      "nist_1800_35": true,
      "builds": "E4B3",
      "description": "Platform (virtualization) in Enterprise 4. NSX for microsegmentation.",
      "zt_role": "PEP via NSX distributed firewalls. Platform for workload hosting."
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
        "DevSecOps",
        "Software Supply Chain",
        "Software Defined Compute"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Cloud-native security \u2014 not an SP 1800-35 collaborator.",
      "zt_role": "PEP for workload runtime policies. PIP for vulnerability and posture data."
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
        "Software-Defined Perimeter (SDP)",
        "Application Delivery"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Global edge ZTNA \u2014 not an SP 1800-35 collaborator.",
      "zt_role": "PEP/PE at the edge \u2014 every request evaluated before reaching origin."
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
        "Application Delivery",
        "Application Authorization"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Cloud reverse proxy ZTNA \u2014 not an SP 1800-35 collaborator.",
      "zt_role": "PEP mediating access to internal applications."
    },
    {
      "id": "guardium",
      "name": "IBM",
      "product": "Guardium Data Encryption",
      "category": "Data Security",
      "icon": "\ud83d\udd12",
      "roles": [
        "PIP",
        "PEP"
      ],
      "pillar": "Data",
      "capabilities": [
        "Data Storage Security",
        "Data Loss Prevention (DLP)"
      ],
      "nist_1800_35": true,
      "builds": "E4B3",
      "description": "Data security/encryption PIP in Enterprise 4.",
      "zt_role": "PIP for data security telemetry. PEP for encryption policy enforcement."
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
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Industry DLP leader \u2014 not an SP 1800-35 collaborator.",
      "zt_role": "PEP enforcing data access policies. PIP for data classification metadata."
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
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Risk-adaptive DLP \u2014 not an SP 1800-35 collaborator.",
      "zt_role": "PEP for data egress policies."
    },
    {
      "id": "qradar",
      "name": "IBM",
      "product": "QRadar XDR / CP4S",
      "category": "SIEM / XDR / SOAR",
      "icon": "\ud83e\udde0",
      "roles": [
        "PIP",
        "PE"
      ],
      "pillar": "Visibility & Analytics",
      "capabilities": [
        "SIEM",
        "Threat Detection & Intelligence",
        "Discovery & Baselining",
        "Machine Learning / UEBA"
      ],
      "nist_1800_35": true,
      "builds": "E1, E2, E3, E4 (all)",
      "description": "PIP for SIEM/XDR in every build. CP4S for security orchestration.",
      "zt_role": "PIP providing SIEM/XDR telemetry to the PE. CP4S for orchestration."
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
        "SIEM",
        "Threat Detection & Intelligence",
        "Machine Learning / UEBA"
      ],
      "nist_1800_35": true,
      "builds": "E3B1, E3B2",
      "description": "PIP for SIEM/SOAR visibility in Enterprise 3.",
      "zt_role": "PIP for enterprise telemetry. Feeds risk scores back to Conditional Access PE."
    },
    {
      "id": "mandiant",
      "name": "Mandiant",
      "product": "Security Validation (MSV)",
      "category": "Security Validation",
      "icon": "\u2705",
      "roles": [
        "PIP"
      ],
      "pillar": "Visibility & Analytics",
      "capabilities": [
        "Threat Detection & Intelligence",
        "Discovery & Baselining"
      ],
      "nist_1800_35": true,
      "builds": "E1, E2, E3, E4 (all)",
      "description": "Security control validation PIP in every build.",
      "zt_role": "PIP validating that security controls actually detect/block threats."
    },
    {
      "id": "tenable",
      "name": "Tenable",
      "product": "Tenable.ad / .io / NNM",
      "category": "Vulnerability Management",
      "icon": "\ud83d\udd0d",
      "roles": [
        "PIP"
      ],
      "pillar": "Visibility & Analytics",
      "capabilities": [
        "Discovery & Baselining",
        "Threat Detection & Intelligence"
      ],
      "nist_1800_35": true,
      "builds": "E1, E2, E3, E4 (all)",
      "description": "Vulnerability/AD monitoring PIP in every build.",
      "zt_role": "PIP for vulnerability scanning and AD exposure monitoring."
    },
    {
      "id": "digicert",
      "name": "DigiCert",
      "product": "CertCentral / DigiCert ONE",
      "category": "PKI / Certificate Management",
      "icon": "\ud83d\udcdc",
      "roles": [
        "PIP"
      ],
      "pillar": "Visibility & Analytics",
      "capabilities": [
        "Discovery & Baselining"
      ],
      "nist_1800_35": true,
      "builds": "E1, E2, E3, E4 (all)",
      "description": "PKI/certificate management PIP in every build.",
      "zt_role": "PIP providing certificate lifecycle and trust anchor data."
    },
    {
      "id": "splunk",
      "name": "Splunk",
      "product": "Enterprise Security",
      "category": "SIEM / SOAR",
      "icon": "\ud83d\udfe2",
      "roles": [
        "PIP",
        "PE"
      ],
      "pillar": "Visibility & Analytics",
      "capabilities": [
        "SIEM",
        "Threat Detection & Intelligence",
        "Machine Learning / UEBA"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Industry SIEM leader \u2014 not an SP 1800-35 collaborator but dominant in DoD.",
      "zt_role": "PIP providing security telemetry. PE for risk scoring and adaptive policies."
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
        "Discovery & Baselining",
        "Threat Detection & Intelligence"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Agentless cloud security \u2014 not an SP 1800-35 collaborator.",
      "zt_role": "PIP for cloud posture and risk visibility."
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
        "Machine Learning / UEBA"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Network detection & response \u2014 not an SP 1800-35 collaborator.",
      "zt_role": "PIP providing network-layer behavioral telemetry."
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
        "SOAR",
        "Incident Response",
        "API Standard"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Industry SOAR leader \u2014 not an SP 1800-35 collaborator.",
      "zt_role": "PE driving automated response decisions across PEPs."
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
        "SOAR",
        "API Standard",
        "Artificial Intelligence"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Security Fabric orchestration \u2014 not an SP 1800-35 collaborator.",
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
        "API Standard",
        "Artificial Intelligence"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Policy-as-code IaC \u2014 not an SP 1800-35 collaborator.",
      "zt_role": "PEP enforcing policy-as-code on infrastructure changes."
    },
    {
      "id": "trellix",
      "name": "Trellix",
      "product": "Trellix XDR Platform",
      "category": "XDR / Endpoint",
      "icon": "\ud83d\udee1\ufe0f",
      "roles": [
        "PIP",
        "PEP"
      ],
      "pillar": "Automation & Orchestration",
      "capabilities": [
        "SOAR",
        "Incident Response"
      ],
      "nist_1800_35": true,
      "builds": "E2B5",
      "description": "XDR/endpoint platform in Enterprise 2 SDP build.",
      "zt_role": "PIP for threat telemetry. PEP for automated response on endpoints."
    }
  ],
  "capabilities_simple": {
    "User": [
      "Authentication",
      "Authorization",
      "Privileged Access Management (PAM)",
      "Federated Identity"
    ],
    "Device": [
      "Device Authentication",
      "Device Authorization",
      "Compliance & Posture",
      "Attack Surface Reduction"
    ],
    "Network/Environment": [
      "Software-Defined Networking (SDN)",
      "Macro Segmentation",
      "Microsegmentation",
      "Software-Defined Perimeter (SDP)",
      "Traffic Inspection"
    ],
    "Application & Workload": [
      "Software Defined Compute",
      "DevSecOps",
      "Software Supply Chain",
      "Application Delivery",
      "Application Authorization"
    ],
    "Data": [
      "Data Storage Security",
      "Data Tagging & Classification",
      "Data Loss Prevention (DLP)",
      "Data Rights Management (DRM)"
    ],
    "Visibility & Analytics": [
      "Discovery & Baselining",
      "SIEM",
      "Machine Learning / UEBA",
      "Threat Detection & Intelligence"
    ],
    "Automation & Orchestration": [
      "API Standard",
      "Incident Response",
      "SOAR",
      "Artificial Intelligence"
    ]
  }
};
