// DoD ZT Architect — Vendor-to-Capability Mapping Data
// Capabilities: DoD ZT RA v2.0 (45 Capabilities, 152 Activities)
// Vendors: 117 products mapped to all 45 capabilities
// NIST SP 1800-35 Collaborators: 51
// Generated: 2026-07-02

const ZT_DATA = {
  "metadata": {
    "capability_source": "DoD Zero Trust Reference Architecture v2.0 — Capability Execution Roadmap (45 Capabilities, 152 Activities)",
    "vendor_source": "NIST SP 1800-35 (Final, June 2025) + comprehensive industry analysis",
    "nist_collaborators": 51,
    "total_vendors": 117,
    "total_capabilities": 45,
    "pillars": 7,
    "note": "Vendors marked nist_1800_35=true are actual SP 1800-35 collaborators. Others are leading industry ZT tools mapped to DoD capabilities."
  },
  "capabilities": {
    "User": [
      {
        "id": "1.1",
        "name": "User Inventory",
        "desc": "Establish and maintain a comprehensive inventory of all users (regular, privileged, non-person entities) across managed IdP/ICAM and local application accounts."
      },
      {
        "id": "1.2",
        "name": "Conditional User Access",
        "desc": "Implement dynamic, attribute-based access control using enterprise roles, rules, and risk signals to enable/disable privileges dynamically."
      },
      {
        "id": "1.3",
        "name": "Multi-Factor Authentication",
        "desc": "Deploy centralized phishing-resistant MFA integrated with PKI (CAC/PIV) and alternative flexible tokens including biometrics."
      },
      {
        "id": "1.4",
        "name": "Privileged Access Management",
        "desc": "Implement PAM solution with just-in-time (JIT) and just-enough-administration (JEA) access, real-time approvals, and analytics integration."
      },
      {
        "id": "1.5",
        "name": "Identity Federation & Credentialing",
        "desc": "Establish enterprise identity lifecycle management processes integrated with organizational and enterprise ICAM/IdP solutions."
      },
      {
        "id": "1.6",
        "name": "Behavioral, Contextual ID & Biometrics",
        "desc": "Deploy UEBA and UAM tooling integrated with identity providers for behavioral analytics and pattern-based access decision making."
      },
      {
        "id": "1.7",
        "name": "Least Privileged Access",
        "desc": "Enforce deny-by-default policies, audit/revoke excess permissions, and implement reduced default permission levels with periodic access reviews."
      },
      {
        "id": "1.8",
        "name": "Continuous Authentication",
        "desc": "Progress from single session authentication to periodic and continuous transaction-based authentication using security attributes and user patterns."
      },
      {
        "id": "1.9",
        "name": "Integrated ICAM Platform",
        "desc": "Implement enterprise PKI/IdP solutions in centralized or federated fashion with standardized attributes, biometrics, and cross-organization trust."
      }
    ],
    "Device": [
      {
        "id": "2.1",
        "name": "Device Inventory",
        "desc": "Establish and maintain a comprehensive inventory of all devices (managed and unmanaged) across the enterprise."
      },
      {
        "id": "2.2",
        "name": "Device Detection & Compliance",
        "desc": "Implement device health attestation and compliance policies ensuring devices meet organizational security standards before access is granted."
      },
      {
        "id": "2.3",
        "name": "Device Authorization w/ Real-Time Inspection",
        "desc": "Continuously evaluate device posture and compliance in real-time as a condition for access decisions."
      },
      {
        "id": "2.4",
        "name": "Remote Access",
        "desc": "Implement zero trust remote access solutions replacing traditional VPN with deny-by-default, identity-aware access to specific resources."
      },
      {
        "id": "2.5",
        "name": "Automated Asset, Vulnerability & Patch Management",
        "desc": "Automate device asset management, vulnerability scanning, and patch deployment across the enterprise endpoint fleet."
      },
      {
        "id": "2.6",
        "name": "Unified Endpoint Management & MDM",
        "desc": "Deploy unified endpoint management (UEM/MDM) for centralized configuration, compliance, and security policy enforcement across all device types."
      },
      {
        "id": "2.7",
        "name": "EDR & XDR",
        "desc": "Deploy EDR/XDR capabilities for continuous endpoint monitoring, threat detection, prevention, and automated response."
      }
    ],
    "Network/Environment": [
      {
        "id": "5.1",
        "name": "Data Flow Mapping",
        "desc": "Discover, map, and maintain visibility into all data flows across the network environment (on-premises, cloud, and hybrid)."
      },
      {
        "id": "5.2",
        "name": "Software Defined Networking",
        "desc": "Implement SDN/SD-WAN capabilities to enable programmable, policy-driven network infrastructure and dynamic traffic control."
      },
      {
        "id": "5.3",
        "name": "Macro Segmentation",
        "desc": "Divide the network into broad security zones to reduce attack surface and limit lateral movement between major trust boundaries."
      },
      {
        "id": "5.4",
        "name": "Micro Segmentation",
        "desc": "Implement granular, workload-level network segmentation using security groups and software-defined policies to isolate individual applications and workloads."
      }
    ],
    "Application & Workload": [
      {
        "id": "3.1",
        "name": "Application Inventory",
        "desc": "Establish and maintain a comprehensive inventory of all applications and workloads across on-premises, cloud, and SaaS environments."
      },
      {
        "id": "3.2",
        "name": "Secure Software Development & Integration",
        "desc": "Implement secure SDLC practices including code security scanning, CI/CD pipeline security, and DevSecOps integration."
      },
      {
        "id": "3.3",
        "name": "Software Risk Management",
        "desc": "Assess and manage supply chain risk in software including SBOM generation, dependency scanning, and third-party component risk evaluation."
      },
      {
        "id": "3.4",
        "name": "Resource Authorization & Integration",
        "desc": "Integrate applications with enterprise identity provider and policy engines for centralized, policy-based authorization."
      },
      {
        "id": "3.5",
        "name": "Continuous Monitoring & Ongoing Authorizations",
        "desc": "Implement continuous monitoring of application security posture and transition to ongoing authorization (cATO) frameworks."
      }
    ],
    "Data": [
      {
        "id": "4.1",
        "name": "Data Catalog Risk Alignment",
        "desc": "Discover, classify, and catalog all data assets and align them with risk management frameworks and impact levels."
      },
      {
        "id": "4.2",
        "name": "Enterprise Data Governance",
        "desc": "Establish enterprise-wide data governance policies, standards, and stewardship for data classification and protection."
      },
      {
        "id": "4.3",
        "name": "Data Labeling & Tagging",
        "desc": "Automatically and manually classify and tag data with sensitivity labels and security classification markers to prevent spillage."
      },
      {
        "id": "4.4",
        "name": "Data Monitoring & Sensing",
        "desc": "Continuously monitor data access patterns, usage, and movement to detect anomalies and unauthorized data handling."
      },
      {
        "id": "4.5",
        "name": "Data Encryption & Rights Management",
        "desc": "Encrypt data at rest, in transit, and in use; implement Digital Rights Management (DRM) to enforce persistent data protection policies."
      },
      {
        "id": "4.6",
        "name": "Data Loss Prevention",
        "desc": "Deploy DLP policies and technologies to prevent unauthorized data exfiltration, sharing, or spillage across endpoints, cloud, and networks."
      },
      {
        "id": "4.7",
        "name": "Data Access Control",
        "desc": "Implement granular, attribute-based data access controls integrated with enterprise identity and classification systems."
      }
    ],
    "Visibility & Analytics": [
      {
        "id": "7.1",
        "name": "Log All Traffic",
        "desc": "Collect and retain comprehensive logs of all network traffic, transactions, and access events across the enterprise."
      },
      {
        "id": "7.2",
        "name": "SIEM",
        "desc": "Deploy enterprise SIEM to aggregate, correlate, and analyze security events from all pillars and data sources."
      },
      {
        "id": "7.3",
        "name": "Common Security & Risk Analytics",
        "desc": "Establish standardized threat detection analytics, alerting, and risk scoring across all security telemetry sources."
      },
      {
        "id": "7.4",
        "name": "User & Entity Behavior Analytics",
        "desc": "Deploy UEBA to establish behavioral baselines and detect anomalous user, device, and entity activities indicative of threats."
      },
      {
        "id": "7.5",
        "name": "Threat Intelligence Integration",
        "desc": "Integrate threat intelligence feeds and indicators of compromise (IOCs) into security analytics for proactive detection and response."
      },
      {
        "id": "7.6",
        "name": "Automated Dynamic Policies",
        "desc": "Use ML/AI-driven analytics to automatically adjust and enforce dynamic security policies based on real-time threat and risk conditions."
      }
    ],
    "Automation & Orchestration": [
      {
        "id": "6.1",
        "name": "Policy Decision Point & Orchestration",
        "desc": "Implement centralized policy decision points that enforce Zero Trust access decisions across all pillars and enforcement points."
      },
      {
        "id": "6.2",
        "name": "Critical Process Automation",
        "desc": "Automate manual security processes and Tier-1 SOC tasks to increase speed and consistency of security operations."
      },
      {
        "id": "6.3",
        "name": "Machine Learning",
        "desc": "Apply machine learning models to security analytics for anomaly detection, risk scoring, and pattern recognition across pillars."
      },
      {
        "id": "6.4",
        "name": "Artificial Intelligence",
        "desc": "Leverage AI for advanced threat hunting, automated investigation, and adaptive security decision-making at scale."
      },
      {
        "id": "6.5",
        "name": "SOAR",
        "desc": "Deploy SOAR platform to orchestrate incident response workflows, automate containment/remediation actions, and standardize playbooks."
      },
      {
        "id": "6.6",
        "name": "API Standardization",
        "desc": "Standardize APIs across security tools and platforms to enable interoperability, data sharing, and integrated automation."
      },
      {
        "id": "6.7",
        "name": "SOC & Incident Response",
        "desc": "Establish SOC operations with integrated case management, incident investigation, and coordinated response capabilities across the enterprise."
      }
    ]
  },
  "vendors": [
    {
      "id": "okta",
      "name": "Okta",
      "product": "Okta Identity Cloud / Workforce Identity",
      "category": "Identity & Access Management",
      "icon": "🔐",
      "roles": [
        "PE",
        "PIP"
      ],
      "pillar": "User",
      "capabilities": [
        "1.1",
        "1.2",
        "1.3",
        "1.5",
        "1.7",
        "1.8",
        "1.9"
      ],
      "nist_1800_35": true,
      "builds": "E1B1, E1B2, E1B3",
      "description": "Cloud-native identity provider with SSO, adaptive MFA, lifecycle management, and universal directory.",
      "zt_role": "PE/PDP for identity decisions. PIP providing identity attributes to other PEPs. Lifecycle management for user inventory and provisioning."
    },
    {
      "id": "ms-entra",
      "name": "Microsoft",
      "product": "Entra ID + Conditional Access + Identity Protection",
      "category": "Identity & Access Management",
      "icon": "🔵",
      "roles": [
        "PE",
        "PIP"
      ],
      "pillar": "User",
      "capabilities": [
        "1.1",
        "1.2",
        "1.3",
        "1.5",
        "1.6",
        "1.7",
        "1.8",
        "1.9"
      ],
      "nist_1800_35": true,
      "builds": "E3B1, E3B2, E3B3, E3B5",
      "description": "Broadest PE coverage in SP 1800-35 — PE/PDP in 4 builds. Conditional Access with risk-based policies, Identity Protection for UEBA.",
      "zt_role": "PE/PDP via Conditional Access. PIP through Identity Protection risk scoring and continuous authentication."
    },
    {
      "id": "ms-entra-gov",
      "name": "Microsoft",
      "product": "Entra ID Governance (PIM + Entitlement Mgmt)",
      "category": "Identity Governance",
      "icon": "📋",
      "roles": [
        "PIP"
      ],
      "pillar": "User",
      "capabilities": [
        "1.1",
        "1.4",
        "1.7"
      ],
      "nist_1800_35": true,
      "builds": "E3B1-B5",
      "description": "Identity governance, access reviews, entitlement management, and Privileged Identity Management (PIM) for JIT/JEA.",
      "zt_role": "PIP for access certifications and governance data. PIM provides JIT elevation to the PE."
    },
    {
      "id": "ping",
      "name": "Ping Identity",
      "product": "PingFederate / PingOne / PingID",
      "category": "Identity & Access Management",
      "icon": "🟡",
      "roles": [
        "PE",
        "PA"
      ],
      "pillar": "User",
      "capabilities": [
        "1.1",
        "1.2",
        "1.3",
        "1.5",
        "1.7",
        "1.8",
        "1.9"
      ],
      "nist_1800_35": true,
      "builds": "E2B1",
      "description": "PE/PA (PDP) in Enterprise 2 EIG Crawl build. Federation, MFA, and intelligent identity platform.",
      "zt_role": "PE/PA making identity-driven access decisions via federation. PingID for MFA."
    },
    {
      "id": "ibm-verify",
      "name": "IBM",
      "product": "Security Verify (Access + SaaS)",
      "category": "Identity & Access Management",
      "icon": "🟦",
      "roles": [
        "PE"
      ],
      "pillar": "User",
      "capabilities": [
        "1.1",
        "1.2",
        "1.3",
        "1.5",
        "1.8",
        "1.9"
      ],
      "nist_1800_35": true,
      "builds": "E4B3",
      "description": "PE/PDP for IAM in Enterprise 4 EIG Run build. Federation, adaptive access, and risk-based authentication.",
      "zt_role": "PE/PDP for identity and access decisions in IBM-centric architecture."
    },
    {
      "id": "sailpoint",
      "name": "SailPoint",
      "product": "IdentityIQ / Identity Security Cloud",
      "category": "Identity Governance",
      "icon": "🪪",
      "roles": [
        "PIP"
      ],
      "pillar": "User",
      "capabilities": [
        "1.1",
        "1.4",
        "1.7"
      ],
      "nist_1800_35": true,
      "builds": "E1B1-B6, E2B1-B6, E3B1-B5 (all)",
      "description": "Identity governance PIP in nearly every build. Access certification, segregation of duties, least-privilege enforcement.",
      "zt_role": "PIP providing identity governance and access certification data to the PE."
    },
    {
      "id": "radiant",
      "name": "Radiant Logic",
      "product": "RadiantOne Federated Identity",
      "category": "Identity Data Virtualization",
      "icon": "🔗",
      "roles": [
        "PIP"
      ],
      "pillar": "User",
      "capabilities": [
        "1.1",
        "1.5",
        "1.9"
      ],
      "nist_1800_35": true,
      "builds": "E1, E2, E3 (all)",
      "description": "Identity data aggregation PIP across nearly all builds. Virtual directory unifying identity from AD, LDAP, HR systems.",
      "zt_role": "PIP aggregating identity data from multiple directories into a unified virtual view for the PE."
    },
    {
      "id": "cyberark",
      "name": "CyberArk",
      "product": "Privileged Access Manager / Identity Security Platform",
      "category": "Privileged Access Management",
      "icon": "🗝️",
      "roles": [
        "PEP",
        "PE"
      ],
      "pillar": "User",
      "capabilities": [
        "1.4",
        "1.3",
        "1.7",
        "1.8"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Industry-leading PAM — JIT/JEA access, credential vaulting, session isolation, continuous monitoring of privileged sessions.",
      "zt_role": "PEP for privileged sessions (brokering, recording). PE for privileged access decisions with JIT elevation workflows."
    },
    {
      "id": "beyondtrust",
      "name": "BeyondTrust",
      "product": "Privileged Remote Access / Password Safe",
      "category": "Privileged Access Management",
      "icon": "🛡️",
      "roles": [
        "PEP",
        "PE"
      ],
      "pillar": "User",
      "capabilities": [
        "1.4",
        "1.3",
        "1.7",
        "1.8"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "PAM with JIT access, credential management, session monitoring, and least-privilege enforcement.",
      "zt_role": "PEP for privileged session brokering. PE for JIT privileged access decisions."
    },
    {
      "id": "delinea",
      "name": "Delinea",
      "product": "Privileged Access Service / Secret Server",
      "category": "Privileged Access Management",
      "icon": "🔑",
      "roles": [
        "PEP",
        "PE"
      ],
      "pillar": "User",
      "capabilities": [
        "1.4",
        "1.3",
        "1.7"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "PAM with secret management, JIT access, and API-driven credential brokering.",
      "zt_role": "PEP for credential vaulting and session brokering. PE for JIT privileged access decisions."
    },
    {
      "id": "yubico",
      "name": "Yubico",
      "product": "YubiKey / YubiEnterprise",
      "category": "Hardware MFA / FIDO2",
      "icon": "🥇",
      "roles": [
        "PEP"
      ],
      "pillar": "User",
      "capabilities": [
        "1.3",
        "1.8"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Phishing-resistant hardware MFA via FIDO2/WebAuthn. Supports PIV smart card (CAC/PIV-compatible) and OTP.",
      "zt_role": "PEP enforcing hardware-backed phishing-resistant MFA. PIV mode enables CAC/PIV-compatible authentication for DoD PKI."
    },
    {
      "id": "duo",
      "name": "Cisco",
      "product": "Duo Security",
      "category": "MFA / Access Control",
      "icon": "📱",
      "roles": [
        "PEP",
        "PIP"
      ],
      "pillar": "User",
      "capabilities": [
        "1.3",
        "1.6",
        "1.8"
      ],
      "nist_1800_35": true,
      "builds": "E2B1",
      "description": "MFA PEP in E2B1. Device health checks, push-based MFA, risk-based authentication with UAM capabilities.",
      "zt_role": "PEP for MFA enforcement. PIP for device health and behavioral signals feeding the PE."
    },
    {
      "id": "ivanti-iam",
      "name": "Ivanti",
      "product": "Neurons for IAM / Access (Zero Sign-On)",
      "category": "UEM / Identity",
      "icon": "📱",
      "roles": [
        "PE",
        "PIP",
        "PEP"
      ],
      "pillar": "User",
      "capabilities": [
        "1.3",
        "1.5",
        "1.8"
      ],
      "nist_1800_35": true,
      "builds": "E1B1 (ZSO PE), E1B2-B6 (UEM PIP)",
      "description": "PE/PDP in E1B1 (Zero Sign-On), PIP for endpoint management in later builds. Device-bound SSO and MFA.",
      "zt_role": "PE for device-based ZSO auth. PIP for endpoint compliance. PEP via Ivanti Tunnel."
    },
    {
      "id": "omnissa",
      "name": "Omnissa (Broadcom)",
      "product": "Workspace ONE (Intelligent Hub)",
      "category": "UEM / Identity",
      "icon": "🏢",
      "roles": [
        "PIP",
        "PEP"
      ],
      "pillar": "User",
      "capabilities": [
        "1.5",
        "1.8"
      ],
      "nist_1800_35": true,
      "builds": "E1B2-B6",
      "description": "UEM PIP providing endpoint identity and compliance attributes to the PE. (Formerly VMware Workspace ONE.)",
      "zt_role": "PIP for UEM/endpoint compliance data. PEP for access policy enforcement on managed devices."
    },
    {
      "id": "hid-global",
      "name": "HID Global",
      "product": "HID Authentication Platform / ActivID",
      "category": "PKI / Smart Card / MFA",
      "icon": "🪪",
      "roles": [
        "PEP"
      ],
      "pillar": "User",
      "capabilities": [
        "1.3",
        "1.5",
        "1.9"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "PKI smart card issuance and management, CAC/PIV credential lifecycle, certificate-based authentication.",
      "zt_role": "PEP for PKI-based authentication. CAC/PIV credential management for DoD PKI integration."
    },
    {
      "id": "teleport",
      "name": "Teleport",
      "product": "Teleport Access Plane",
      "category": "Identity-Native Infrastructure Access",
      "icon": "✈️",
      "roles": [
        "PE",
        "PEP"
      ],
      "pillar": "User",
      "capabilities": [
        "1.2",
        "1.3",
        "1.5",
        "1.7",
        "1.8"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Identity-native access plane for SSH, Kubernetes, databases, and web apps with SSO, short-lived certificates, and audit logging.",
      "zt_role": "PE for access decisions using short-lived certs. PEP mediating all infrastructure access with continuous session recording."
    },
    {
      "id": "ms-intune",
      "name": "Microsoft",
      "product": "Intune / Endpoint Manager",
      "category": "Device Management",
      "icon": "💻",
      "roles": [
        "PIP",
        "PDP",
        "PEP"
      ],
      "pillar": "Device",
      "capabilities": [
        "2.1",
        "2.2",
        "2.3",
        "2.4",
        "2.5",
        "2.6"
      ],
      "nist_1800_35": true,
      "builds": "E3B2, E3B3",
      "description": "PDP for device compliance policy in E3B2. PIP feeding Conditional Access. Full UEM/MDM for Windows, iOS, Android.",
      "zt_role": "PDP for device compliance decisions. PEP enforcing policies on endpoints. Feeds Conditional Access PE."
    },
    {
      "id": "forescout",
      "name": "Forescout",
      "product": "eyeSight / eyeControl / eyeExtend",
      "category": "Network Access Control",
      "icon": "👁️",
      "roles": [
        "PIP",
        "PDP",
        "PEP"
      ],
      "pillar": "Device",
      "capabilities": [
        "2.1",
        "2.2",
        "2.3"
      ],
      "nist_1800_35": true,
      "builds": "E3B2, E3B3, E3B4",
      "description": "Co-PDP in 3 Enterprise 3 builds — endpoint compliance and NAC. Agentless device discovery, classification, and control.",
      "zt_role": "PDP for compliance decisions. PIP for endpoint visibility. PEP via eyeControl enforcement."
    },
    {
      "id": "maas360",
      "name": "IBM",
      "product": "MaaS360",
      "category": "MDM / UEM",
      "icon": "📲",
      "roles": [
        "PIP"
      ],
      "pillar": "Device",
      "capabilities": [
        "2.1",
        "2.2",
        "2.6"
      ],
      "nist_1800_35": true,
      "builds": "E4B3",
      "description": "MDM/UEM PIP for laptops and mobile in Enterprise 4. Mobile device compliance and configuration management.",
      "zt_role": "PIP providing mobile device management and compliance data."
    },
    {
      "id": "zimperium",
      "name": "Zimperium",
      "product": "Mobile Threat Defense (MTD)",
      "category": "Mobile Security",
      "icon": "📱",
      "roles": [
        "PIP",
        "PEP"
      ],
      "pillar": "Device",
      "capabilities": [
        "2.2",
        "2.3",
        "2.7"
      ],
      "nist_1800_35": true,
      "builds": "E1B1",
      "description": "Mobile threat defense PIP in E1B1. On-device ML for mobile threat detection (malware, phishing, network attacks).",
      "zt_role": "PIP providing mobile device security telemetry. PEP enforcing mobile threat response actions."
    },
    {
      "id": "lookout",
      "name": "Lookout",
      "product": "Mobile Endpoint Security / CASB",
      "category": "Mobile Security",
      "icon": "🔭",
      "roles": [
        "PIP"
      ],
      "pillar": "Device",
      "capabilities": [
        "2.2",
        "2.3"
      ],
      "nist_1800_35": true,
      "builds": "E3B1",
      "description": "Mobile endpoint security PIP in E3B1. Mobile phishing, app risk, and device posture monitoring.",
      "zt_role": "PIP for mobile threat defense telemetry."
    },
    {
      "id": "pcmatic",
      "name": "PC Matic",
      "product": "PC Matic Pro / Apex",
      "category": "Endpoint Protection",
      "icon": "🖥️",
      "roles": [
        "PIP"
      ],
      "pillar": "Device",
      "capabilities": [
        "2.2",
        "2.5"
      ],
      "nist_1800_35": true,
      "builds": "E3B1, E3B2",
      "description": "Endpoint protection PIP in Enterprise 3 builds. Application allowlisting and automated patch management.",
      "zt_role": "PIP providing endpoint protection and posture data."
    },
    {
      "id": "crowdstrike",
      "name": "CrowdStrike",
      "product": "Falcon Platform (EDR/XDR/NGAV)",
      "category": "EDR / XDR",
      "icon": "🦅",
      "roles": [
        "PIP",
        "PEP"
      ],
      "pillar": "Device",
      "capabilities": [
        "2.2",
        "2.3",
        "2.7"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Industry-leading EDR — dominant in DoD/IC. Cloud-native platform with NGAV, threat hunting, and automated response.",
      "zt_role": "PIP for device health/threat telemetry feeding the PE. PEP for blocking malicious activity on endpoints."
    },
    {
      "id": "sentinelone",
      "name": "SentinelOne",
      "product": "Singularity Platform",
      "category": "EDR / XDR",
      "icon": "⚡",
      "roles": [
        "PIP",
        "PEP"
      ],
      "pillar": "Device",
      "capabilities": [
        "2.2",
        "2.7"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Autonomous AI-powered EDR/XDR with real-time prevention, threat hunting, and one-click remediation.",
      "zt_role": "PIP for endpoint telemetry. PEP for autonomous threat prevention and response on devices."
    },
    {
      "id": "mde",
      "name": "Microsoft",
      "product": "Defender for Endpoint (MDE)",
      "category": "EDR / XDR",
      "icon": "🛡️",
      "roles": [
        "PIP",
        "PEP"
      ],
      "pillar": "Device",
      "capabilities": [
        "2.2",
        "2.3",
        "2.7"
      ],
      "nist_1800_35": true,
      "builds": "E3B1-B5",
      "description": "Cloud-native EDR/XDR integrated with Entra Conditional Access. Vulnerability management, threat protection, and auto-investigation.",
      "zt_role": "PIP for device posture and threat signals. PEP for automated endpoint response. Feeds Conditional Access for device risk."
    },
    {
      "id": "trellix",
      "name": "Trellix",
      "product": "Trellix XDR Platform (FireEye heritage)",
      "category": "XDR / Endpoint",
      "icon": "🗡️",
      "roles": [
        "PIP",
        "PEP"
      ],
      "pillar": "Device",
      "capabilities": [
        "2.7",
        "2.2"
      ],
      "nist_1800_35": true,
      "builds": "E2B5",
      "description": "XDR/endpoint platform in Enterprise 2 SDP build. FireEye heritage with advanced threat detection.",
      "zt_role": "PIP for threat telemetry. PEP for automated response on endpoints."
    },
    {
      "id": "jamf",
      "name": "Jamf",
      "product": "Jamf Pro / Jamf Protect",
      "category": "Apple Device Management",
      "icon": "🍎",
      "roles": [
        "PIP",
        "PEP"
      ],
      "pillar": "Device",
      "capabilities": [
        "2.1",
        "2.2",
        "2.6",
        "2.7"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Apple enterprise mobility management for macOS/iOS. Jamf Protect for macOS EDR capabilities.",
      "zt_role": "PIP for Apple device inventory and compliance. PEP for device policy enforcement on macOS/iOS fleet."
    },
    {
      "id": "ivanti-uem",
      "name": "Ivanti",
      "product": "Neurons for UEM (Endpoint Manager)",
      "category": "UEM / Endpoint Management",
      "icon": "🖥️",
      "roles": [
        "PIP",
        "PEP"
      ],
      "pillar": "Device",
      "capabilities": [
        "2.1",
        "2.2",
        "2.5",
        "2.6"
      ],
      "nist_1800_35": true,
      "builds": "E1B2-B6",
      "description": "UEM PIP for endpoint management and patch automation across Windows, macOS, and mobile devices.",
      "zt_role": "PIP for device inventory and patch status. PEP for automated compliance remediation on endpoints."
    },
    {
      "id": "absolute",
      "name": "Absolute Software",
      "product": "Absolute Resilience",
      "category": "Endpoint Resilience",
      "icon": "📍",
      "roles": [
        "PIP"
      ],
      "pillar": "Device",
      "capabilities": [
        "2.1",
        "2.2",
        "2.3"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Firmware-embedded endpoint persistence for device tracking, compliance, and remote remediation.",
      "zt_role": "PIP providing immutable device location, compliance, and posture telemetry."
    },
    {
      "id": "pa-ngfw",
      "name": "Palo Alto Networks",
      "product": "NGFW / GlobalProtect (Strata)",
      "category": "Network Security",
      "icon": "🛡️",
      "roles": [
        "PEP"
      ],
      "pillar": "Network/Environment",
      "capabilities": [
        "5.1",
        "5.2",
        "5.3"
      ],
      "nist_1800_35": true,
      "builds": "E2B1, E3B1, E3B2, E4B3 (all)",
      "description": "PEP for network enforcement in nearly every build. Next-gen firewall, SD-WAN, and macro segmentation.",
      "zt_role": "PEP at network boundaries — the primary network-layer enforcement point for macro segmentation and traffic inspection."
    },
    {
      "id": "pa-prisma-access",
      "name": "Palo Alto Networks",
      "product": "Prisma Access (SASE/SSE)",
      "category": "SSE / ZTNA",
      "icon": "☁️",
      "roles": [
        "PEP",
        "PE"
      ],
      "pillar": "Network/Environment",
      "capabilities": [
        "5.3",
        "5.4"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Cloud-delivered SSE/SASE platform for secure access service edge with ZTNA, CASB, SWG.",
      "zt_role": "PEP for cloud-delivered network enforcement. PE for ZTNA access decisions at the edge."
    },
    {
      "id": "zscaler",
      "name": "Zscaler",
      "product": "ZPA / ZIA / ZDX",
      "category": "SSE / ZTNA",
      "icon": "🌐",
      "roles": [
        "PE",
        "PEP"
      ],
      "pillar": "Network/Environment",
      "capabilities": [
        "5.1",
        "5.3",
        "5.4"
      ],
      "nist_1800_35": true,
      "builds": "E1B2, E1B3 (ZPA as PE/PDP)",
      "description": "PE/PA/PDP in E1B2 & E1B3 (ZPA Central Authority). PEP via service edges. Full SSE stack.",
      "zt_role": "PE via ZPA CA for access decisions. PEP via ZIA/ZPA service edges mediating all traffic. ZDX for data flow mapping."
    },
    {
      "id": "cisco-ise",
      "name": "Cisco",
      "product": "ISE (TrustSec) / Secure Access",
      "category": "NAC / Network Segmentation",
      "icon": "🔵",
      "roles": [
        "PEP",
        "PE"
      ],
      "pillar": "Network/Environment",
      "capabilities": [
        "5.2",
        "5.3"
      ],
      "nist_1800_35": true,
      "builds": "E2B1",
      "description": "Cisco ISE for TrustSec-based macro/micro segmentation and network access control. Secure Firewall for enforcement.",
      "zt_role": "PE for network access decisions (ISE). PEP for TrustSec SGACL enforcement on switches."
    },
    {
      "id": "appgate",
      "name": "Appgate",
      "product": "Appgate SDP",
      "category": "SDP / ZTNA",
      "icon": "🚪",
      "roles": [
        "PE",
        "PEP"
      ],
      "pillar": "Network/Environment",
      "capabilities": [
        "5.4"
      ],
      "nist_1800_35": true,
      "builds": "E2B3, E2B4, E2B5, E2B6",
      "description": "SDP provider in Enterprise 2 builds. Identity-aware, per-application access without network exposure.",
      "zt_role": "PE for SDP access decisions. PEP via client connectors mediating application access."
    },
    {
      "id": "illumio",
      "name": "Illumio",
      "product": "Core / Edge",
      "category": "Microsegmentation",
      "icon": "🔬",
      "roles": [
        "PEP"
      ],
      "pillar": "Network/Environment",
      "capabilities": [
        "5.4"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Leading microsegmentation — workload-level segmentation for data centers and cloud environments.",
      "zt_role": "PEP enforcing per-workload segmentation policies. Visualizes data flows and reduces blast radius."
    },
    {
      "id": "google-beyondcorp",
      "name": "Google Cloud",
      "product": "BeyondCorp Enterprise / Cloud EPP",
      "category": "SASE / Cloud Security",
      "icon": "☁️",
      "roles": [
        "PE",
        "PEP"
      ],
      "pillar": "Network/Environment",
      "capabilities": [
        "5.3",
        "5.4"
      ],
      "nist_1800_35": true,
      "builds": "E4B4, E4B5",
      "description": "SASE provider in Enterprise 4 builds. Context-aware access with no VPN, enforced at Google's edge.",
      "zt_role": "PE for context-aware access. PEP at the edge enforcing identity-based policies."
    },
    {
      "id": "broadcom-nsx",
      "name": "Broadcom (VMware)",
      "product": "NSX (Segmentation / Firewall)",
      "category": "Network Virtualization",
      "icon": "🌐",
      "roles": [
        "PEP"
      ],
      "pillar": "Network/Environment",
      "capabilities": [
        "5.4",
        "5.2"
      ],
      "nist_1800_35": true,
      "builds": "E4B3",
      "description": "Network virtualization and microsegmentation platform for data centers. NSX distributed firewall for workload isolation.",
      "zt_role": "PEP via NSX distributed firewalls enforcing microsegmentation policies per workload."
    },
    {
      "id": "netskope",
      "name": "Netskope",
      "product": "Netskope ONE (SSE/ZTNA)",
      "category": "SSE / CASB / ZTNA",
      "icon": "🔍",
      "roles": [
        "PEP",
        "PE"
      ],
      "pillar": "Network/Environment",
      "capabilities": [
        "5.3",
        "5.4"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Cloud-native SSE platform with ZTNA, CASB, SWG, and DLP. NewEdge infrastructure for traffic inspection.",
      "zt_role": "PEP for cloud access enforcement. PE for ZTNA policy decisions. CASB for SaaS data flow mapping."
    },
    {
      "id": "cato",
      "name": "Cato Networks",
      "product": "Cato SASE Cloud Platform",
      "category": "SASE / SD-WAN",
      "icon": "🔗",
      "roles": [
        "PEP"
      ],
      "pillar": "Network/Environment",
      "capabilities": [
        "5.2",
        "5.3"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Single-vendor SASE platform with global SD-WAN backbone, SWG, FWaaS, and ZTNA.",
      "zt_role": "PEP for all network traffic at the SASE edge. Enforces macro segmentation across global SD-WAN fabric."
    },
    {
      "id": "versa",
      "name": "Versa Networks",
      "product": "VERSARO (SASE/SSE)",
      "category": "SASE / SD-WAN",
      "icon": "🔀",
      "roles": [
        "PEP"
      ],
      "pillar": "Network/Environment",
      "capabilities": [
        "5.2",
        "5.3"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Converged SASE platform with SD-WAN, security, and ZTNA in a single software stack.",
      "zt_role": "PEP for network segmentation and traffic enforcement at branch/edge via Versa branches."
    },
    {
      "id": "fortinet-net",
      "name": "Fortinet",
      "product": "FortiGate / FortiSASE",
      "category": "Network Security / SD-WAN",
      "icon": "🏛️",
      "roles": [
        "PEP",
        "PE"
      ],
      "pillar": "Network/Environment",
      "capabilities": [
        "5.2",
        "5.3",
        "5.4"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "FortiGate NGFW for integrated network security, SD-WAN, and microsegmentation.",
      "zt_role": "PEP for network enforcement. PE for dynamic policy decisions via FortiManager."
    },
    {
      "id": "juniper-mist",
      "name": "Juniper",
      "product": "Mist AI / Session Smart Router (SSR)",
      "category": "SD-WAN / Network",
      "icon": "🟢",
      "roles": [
        "PEP"
      ],
      "pillar": "Network/Environment",
      "capabilities": [
        "5.2"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "AI-driven SD-WAN and network operations. Session Smart Routing for tunnel-less zero trust routing.",
      "zt_role": "PEP for zero trust routing and segmentation at the WAN edge."
    },
    {
      "id": "cisco-sdw",
      "name": "Cisco",
      "product": "SD-WAN (Viptela) / Meraki",
      "category": "SD-WAN / Network",
      "icon": "🔗",
      "roles": [
        "PEP"
      ],
      "pillar": "Network/Environment",
      "capabilities": [
        "5.2"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "SD-WAN for programmable, policy-driven network infrastructure across distributed sites.",
      "zt_role": "PEP enforcing network policies and segmentation at branch sites."
    },
    {
      "id": "cloudflare-zt",
      "name": "Cloudflare",
      "product": "Zero Trust / Access / Gateway",
      "category": "Edge Security / ZTNA",
      "icon": "🟠",
      "roles": [
        "PEP",
        "PE"
      ],
      "pillar": "Network/Environment",
      "capabilities": [
        "5.3",
        "5.4"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Global edge ZTNA — every request evaluated at Cloudflare's edge before reaching origin.",
      "zt_role": "PEP/PE at the edge — identity-aware reverse proxy for all application access."
    },
    {
      "id": "akamai",
      "name": "Akamai",
      "product": "Enterprise Application Access / Guardicore",
      "category": "ZTNA / Microsegmentation",
      "icon": "🌐",
      "roles": [
        "PEP",
        "PE"
      ],
      "pillar": "Network/Environment",
      "capabilities": [
        "5.3",
        "5.4"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Cloud reverse proxy ZTNA + Guardicore microsegmentation for data center workloads.",
      "zt_role": "PEP mediating access to internal applications. Guardicore for microsegmentation enforcement."
    },
    {
      "id": "cisco-secure",
      "name": "Cisco",
      "product": "Secure Access / Umbrella",
      "category": "SSE / DNS Security",
      "icon": "🛡️",
      "roles": [
        "PEP"
      ],
      "pillar": "Network/Environment",
      "capabilities": [
        "5.3"
      ],
      "nist_1800_35": true,
      "builds": "E2B1",
      "description": "Cisco Secure Service Edge — ZTNA (Secure Access), DNS security (Umbrella).",
      "zt_role": "PEP for SSE enforcement. Integrated with ISE for identity context."
    },
    {
      "id": "f5-bigip",
      "name": "F5",
      "product": "BIG-IP APM / ASM / NGINX",
      "category": "Application Delivery / WAF",
      "icon": "🌀",
      "roles": [
        "PEP"
      ],
      "pillar": "Application & Workload",
      "capabilities": [
        "3.4",
        "3.5"
      ],
      "nist_1800_35": true,
      "builds": "E3B1, E3B2",
      "description": "PEP for application delivery/enforcement in Enterprise 3. WAF, APM, API gateway, and load balancing.",
      "zt_role": "PEP at the application layer — WAF, APM, and API gateway enforcement."
    },
    {
      "id": "broadcom-vsphere",
      "name": "Broadcom (VMware)",
      "product": "VMware Infrastructure (vSphere/NSX)",
      "category": "Virtualization",
      "icon": "🖥️",
      "roles": [
        "PEP",
        "PIP"
      ],
      "pillar": "Application & Workload",
      "capabilities": [
        "3.1",
        "3.5"
      ],
      "nist_1800_35": true,
      "builds": "E4B3",
      "description": "Platform (virtualization) in Enterprise 4. Workload hosting with NSX microsegmentation.",
      "zt_role": "PEP via NSX distributed firewalls. Platform for workload hosting and inventory."
    },
    {
      "id": "prisma-cloud",
      "name": "Palo Alto Networks",
      "product": "Prisma Cloud (CNAPP)",
      "category": "Cloud-Native Security",
      "icon": "📦",
      "roles": [
        "PEP",
        "PIP"
      ],
      "pillar": "Application & Workload",
      "capabilities": [
        "3.2",
        "3.3",
        "3.5"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Full lifecycle CNAPP — CSPM, CWPP, IaC scanning, container security, and runtime protection.",
      "zt_role": "PEP for workload runtime policies. PIP for vulnerability, posture, and supply chain risk data."
    },
    {
      "id": "github-adv",
      "name": "GitHub",
      "product": "Advanced Security (CodeQL / Dependabot)",
      "category": "DevSecOps / Secure SDLC",
      "icon": "🐙",
      "roles": [
        "PEP"
      ],
      "pillar": "Application & Workload",
      "capabilities": [
        "3.2",
        "3.3"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Code scanning (CodeQL), dependency review (Dependabot), and secret scanning for secure CI/CD pipelines.",
      "zt_role": "PEP enforcing security gates in CI/CD pipeline. PIP providing SBOM and supply chain risk data."
    },
    {
      "id": "sonatype",
      "name": "Sonatype",
      "product": "Nexus Lifecycle / Repository",
      "category": "SCA / Software Supply Chain",
      "icon": "📦",
      "roles": [
        "PEP"
      ],
      "pillar": "Application & Workload",
      "capabilities": [
        "3.2",
        "3.3"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Software composition analysis — open-source component risk, license compliance, and SBOM generation.",
      "zt_role": "PEP blocking vulnerable components in build pipelines. PIP for supply chain risk scoring."
    },
    {
      "id": "snyk",
      "name": "Snyk",
      "product": "Snyk Platform (Code / Open Source / Container / IaC)",
      "category": "DevSecOps / SCA",
      "icon": "🐺",
      "roles": [
        "PEP"
      ],
      "pillar": "Application & Workload",
      "capabilities": [
        "3.2",
        "3.3"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Developer-first security — code scanning, dependency analysis, container and IaC security in CI/CD.",
      "zt_role": "PEP enforcing security policies in developer workflows. PIP for supply chain risk data."
    },
    {
      "id": "aqua",
      "name": "Aqua Security",
      "product": "Aqua Platform",
      "category": "Cloud-Native Security",
      "icon": "💧",
      "roles": [
        "PEP",
        "PIP"
      ],
      "pillar": "Application & Workload",
      "capabilities": [
        "3.2",
        "3.3",
        "3.5"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Cloud-native application security — container security, IaC scanning, runtime protection.",
      "zt_role": "PEP for container/workload runtime policies. PIP for supply chain and posture data."
    },
    {
      "id": "checkmarx",
      "name": "Checkmarx",
      "product": "Checkmarx One",
      "category": "Application Security Testing",
      "icon": "🔍",
      "roles": [
        "PEP"
      ],
      "pillar": "Application & Workload",
      "capabilities": [
        "3.2"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Static (SAST), dynamic (DAST), interactive (IAST), and software composition analysis for secure SDLC.",
      "zt_role": "PEP enforcing code security gates in CI/CD pipelines."
    },
    {
      "id": "jfrog",
      "name": "JFrog",
      "product": "Artifactory / Xray / Distribution",
      "category": "Software Supply Chain / DevOps",
      "icon": "🐸",
      "roles": [
        "PEP"
      ],
      "pillar": "Application & Workload",
      "capabilities": [
        "3.2",
        "3.3"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "End-to-end DevOps platform with artifact repository, vulnerability scanning, and SBOM generation.",
      "zt_role": "PEP for artifact security gates. PIP providing supply chain provenance and vulnerability data."
    },
    {
      "id": "aws-inspector",
      "name": "AWS",
      "product": "Inspector / CodeGuru / Proton",
      "category": "Cloud Workload Security",
      "icon": "☁️",
      "roles": [
        "PIP"
      ],
      "pillar": "Application & Workload",
      "capabilities": [
        "3.3",
        "3.5"
      ],
      "nist_1800_35": true,
      "builds": "E4B4-B5",
      "description": "Automated vulnerability management for EC2/ECR, software supply chain analysis, and workload monitoring.",
      "zt_role": "PIP providing workload vulnerability and posture data."
    },
    {
      "id": "k8s-opa",
      "name": "CNCF",
      "product": "Kubernetes + OPA/Gatekeeper",
      "category": "Container Orchestration / Policy",
      "icon": "☸️",
      "roles": [
        "PEP"
      ],
      "pillar": "Application & Workload",
      "capabilities": [
        "3.4",
        "3.5"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Container orchestration with Open Policy Agent (OPA) Gatekeeper for policy-as-code admission control.",
      "zt_role": "PEP via OPA admission controllers enforcing authorization policies on workload deployment."
    },
    {
      "id": "servicenow-cmdb",
      "name": "ServiceNow",
      "product": "CMDB / Software Asset Management",
      "category": "Application Inventory / SAM",
      "icon": "📊",
      "roles": [
        "PIP"
      ],
      "pillar": "Application & Workload",
      "capabilities": [
        "3.1"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Enterprise CMDB for application inventory, software asset management, and configuration tracking.",
      "zt_role": "PIP providing authoritative application inventory data to the PE."
    },
    {
      "id": "ms-defender-cloud",
      "name": "Microsoft",
      "product": "Defender for Cloud (CSPM/CWPP)",
      "category": "Cloud Security Posture",
      "icon": "☁️",
      "roles": [
        "PIP"
      ],
      "pillar": "Application & Workload",
      "capabilities": [
        "3.1",
        "3.5"
      ],
      "nist_1800_35": true,
      "builds": "E3B1-B5",
      "description": "Cloud security posture management for multicloud. CSPM, CWPP, and regulatory compliance.",
      "zt_role": "PIP for multicloud workload posture and compliance data."
    },
    {
      "id": "guardium",
      "name": "IBM",
      "product": "Guardium Data Encryption / Data Protection",
      "category": "Data Security",
      "icon": "🔒",
      "roles": [
        "PIP",
        "PEP"
      ],
      "pillar": "Data",
      "capabilities": [
        "4.4",
        "4.5",
        "4.7"
      ],
      "nist_1800_35": true,
      "builds": "E4B3",
      "description": "Data security/encryption PIP in Enterprise 4. Activity monitoring, encryption, and data access controls.",
      "zt_role": "PIP for data security telemetry. PEP for encryption policy enforcement."
    },
    {
      "id": "ms-purview",
      "name": "Microsoft",
      "product": "Purview (DLP / Information Protection)",
      "category": "Data Protection",
      "icon": "🏷️",
      "roles": [
        "PEP",
        "PIP"
      ],
      "pillar": "Data",
      "capabilities": [
        "4.2",
        "4.3",
        "4.4",
        "4.5",
        "4.6",
        "4.7"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Industry DLP leader — data classification, sensitivity labels, DLP policies, and information protection.",
      "zt_role": "PEP enforcing data access/DLP policies. PIP for data classification metadata. Integrated with Entra/Defender."
    },
    {
      "id": "forcepoint-dlp",
      "name": "Forcepoint",
      "product": "DLP / Insider Threat / Data Security",
      "category": "Data Protection",
      "icon": "🛑",
      "roles": [
        "PEP",
        "PIP"
      ],
      "pillar": "Data",
      "capabilities": [
        "4.3",
        "4.6"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Risk-adaptive DLP — behavior-driven data protection across endpoints, network, and cloud.",
      "zt_role": "PEP for data egress policies. PIP for data classification and behavioral risk signals."
    },
    {
      "id": "varonis",
      "name": "Varonis",
      "product": "Data Security Platform",
      "category": "Data Security / DSPM",
      "icon": "📊",
      "roles": [
        "PIP",
        "PEP"
      ],
      "pillar": "Data",
      "capabilities": [
        "4.1",
        "4.4",
        "4.7"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Data security posture management — discover, classify, and monitor data access across SaaS, cloud, and on-prem.",
      "zt_role": "PIP for data discovery and access patterns. PEP for automated access remediation on overexposed data."
    },
    {
      "id": "digicert",
      "name": "DigiCert",
      "product": "CertCentral / DigiCert ONE / Trust Lifecycle Manager",
      "category": "PKI / Certificate Management",
      "icon": "📜",
      "roles": [
        "PIP"
      ],
      "pillar": "Data",
      "capabilities": [
        "4.5",
        "4.7"
      ],
      "nist_1800_35": true,
      "builds": "E1, E2, E3, E4 (all)",
      "description": "PKI/certificate management PIP in every build. Certificate lifecycle, encryption key management.",
      "zt_role": "PIP providing certificate lifecycle and trust anchor data. Enables encryption at rest/transit."
    },
    {
      "id": "virtru",
      "name": "Virtru",
      "product": "Data Protection / Control",
      "category": "Data Encryption / DRM",
      "icon": "🔐",
      "roles": [
        "PEP"
      ],
      "pillar": "Data",
      "capabilities": [
        "4.5",
        "4.7"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Customer-managed encryption and digital rights management for email, files, and SaaS data.",
      "zt_role": "PEP for persistent data encryption and access revocation. DRM controls embedded in data objects."
    },
    {
      "id": "netwrix",
      "name": "Netwrix",
      "product": "Data Security / Auditor",
      "category": "Data Discovery & Classification",
      "icon": "🔍",
      "roles": [
        "PIP"
      ],
      "pillar": "Data",
      "capabilities": [
        "4.1",
        "4.3",
        "4.4"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Data discovery, classification, and access auditing across file shares, databases, and cloud stores.",
      "zt_role": "PIP for data discovery and access pattern telemetry. Audits and alerts on unauthorized data access."
    },
    {
      "id": "qradar",
      "name": "IBM",
      "product": "QRadar XDR / CP4S",
      "category": "SIEM / XDR / SOAR",
      "icon": "🧠",
      "roles": [
        "PIP",
        "PE"
      ],
      "pillar": "Visibility & Analytics",
      "capabilities": [
        "7.1",
        "7.2",
        "7.3",
        "7.4",
        "7.5"
      ],
      "nist_1800_35": true,
      "builds": "E1, E2, E3, E4 (all)",
      "description": "PIP for SIEM/XDR in every build. CP4S for security orchestration. Threat intelligence and analytics.",
      "zt_role": "PIP providing SIEM/XDR telemetry to the PE. CP4S for orchestration."
    },
    {
      "id": "ms-sentinel",
      "name": "Microsoft",
      "product": "Sentinel (Cloud SIEM/SOAR)",
      "category": "SIEM / SOAR",
      "icon": "🛰️",
      "roles": [
        "PIP",
        "PE"
      ],
      "pillar": "Visibility & Analytics",
      "capabilities": [
        "7.1",
        "7.2",
        "7.3",
        "7.4",
        "7.5"
      ],
      "nist_1800_35": true,
      "builds": "E3B1, E3B2",
      "description": "PIP for SIEM/SOAR visibility in Enterprise 3. Cloud-native SIEM with AI-driven analytics.",
      "zt_role": "PIP for enterprise telemetry. Feeds risk scores back to Conditional Access PE."
    },
    {
      "id": "mandiant",
      "name": "Mandiant",
      "product": "Security Validation (MSV) + Threat Intel",
      "category": "Security Validation / Threat Intel",
      "icon": "✅",
      "roles": [
        "PIP"
      ],
      "pillar": "Visibility & Analytics",
      "capabilities": [
        "7.3",
        "7.5"
      ],
      "nist_1800_35": true,
      "builds": "E1, E2, E3, E4 (all)",
      "description": "Security control validation PIP in every build. Validates controls actually detect/block threats.",
      "zt_role": "PIP validating that security controls actually detect/block threats. Threat intelligence feeds."
    },
    {
      "id": "tenable",
      "name": "Tenable",
      "product": "Tenable.ad / .io / NNM / One",
      "category": "Vulnerability Management",
      "icon": "🔎",
      "roles": [
        "PIP"
      ],
      "pillar": "Visibility & Analytics",
      "capabilities": [
        "7.3",
        "7.5"
      ],
      "nist_1800_35": true,
      "builds": "E1, E2, E3, E4 (all)",
      "description": "Vulnerability/AD monitoring PIP in every build. Exposure management and attack surface visibility.",
      "zt_role": "PIP for vulnerability scanning and AD exposure monitoring."
    },
    {
      "id": "splunk",
      "name": "Splunk",
      "product": "Enterprise Security / Cloud",
      "category": "SIEM / SOAR",
      "icon": "🟢",
      "roles": [
        "PIP",
        "PE"
      ],
      "pillar": "Visibility & Analytics",
      "capabilities": [
        "7.1",
        "7.2",
        "7.3",
        "7.4",
        "7.5"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Industry SIEM leader — dominant in DoD. Search, correlation, analytics, and SOAR integration.",
      "zt_role": "PIP providing security telemetry. PE for risk scoring and adaptive policies."
    },
    {
      "id": "elastic-sec",
      "name": "Elastic",
      "product": "Elastic Security (SIEM + EDR)",
      "category": "SIEM / Search",
      "icon": "🟡",
      "roles": [
        "PIP"
      ],
      "pillar": "Visibility & Analytics",
      "capabilities": [
        "7.1",
        "7.2",
        "7.3",
        "7.4"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Open-source SIEM and search platform with EDR, behavioral analytics, and threat hunting.",
      "zt_role": "PIP providing log aggregation, behavioral analytics, and threat detection."
    },
    {
      "id": "google-chronicle",
      "name": "Google Cloud",
      "product": "Chronicle / Mandiant Threat Intel",
      "category": "SIEM / Threat Intel",
      "icon": "🕐",
      "roles": [
        "PIP"
      ],
      "pillar": "Visibility & Analytics",
      "capabilities": [
        "7.2",
        "7.3",
        "7.5"
      ],
      "nist_1800_35": true,
      "builds": "E4B4, E4B5",
      "description": "Cloud-native SIEM with petabyte-scale telemetry retention. Integrated Mandiant threat intelligence.",
      "zt_role": "PIP for large-scale log storage, threat intelligence, and behavioral analytics."
    },
    {
      "id": "crowdstrike-intel",
      "name": "CrowdStrike",
      "product": "Falcon Intelligence / Falcon OverWatch",
      "category": "Threat Intelligence",
      "icon": "🦅",
      "roles": [
        "PIP"
      ],
      "pillar": "Visibility & Analytics",
      "capabilities": [
        "7.4",
        "7.5"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Threat intelligence feeds, managed threat hunting (OverWatch), and adversary activity tracking.",
      "zt_role": "PIP providing threat intelligence, IOC feeds, and managed hunting to the analytics platform."
    },
    {
      "id": "extrahop",
      "name": "ExtraHop",
      "product": "Reveal(x) 360",
      "category": "Network Detection & Response",
      "icon": "📡",
      "roles": [
        "PIP"
      ],
      "pillar": "Visibility & Analytics",
      "capabilities": [
        "7.1",
        "7.4"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Network detection & response — real-time wire data analysis with ML-driven behavioral detection.",
      "zt_role": "PIP providing network-layer behavioral telemetry and anomaly detection."
    },
    {
      "id": "darktrace",
      "name": "Darktrace",
      "product": "Cyber AI Analyst / Antigena",
      "category": "AI-Driven Detection & Response",
      "icon": "🤖",
      "roles": [
        "PIP",
        "PE"
      ],
      "pillar": "Visibility & Analytics",
      "capabilities": [
        "7.4",
        "7.6"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Self-learning AI for cyber defense. Behavioral anomaly detection and autonomous response (Antigena).",
      "zt_role": "PIP for behavioral anomaly detection. PE for autonomous policy adjustments via Antigena."
    },
    {
      "id": "recorded-future",
      "name": "Recorded Future",
      "product": "Threat Intelligence Platform",
      "category": "Threat Intelligence",
      "icon": "🔮",
      "roles": [
        "PIP"
      ],
      "pillar": "Visibility & Analytics",
      "capabilities": [
        "7.5"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "AI-powered threat intelligence platform providing real-time IOC, TTP, and attack surface intelligence.",
      "zt_role": "PIP enriching analytics with contextual threat intelligence, IOCs, and adversary TTPs."
    },
    {
      "id": "corelight",
      "name": "Corelight",
      "product": "Network Evidence (Zeek-based)",
      "category": "Network Visibility / NDR",
      "icon": "💡",
      "roles": [
        "PIP"
      ],
      "pillar": "Visibility & Analytics",
      "capabilities": [
        "7.1",
        "7.4"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Zeek-based network evidence collection — high-fidelity network telemetry for detection and investigation.",
      "zt_role": "PIP providing rich network-layer evidence and metadata for behavioral analytics."
    },
    {
      "id": "aws-guardduty",
      "name": "AWS",
      "product": "GuardDuty / Detective / Security Hub",
      "category": "Cloud Threat Detection",
      "icon": "☁️",
      "roles": [
        "PIP"
      ],
      "pillar": "Visibility & Analytics",
      "capabilities": [
        "7.3",
        "7.4",
        "7.5"
      ],
      "nist_1800_35": true,
      "builds": "E4B4-B5",
      "description": "Cloud-native threat detection for AWS environments. ML-based anomaly detection and security findings aggregation.",
      "zt_role": "PIP providing cloud threat detection and posture data for AWS workloads."
    },
    {
      "id": "gcp-scc",
      "name": "Google Cloud",
      "product": "Security Command Center",
      "category": "Cloud Security Posture",
      "icon": "☁️",
      "roles": [
        "PIP"
      ],
      "pillar": "Visibility & Analytics",
      "capabilities": [
        "7.3",
        "7.5"
      ],
      "nist_1800_35": true,
      "builds": "E4B4-B5",
      "description": "Centralized cloud security posture and threat detection platform for GCP environments.",
      "zt_role": "PIP for cloud posture, misconfig, and threat detection telemetry."
    },
    {
      "id": "wiz",
      "name": "Wiz",
      "product": "Wiz Cloud Security Platform",
      "category": "CNAPP / Cloud Security",
      "icon": "⚡",
      "roles": [
        "PIP"
      ],
      "pillar": "Visibility & Analytics",
      "capabilities": [
        "7.3",
        "7.5"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Agentless cloud security — graph-based CNAPP with CSPM, CWPP, and DSPM in one platform.",
      "zt_role": "PIP for cloud posture, risk prioritization, and attack path analysis."
    },
    {
      "id": "orca",
      "name": "Orca Security",
      "product": "Orca Cloud Security Platform",
      "category": "CNAPP / Agentless",
      "icon": "🐳",
      "roles": [
        "PIP"
      ],
      "pillar": "Visibility & Analytics",
      "capabilities": [
        "7.3",
        "7.5"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Agentless cloud security — CSPM, CWPP, and vulnerability prioritization via side-scanning.",
      "zt_role": "PIP for cloud asset risk, compliance, and vulnerability data."
    },
    {
      "id": "lacework",
      "name": "Lacework",
      "product": "Lacework Polygraph Data Platform",
      "category": "CNAPP",
      "icon": "🧵",
      "roles": [
        "PIP"
      ],
      "pillar": "Visibility & Analytics",
      "capabilities": [
        "7.3",
        "7.4"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Behavioral-based cloud security with polygraph detection for cloud, container, and Kubernetes.",
      "zt_role": "PIP for cloud behavioral analytics and anomaly detection."
    },
    {
      "id": "arcsight",
      "name": "OpenText",
      "product": "ArcSight (ESM/Recon)",
      "category": "SIEM / Enterprise",
      "icon": "🔍",
      "roles": [
        "PIP",
        "PE"
      ],
      "pillar": "Visibility & Analytics",
      "capabilities": [
        "7.1",
        "7.2",
        "7.3",
        "7.5"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Enterprise SIEM — correlation engine, log management, and threat detection.",
      "zt_role": "PIP providing log aggregation and correlation. PE for risk-based alerting."
    },
    {
      "id": "xsoar",
      "name": "Palo Alto Networks",
      "product": "Cortex XSOAR",
      "category": "SOAR",
      "icon": "⚙️",
      "roles": [
        "PE"
      ],
      "pillar": "Automation & Orchestration",
      "capabilities": [
        "6.5",
        "6.7",
        "6.6"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Industry SOAR leader — automated playbooks, case management, and incident response orchestration.",
      "zt_role": "PE driving automated response decisions across PEPs via playbooks."
    },
    {
      "id": "ms-sentinel-soar",
      "name": "Microsoft",
      "product": "Sentinel (SOAR / Playbooks)",
      "category": "SOAR",
      "icon": "🤖",
      "roles": [
        "PE"
      ],
      "pillar": "Automation & Orchestration",
      "capabilities": [
        "6.5",
        "6.7",
        "6.6"
      ],
      "nist_1800_35": true,
      "builds": "E3B1-B5",
      "description": "Sentinel SOAR via Logic Apps-based playbooks. Automated incident response and enrichment.",
      "zt_role": "PE for automated response. Logic Apps playbooks orchestrate response actions across Microsoft and third-party tools."
    },
    {
      "id": "splunk-soar",
      "name": "Splunk",
      "product": "SOAR (Phantom)",
      "category": "SOAR",
      "icon": "👻",
      "roles": [
        "PE"
      ],
      "pillar": "Automation & Orchestration",
      "capabilities": [
        "6.5",
        "6.7",
        "6.6"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "SOAR platform (formerly Phantom) for playbook-driven automated incident response.",
      "zt_role": "PE for automated response decisions. Orchestrates containment/remediation across security tools."
    },
    {
      "id": "fortinet-fabric",
      "name": "Fortinet",
      "product": "FortiAnalyzer / FortiManager / Security Fabric",
      "category": "Security Fabric / Orchestration",
      "icon": "🏛️",
      "roles": [
        "PE",
        "PIP"
      ],
      "pillar": "Automation & Orchestration",
      "capabilities": [
        "6.1",
        "6.5",
        "6.6"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Security Fabric orchestration — automated policy distribution and response across Fortinet ecosystem.",
      "zt_role": "PE for automated policy decisions across the Fortinet Fabric. FortiManager for centralized policy orchestration."
    },
    {
      "id": "terraform",
      "name": "HashiCorp",
      "product": "Terraform Enterprise / Vault",
      "category": "Infrastructure as Code / Secrets",
      "icon": "🏗️",
      "roles": [
        "PEP"
      ],
      "pillar": "Automation & Orchestration",
      "capabilities": [
        "6.6"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Policy-as-code IaC for automated, compliant infrastructure provisioning. Vault for secrets management.",
      "zt_role": "PEP enforcing policy-as-code on infrastructure changes. Vault for secrets lifecycle."
    },
    {
      "id": "ansible",
      "name": "Red Hat",
      "product": "Ansible Automation Platform",
      "category": "IT Automation",
      "icon": "🅰️",
      "roles": [
        "PEP"
      ],
      "pillar": "Automation & Orchestration",
      "capabilities": [
        "6.2",
        "6.6"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Agentless automation for configuration management, patch deployment, and security hardening at scale.",
      "zt_role": "PEP enforcing automated configuration and hardening policies across infrastructure."
    },
    {
      "id": "aws-control-tower",
      "name": "AWS",
      "product": "Control Tower / Config / CloudFormation",
      "category": "Cloud Governance / IaC",
      "icon": "🏛️",
      "roles": [
        "PEP"
      ],
      "pillar": "Automation & Orchestration",
      "capabilities": [
        "6.2",
        "6.6"
      ],
      "nist_1800_35": true,
      "builds": "E4B4-B5",
      "description": "Automated landing zone and governance guardrails for AWS environments. Config for compliance monitoring.",
      "zt_role": "PEP enforcing preventive and detective guardrails on cloud infrastructure."
    },
    {
      "id": "servicenow-secops",
      "name": "ServiceNow",
      "product": "Security Operations / IRM",
      "category": "Security Operations / SOC",
      "icon": "📋",
      "roles": [
        "PE"
      ],
      "pillar": "Automation & Orchestration",
      "capabilities": [
        "6.5",
        "6.7"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "SOC platform with case management, incident response workflows, and vulnerability response.",
      "zt_role": "PE for incident response orchestration. Manages SOC workflows, case assignment, and response tracking."
    },
    {
      "id": "swimlane",
      "name": "Swimlane",
      "product": "Swimlane Turbine",
      "category": "SOAR / Low-Code Automation",
      "icon": "🌊",
      "roles": [
        "PE"
      ],
      "pillar": "Automation & Orchestration",
      "capabilities": [
        "6.5",
        "6.2"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Low-code security automation platform for building custom response playbooks.",
      "zt_role": "PE driving automated response workflows across heterogeneous tool stacks."
    },
    {
      "id": "tines",
      "name": "Tines",
      "product": "Tines Security Automation",
      "category": "Low-Code Automation / SOAR",
      "icon": "🔧",
      "roles": [
        "PE"
      ],
      "pillar": "Automation & Orchestration",
      "capabilities": [
        "6.2",
        "6.5"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "No-code security automation platform for workflow automation and alert triage.",
      "zt_role": "PE for automated alert triage and response workflow execution."
    },
    {
      "id": "opendifi",
      "name": "OpenText",
      "product": "ArcSight (ESM/Recon)",
      "category": "SIEM / SOAR",
      "icon": "🔍",
      "roles": [
        "PIP",
        "PE"
      ],
      "pillar": "Visibility & Analytics",
      "capabilities": [
        "7.1",
        "7.2",
        "7.3",
        "7.5"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Enterprise SIEM — correlation engine, log management, and threat detection.",
      "zt_role": "PIP providing log aggregation and correlation. PE for risk-based alerting."
    },
    {
      "id": "vertex-ai-sec",
      "name": "Google Cloud",
      "product": "Vertex AI Security / Gemini Security",
      "category": "AI / ML Security",
      "icon": "🤖",
      "roles": [
        "PE"
      ],
      "pillar": "Automation & Orchestration",
      "capabilities": [
        "6.3",
        "6.4"
      ],
      "nist_1800_35": true,
      "builds": "E4B4-B5",
      "description": "Generative AI for security operations — threat analysis, natural language investigation, and AI-assisted triage.",
      "zt_role": "PE for AI-driven security decisions. ML models for anomaly detection and risk scoring."
    },
    {
      "id": "ms-copilot-sec",
      "name": "Microsoft",
      "product": "Security Copilot (GPT-4)",
      "category": "AI / ML Security",
      "icon": "🤖",
      "roles": [
        "PE"
      ],
      "pillar": "Automation & Orchestration",
      "capabilities": [
        "6.3",
        "6.4"
      ],
      "nist_1800_35": true,
      "builds": "E3B1-B5",
      "description": "AI assistant for security operations — incident summarization, threat hunting, and automated response.",
      "zt_role": "PE for AI-driven investigation and response. ML models integrated with Sentinel/Defender."
    },
    {
      "id": "darktrace-ai",
      "name": "Darktrace",
      "product": "Cyber AI / Antigena (Automation)",
      "category": "AI-Driven Security",
      "icon": "🤖",
      "roles": [
        "PE"
      ],
      "pillar": "Automation & Orchestration",
      "capabilities": [
        "6.3",
        "6.4"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Self-learning AI for autonomous detection and response. Antigena for automated containment.",
      "zt_role": "PE for AI-driven autonomous response. ML models learn normal behavior and respond to deviations."
    },
    {
      "id": "crowdstrike-charlotte",
      "name": "CrowdStrike",
      "product": "Charlotte AI (Falcon)",
      "category": "AI / ML Security",
      "icon": "🤖",
      "roles": [
        "PE"
      ],
      "pillar": "Automation & Orchestration",
      "capabilities": [
        "6.3",
        "6.4"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Generative AI assistant for Falcon platform — natural language threat hunting and automated triage.",
      "zt_role": "PE for AI-driven investigation. ML for real-time threat classification and scoring."
    },
    {
      "id": "datarobot-sec",
      "name": "DataRobot",
      "product": "DataRobot AI Platform (Security)",
      "category": "AI / ML for Security",
      "icon": "🤖",
      "roles": [
        "PE"
      ],
      "pillar": "Automation & Orchestration",
      "capabilities": [
        "6.3",
        "6.4"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Enterprise AI platform for building and deploying ML models for security analytics and threat scoring.",
      "zt_role": "PE for ML-driven security decisions. Custom models for anomaly detection and risk scoring."
    },
    {
      "id": "twingate",
      "name": "Twingate",
      "product": "Twingate Zero Trust Network Access",
      "category": "ZTNA / Remote Access",
      "icon": "🔌",
      "roles": [
        "PEP",
        "PE"
      ],
      "pillar": "Device",
      "capabilities": [
        "2.4"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Modern ZTNA replacing VPN — identity-aware access to specific resources without network exposure.",
      "zt_role": "PEP mediating remote access. PE for per-resource access decisions."
    },
    {
      "id": "openziti",
      "name": "OpenZiti",
      "product": "OpenZiti (Open Source ZTNA)",
      "category": "Open Source ZTNA",
      "icon": "🔓",
      "roles": [
        "PEP",
        "PE"
      ],
      "pillar": "Device",
      "capabilities": [
        "2.4"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Open-source, programmable zero trust overlay — embeds zero trust directly into applications.",
      "zt_role": "PEP for zero trust overlay network. PE for application-level access decisions."
    },
    {
      "id": "pa-globalprotect",
      "name": "Palo Alto Networks",
      "product": "GlobalProtect (ZTNA)",
      "category": "Remote Access / ZTNA",
      "icon": "🌐",
      "roles": [
        "PEP"
      ],
      "pillar": "Device",
      "capabilities": [
        "2.4"
      ],
      "nist_1800_35": true,
      "builds": "E2B1, E3B1, E3B2",
      "description": "ZTNA replacement for traditional VPN — identity-aware, device-posture-aware remote access.",
      "zt_role": "PEP for remote access enforcement. Device posture checks before granting application access."
    },
    {
      "id": "cisco-anyconnect",
      "name": "Cisco",
      "product": "Secure Client (AnyConnect)",
      "category": "Remote Access / ZTNA",
      "icon": "🔐",
      "roles": [
        "PEP"
      ],
      "pillar": "Device",
      "capabilities": [
        "2.4"
      ],
      "nist_1800_35": true,
      "builds": "E2B1",
      "description": "Zero trust remote access via Cisco Secure Client — device-aware, identity-aware application access.",
      "zt_role": "PEP for remote access enforcement with device posture and identity verification."
    },
    {
      "id": "collibra",
      "name": "Collibra",
      "product": "Data Governance Center",
      "category": "Data Governance",
      "icon": "📚",
      "roles": [
        "PIP"
      ],
      "pillar": "Data",
      "capabilities": [
        "4.2",
        "4.1"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Enterprise data governance — data catalog, policy management, stewardship, and regulatory alignment.",
      "zt_role": "PIP providing data governance policies, classification standards, and data lineage."
    },
    {
      "id": "informatica",
      "name": "Informatica",
      "product": "Intelligent Data Management Cloud",
      "category": "Data Governance / Catalog",
      "icon": "🗂️",
      "roles": [
        "PIP"
      ],
      "pillar": "Data",
      "capabilities": [
        "4.2",
        "4.1"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "AI-powered data governance and cataloging — data discovery, quality, lineage, and policy enforcement.",
      "zt_role": "PIP for data governance metadata, classification, and access policy inputs."
    },
    {
      "id": "gcp-beyondcorp-policy",
      "name": "Google Cloud",
      "product": "BeyondCorp Dynamic Access",
      "category": "Dynamic Policy",
      "icon": "⚡",
      "roles": [
        "PE"
      ],
      "pillar": "Visibility & Analytics",
      "capabilities": [
        "7.6"
      ],
      "nist_1800_35": true,
      "builds": "E4B4-B5",
      "description": "Dynamic, context-aware access policies that adjust in real-time based on device, user, and threat signals.",
      "zt_role": "PE for ML-driven dynamic policy decisions. Adjusts access based on real-time risk signals."
    },
    {
      "id": "ms-conditional-dynamic",
      "name": "Microsoft",
      "product": "Entra Conditional Access (Dynamic)",
      "category": "Dynamic Access Control",
      "icon": "⚡",
      "roles": [
        "PE"
      ],
      "pillar": "Visibility & Analytics",
      "capabilities": [
        "7.6"
      ],
      "nist_1800_35": true,
      "builds": "E3B1-B5",
      "description": "Real-time, risk-adaptive access policies that continuously evaluate user, device, location, and threat signals.",
      "zt_role": "PE for dynamic policy decisions. Risk scores from Identity Protection / Sentinel drive real-time access changes."
    },
    {
      "id": "okta-riskext",
      "name": "Okta",
      "product": "Okta Risk Engine / Identity Engine",
      "category": "Dynamic Access Control",
      "icon": "⚡",
      "roles": [
        "PE"
      ],
      "pillar": "Visibility & Analytics",
      "capabilities": [
        "7.6"
      ],
      "nist_1800_35": true,
      "builds": "E1B1-B3",
      "description": "Risk-based authentication engine that dynamically adjusts MFA and access policies based on real-time signals.",
      "zt_role": "PE for risk-driven dynamic access decisions."
    },
    {
      "id": "auth0-fga",
      "name": "Auth0 (Okta)",
      "product": "FGA / Authorization",
      "category": "Authorization Engine / PDP",
      "icon": "⚖️",
      "roles": [
        "PE"
      ],
      "pillar": "Automation & Orchestration",
      "capabilities": [
        "6.1"
      ],
      "nist_1800_35": true,
      "builds": "E1B1-B3",
      "description": "Centralized fine-grained authorization engine — ABAC/RBAC policy decisions as a service (PDP-as-a-Service).",
      "zt_role": "PE (PDP) making real-time, fine-grained authorization decisions for all applications and APIs."
    },
    {
      "id": "opa-pdp",
      "name": "CNCF",
      "product": "Open Policy Agent (OPA)",
      "category": "Policy-as-Code / PDP",
      "icon": "⚖️",
      "roles": [
        "PE"
      ],
      "pillar": "Automation & Orchestration",
      "capabilities": [
        "6.1",
        "6.6"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Open-source general-purpose policy engine for unified policy enforcement across cloud, APIs, and microservices.",
      "zt_role": "PE (PDP) for policy decisions. Evaluates authorization requests in real time as a sidecar or service."
    },
    {
      "id": "aws-cedar",
      "name": "AWS",
      "product": "Cedar / Verified Permissions",
      "category": "Authorization Policy / PDP",
      "icon": "🌲",
      "roles": [
        "PE"
      ],
      "pillar": "Automation & Orchestration",
      "capabilities": [
        "6.1"
      ],
      "nist_1800_35": true,
      "builds": "E4B4-B5",
      "description": "Open-source policy language and managed authorization service for fine-grained access decisions.",
      "zt_role": "PE (PDP) for centralized authorization decisions. Policy-as-code for fine-grained access control."
    },
    {
      "id": "zscaler-dlp",
      "name": "Zscaler",
      "product": "ZIA DLP / CASB",
      "category": "Cloud DLP",
      "icon": "🛡️",
      "roles": [
        "PEP"
      ],
      "pillar": "Data",
      "capabilities": [
        "4.6",
        "4.3"
      ],
      "nist_1800_35": true,
      "builds": "E1B2, E1B3",
      "description": "Cloud-native DLP integrated into ZIA SSE — data classification and exfiltration prevention at the edge.",
      "zt_role": "PEP for data loss prevention policies on web/cloud traffic."
    },
    {
      "id": "biocatch",
      "name": "BioCatch",
      "product": "BioCatch Behavioral Biometrics",
      "category": "Behavioral Biometrics",
      "icon": "🧬",
      "roles": [
        "PIP"
      ],
      "pillar": "User",
      "capabilities": [
        "1.6",
        "1.8"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Behavioral biometrics — continuously authenticates users by analyzing physical and cognitive digital behavior patterns.",
      "zt_role": "PIP for behavioral biometric signals feeding the PE for continuous authentication decisions."
    },
    {
      "id": "secureauth",
      "name": "SecureAuth",
      "product": "SecureAuth Identity Platform",
      "category": "Behavioral Authentication",
      "icon": "🧬",
      "roles": [
        "PE"
      ],
      "pillar": "User",
      "capabilities": [
        "1.6",
        "1.8"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Continuous risk-based authentication with behavioral biometrics — keystroke dynamics, device recognition.",
      "zt_role": "PE for behavioral authentication decisions. PIP for behavioral risk signals."
    },
    {
      "id": "bigid",
      "name": "BigID",
      "product": "BigID Data Discovery",
      "category": "Data Discovery / DSPM",
      "icon": "🔍",
      "roles": [
        "PIP"
      ],
      "pillar": "Network/Environment",
      "capabilities": [
        "5.1"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "AI-powered data discovery and mapping for understanding data flows across environments.",
      "zt_role": "PIP providing data flow mapping and visibility into data movement across network environments."
    },
    {
      "id": "ms-purview-gov",
      "name": "Microsoft",
      "product": "Purview Data Governance (Unified Catalog)",
      "category": "Data Governance",
      "icon": "📊",
      "roles": [
        "PIP"
      ],
      "pillar": "Data",
      "capabilities": [
        "4.2",
        "4.1"
      ],
      "nist_1800_35": false,
      "builds": "N/A",
      "description": "Unified data governance — data map, catalog, lineage, and sensitivity classification across the estate.",
      "zt_role": "PIP for data estate governance and classification metadata."
    }
  ],
  "capabilities_simple": {
    "User": [
      "User Inventory",
      "Conditional User Access",
      "Multi-Factor Authentication",
      "Privileged Access Management",
      "Identity Federation & Credentialing",
      "Behavioral, Contextual ID & Biometrics",
      "Least Privileged Access",
      "Continuous Authentication",
      "Integrated ICAM Platform"
    ],
    "Device": [
      "Device Inventory",
      "Device Detection & Compliance",
      "Device Authorization w/ Real-Time Inspection",
      "Remote Access",
      "Automated Asset, Vulnerability & Patch Management",
      "Unified Endpoint Management & MDM",
      "EDR & XDR"
    ],
    "Network/Environment": [
      "Data Flow Mapping",
      "Software Defined Networking",
      "Macro Segmentation",
      "Micro Segmentation"
    ],
    "Application & Workload": [
      "Application Inventory",
      "Secure Software Development & Integration",
      "Software Risk Management",
      "Resource Authorization & Integration",
      "Continuous Monitoring & Ongoing Authorizations"
    ],
    "Data": [
      "Data Catalog Risk Alignment",
      "Enterprise Data Governance",
      "Data Labeling & Tagging",
      "Data Monitoring & Sensing",
      "Data Encryption & Rights Management",
      "Data Loss Prevention",
      "Data Access Control"
    ],
    "Visibility & Analytics": [
      "Log All Traffic",
      "SIEM",
      "Common Security & Risk Analytics",
      "User & Entity Behavior Analytics",
      "Threat Intelligence Integration",
      "Automated Dynamic Policies"
    ],
    "Automation & Orchestration": [
      "Policy Decision Point & Orchestration",
      "Critical Process Automation",
      "Machine Learning",
      "Artificial Intelligence",
      "SOAR",
      "API Standardization",
      "SOC & Incident Response"
    ]
  }
};
